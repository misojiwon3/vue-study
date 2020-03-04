import FormComponent from './components/FormComponent.js'
import ResultComponent from './components/ResultComponent.js'
import ListComponent from './components/ListComponent.js'
import TabComponent from './components/TabComponent.js'

import SearchModel from './models/SearchModel.js'
import KeywordModel from './models/KeywordModel.js'
import HistoryModel from './models/HistoryModel.js'

new Vue({
  el: '#app', // 이 DOM을 찾아 생성한 객체를 binding 한다
  data: {
    query: '',
    submitted: false,
    tabs: ['추천 검색어', '최근 검색어'],
    selectedTab: '',
    searchResult: [],
    keywordList: [],
    historyList: []
  },
  components: {
    'search-form': FormComponent, // key 값은 실제 사용할 directive 명
    'search-result': ResultComponent,
    'list': ListComponent,
    'tabs': TabComponent
  },
  created() {
    this.selectedTab = this.tabs[0]
    this.fetchKeyword()
    this.fetchHistory()
  },
  methods: {
    onSubmit(query) {
      this.query = query
      this.search()
    },
    onReset(e) {
      this.resetForm()
    },
    onClickTab(tab) {
      this.selectedTab = tab
    },
    onClickKeyword(keyword) {
      this.query = keyword
      this.search()
    },
    onClickHistory(keyword) {
      HistoryModel.remove(keyword)
      this.fetchHistory()
    },
    fetchKeyword() {
      KeywordModel.list().then(data => {
        this.keywordList = data
      })
    },
    fetchHistory() {
      HistoryModel.list().then(data => {
        this.historyList = data
      })
    },
    search() {
      SearchModel.list().then(data => {
        this.searchResult = data
        this.submitted = true
      })
      HistoryModel.add(this.query)
      this.fetchHistory()
    },
    resetForm() {
      this.query = ''
      this.submitted = false
      this.searchResult = []
    }
  }
})