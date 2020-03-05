<template>
  <div v-if="results.length">
    <ul>
      <li v-for="item in results" v-bind:key="item.query">
        <img v-bind:src="item.image">{{item.name}}
      </li>
    </ul>
  </div>
  <div v-else>
    {{query}} 검색어로 찾을 수 없습니다.
  </div>
</template>

<script>
export default {
  props: ['results', 'query']
}
</script>

<style>

</style>