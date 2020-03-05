<template>
  <div v-if="data.length">
    <ul class="list">
      <li v-for="(item, index) in data" v-bind:key="index" v-on:click="onClickList(item.keyword)">
        <span class="number" v-if="keywordType">{{index + 1}}</span>
        {{item.keyword}}
        <span class="date" v-if="historyType">{{item.date}}</span>
        <button class="btn-remove" v-if="historyType" v-on:click.stop="onRemoveList(item.keyword)"></button>
      </li>
    </ul>
  </div>
  <div v-else>
    <div v-if="keywordType">추천 검색어가 없습니다.</div>
    <div v-if="historyType">최근 검색어가 없습니다.</div>
  </div>
</template>

<script>
export default {
  props: ["data", "type"],
  computed: {
    keywordType() {
      return this.type === "keyword";
    },
    historyType() {
      return this.type === "history";
    }
  },
  methods: {
    onClickList(keyword) {
      this.$emit("@click", keyword);
    },
    onRemoveList(keyword) {
      this.$emit("@remove", keyword);
    }
  }
};
</script>

<style>
</style>