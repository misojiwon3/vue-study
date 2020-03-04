<template>
  <form v-on:submit.prevent="onSubmit">
    <input type="text" v-model="inputValue" v-on:keyup="onKeyUp" placeholder="검색어를 입력하세요" autofocus>
    <button v-on:click="onReset" v-show="inputValue.length" type="reset" class="btn-reset"></button>
  </form>
</template>

<script>
export default {
  props: ['value'],
  data() {
    return {
      inputValue: this.value
    }
  },
  watch: { // 감시하고있다가 변경되면 얘도 변경
    value(newValue, oldValue) {
      this.inputValue = newValue
    }
  },
  methods: {
    onSubmit() {
      this.$emit('@submit', this.inputValue.trim())
    },
    onKeyUp(e) {
      console.log(e)
      if (!this.inputValue.length) {
        this.onReset()
      }
    },
    onReset() {
      this.inputValue = ''
      this.$emit('@reset')
    }
  }
}
</script>