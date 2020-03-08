<template>
  <div>
    <h1>{{result}}</h1>
    <form @submit.prevent="onSubmit">
      <input ref="answer" type="text" minlength="4" maxlength="4" v-model="value" />
      <button type="submit">입력</button>
    </form>
    <div>시도11: {{tries.length}}</div>
    <ul>
      <li v-for="(item, index) in tries" :key="index">
        <div>{{item.try}}</div>
        <div>{{item.result}}</div>
      </li>
    </ul>
  </div>
</template>

<script>
const getNumbers = () => {
  const candidates = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const array = [];
  for (let i = 0; i < 4; i += 1) {
    const chosen = candidates.splice(Math.floor(Math.random() * (9 - i)), 1)[0];
    array.push(chosen);
  }
  return array;
};

export default {
  data() {
    return {
      answer: getNumbers(),
      tries: [],
      value: "",
      result: ""
    };
  },
  methods: {
    onSubmit(e) {
      if (this.value === this.answer.join("")) {
        this.tries.push({
          try: this.value,
          result: "홈런"
        });
        this.result = "홈런!!";
        this.resetValues();
      } else {
        if (this.tries.length < 9) {
          let strikes = 0;
          let balls = 0;

          const answerArray = this.value.split("").map(v => parseInt(v));

          for (let i = 0; i < 4; i++) {
            if (answerArray[i] === this.answer[i]) {
              strikes++;
            } else if (this.answer.includes(answerArray[i])) {
              balls++;
            }
          }
          this.tries.push({
            try: this.value,
            result: `${strikes} 스트라이크, ${balls} 볼 입니다.`
          });
          this.result = "";
        } else {
          this.result = `횟수 초과하여 실패~ 답은 ${this.answer.join("")}`;
          this.resetValues();
        }
      }

      this.value = "";
      this.$refs.answer.focus();
    },
    resetValues() {
      this.answer = getNumbers();
      this.value = "";
      this.tries = [];
      this.$refs.answer.focus();
    }
  },
  created() {
    console.log("created");
  },
  mounted() {
    console.log("mounted");
  },
  updated() {
    console.log("updated");
  },
  destroyed() {
    console.log("destroyed");
  }
};
</script>

<style>
</style>