export default {
  template: '#search-form', // 이 컴포넌트가 binding 되어야 할 DOM의 식별자 입력
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