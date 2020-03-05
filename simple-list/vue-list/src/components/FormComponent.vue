<template>
  <form v-on:submit.prevent="onSubmit">
    <input type="text" v-model="rootQuery" v-on:keyup="onKeyUp" placeholder="검색어를 입력하세요" autofocus />
    <button v-on:click="onReset" v-show="rootQuery.length" type="reset" class="btn-reset"></button>
  </form>
</template>

<script>
export default {
  props: ['value'],
  data() {
    return {
      rootQuery: this.value
    }
  },
  watch: { // 감시하고있다가 변경되면 얘도 변경
    value(newValue) {
      this.rootQuery = newValue
    }
  },
  methods: {
    onSubmit() {
      this.$emit('@submit', this.rootQuery.trim())
    },
    onKeyUp() {
      if (!this.rootQuery.length) {
        this.onReset()
      }
    },
    onReset() {
      this.rootQuery = ''
      this.$emit('@reset')
    }
  }
}
</script>

<style>
</style>