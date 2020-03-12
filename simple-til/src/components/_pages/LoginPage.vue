<template>
  <div>
    <h1 class="page-header">로그인 페이지</h1>
    <LoginForm></LoginForm>
  </div>
</template>

<script>
import LoginForm from '@/components/LoginForm.vue';
export default {
  components: {
    LoginForm
  },
  computed: {
    username() {
      return this.$route.params.usename;
    }
  },
  methods: {
    goBack() {
      window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/');
    }
  }
};
</script>

<style></style>
