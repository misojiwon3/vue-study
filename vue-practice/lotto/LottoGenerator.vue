<template>
  <div>
    <div>당첨 숫자</div>
    <div id="result">
      <lotto-ball v-for="ball in winBalls" :key="ball" :number="ball"></lotto-ball>
    </div>
    <div>보너스</div>
    <lotto-ball v-if="bonus" :number="bonus"></lotto-ball>
    <button v-if="redo" @click="regenerateBalls">한번더</button>
  </div>
</template>

<script>
import LottoBall from "./LottoBall";

const timeouts = [];

export default {
  components: {
    LottoBall
  },
  data() {
    return {
      winNumbers: this.getWinNumbers(),
      winBalls: [],
      bonus: null,
      redo: false
    };
  },
  watch: {
    winBalls(newValue, oldValud) {
      if (newValue.length === 0) {
        this.showBalls();
      }
    }
  },
  methods: {
    getWinNumbers() {
      const candidate = Array(45)
        .fill()
        .map((v, i) => i + 1);
      const shuffle = [];
      while (candidate.length > 0) {
        shuffle.push(
          candidate.splice(Math.floor(Math.random() * candidate.length), 1)[0]
        );
      }
      const bonusNumber = shuffle[shuffle.length - 1];
      const winNumbers = shuffle.slice(0, 6).sort((p, c) => p - c);
      return [...winNumbers, bonusNumber];
    },
    regenerateBalls() {
      this.winNumbers = this.getWinNumbers();
      this.winBalls = [];
      this.bonus = null;
      this.redo = false;
    },
    showBalls() {
      const ballCount = this.winNumbers.length - 1;
      for (let i = 0; i < ballCount; i++) {
        timeouts[i] = setTimeout(() => {
          this.winBalls.push(this.winNumbers[i]);
        }, (i + 1) * 500);
      }
      timeouts[ballCount] = setTimeout(() => {
        this.bonus = this.winNumbers[ballCount];
        this.redo = true;
      }, 4000);
    }
  },
  mounted() {
    this.showBalls();
  },
  beforeDestroy() {
    timeouts.forEach(t => {
      clearTimeout(t);
    });
  }
};
</script>

<style>
</style>