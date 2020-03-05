<template>
  <div id="app">
    <header>
      <h2 class="container">검색</h2>
    </header>
    <div class="container">
      <form-component v-bind:value="query" v-on:@submit="onSubmit" v-on:@reset="onReset"></form-component>
    </div>
    <div v-if="submitted">
      <result-component v-bind:results="searchResult"></result-component>
    </div>
    <div v-else>
      <tab-component v-bind:tabs="tabs" 
        v-bind:selectedTab="selectedTab" 
        v-on:@change="onClickTab">
      </tab-component>
      <div v-if="selectedTab === tabs[0]">
        <list-component v-bind:data="keywordList" type="keyword" 
          v-on:@click="onClickKeyword" 
          v-on:@remove="onClickHistory">
        </list-component>
      </div>
      <div v-else>
        <list-component v-bind:data="historyList" type="history" 
          v-on:@click="onClickKeyword" 
          v-on:@remove="onClickHistory">
        </list-component>
      </div>
    </div>
  </div>
</template>

<script>
import FormComponent from "./components/FormComponent.vue";
import TabComponent from "./components/TabComponent.vue";
import ResultComponent from "./components/ResultComponent.vue";
import ListComponent from "./components/ListComponent.vue";

import SearchModel from "./models/SearchModel.js";
import KeywordModel from './models/KeywordModel.js'
import HistoryModel from "./models/HistoryModel.js";

export default {
  data() {
    return {
      query: "",
      tabs: ["추천 검색어", "최근 검색어"],
      selectedTab: "",
      submitted: false,
      searchResult: [],
      keywordList: [],
      historyList: []
    };
  },
  created() {
    this.selectedTab = this.tabs[0];
    this.fetchKeyword();
    this.fetchHistory();
  },
  components: {
    FormComponent,
    TabComponent,
    ResultComponent,
    ListComponent
  },
  methods: {
    onSubmit(query) {
      this.query = query;
      this.search();
    },
    onClickTab(tab) {
      this.selectedTab = tab;
    },
    onReset() {
      this.resetForm();
    },
    onClickKeyword(keyword) {
      this.query = keyword
      this.search()
    },
    onClickHistory(keyword) {
      HistoryModel.remove(keyword)
      this.fetchHistory()
    },
    resetForm() {
      this.query = "";
      this.submitted = false;
      this.searchResult = [];
    },
    fetchKeyword() {
      KeywordModel.list().then(data => {
        this.keywordList = data
      })
    },
    fetchHistory() {
      HistoryModel.list().then(data => {
        this.historyList = data;
      });
    },
    search() {
      SearchModel.list().then(data => {
        this.searchResult = data;
        this.submitted = true;
      });
      HistoryModel.add(this.query);
      this.fetchHistory();
    }
  }
};
</script>

<style>
body,
ul {
  margin: 0;
  padding: 0;
}
ul {
  list-style: none;
}
img {
  width: 100%;
}

.container {
  margin: 0 15px 0 15px;
}
header {
  border-bottom: 1px #ccc solid;
  padding: 15px 0 15px 0;
  text-align: center;
}
input[type="text"] {
  display: block;
  box-sizing: border-box;
  width: 100%;
  margin: 15px 0 15px 0;
  padding: 10px 15px;
  font-size: 14px;
  line-height: 1.5;
  border: 1px solid #cccccc;
}
.content {
  border: 1px solid #ccc;
}
ul.tabs {
  display: flex;
}
.tabs li {
  display: inline-block;
  width: 50%;
  padding: 15px;
  text-align: center;
  box-sizing: border-box;
  border-bottom: 1px solid #ccc;
  background-color: #eee;
  color: #999;
}
.tabs li.active {
  background-color: #2ac1bc;
  color: #fff;
}
.list li {
  box-sizing: border-box;
  display: block;
  padding: 15px;
  border-bottom: 1px solid #ccc;
  position: relative;
}
.list li:last-child {
  border-bottom: none;
}
.list li .number {
  margin-right: 15px;
  color: #ccc;
}
.list li .date {
  position: absolute;
  right: 50px;
  top: 15px;
  margin-right: 15px;
  color: #ccc;
}
.list li .btn-remove {
  position: absolute;
  right: 0px;
  top: 15px;
  margin-right: 15px;
}

form {
  position: relative;
}
.btn-reset,
.btn-remove {
  border-radius: 50%;
  background-color: #ccc;
  color: white;
  border: none;
  padding: 2px 5px;
}
.btn-reset {
  position: absolute;
  top: 12px;
  right: 10px;
}
.btn-reset::before,
.btn-remove::before {
  content: "X";
}

#search-result li {
  display: flex;
  margin-bottom: 15px;
}
#search-result img {
  width: 30%;
  height: 30%;
}
</style>
