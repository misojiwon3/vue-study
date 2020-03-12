<template>
  <div class="form-container">
    <post-update-form></post-update-form>
  </div>
</template>

<script>
import PostUpdateForm from '@/components/posts/PostUpdateForm.vue';

export default {
  components: {
    PostUpdateForm
  },
  created() {
    console.log(this.$route.params.id);
  }
};
</script>

<style></style>
