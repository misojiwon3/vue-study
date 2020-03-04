<template>
<header>
      <h2 class="container">검색</h2>
    </header>
    <div class="container">
      <search-form v-bind:value="query" v-on:@submit="onSubmit" v-on:@reset="onReset"></search-form>
      </div>
</template>

<script>
import FormComponent from './components/FormComponent.js'
import ResultComponent from './components/ResultComponent.js'
import ListComponent from './components/ListComponent.js'
import TabComponent from './components/TabComponent.js'

import SearchModel from './models/SearchModel.js'
import KeywordModel from './models/KeywordModel.js'
import HistoryModel from './models/HistoryModel.js'

export default {
  name: 'App',
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
    'search-form': FormComponent
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
}
</script>

