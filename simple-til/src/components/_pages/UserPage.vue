<template>
  <div>User {{ $route.params.id }}</div>
</template>

<script>
export default {
  watch: {
    $route(to, from) {
      console.log(to, from);
    }
  },
  beforeRouteUpdate(to, from, next) {
    console.log('page 전환 전 log 출력');
    next();
  }
};
</script>

<style></style>
