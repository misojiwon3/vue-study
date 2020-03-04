export default {
  template: '#list',
  props: ['data', 'type'],
  computed: {
    keywordType() {
      return this.type === 'keyword'
    },
    historyType() {
      return this.type === 'history'
    }
  },
  methods: {
    onClickList(keyword) {
      this.$emit('@click', keyword)
    },
    onRemoveList(keyword) {
      this.$emit('@remove', keyword)
    }
  }
}