<template>
  <li>
    <div class="post-title">
      {{ item.title }}
    </div>
    <div class="post-content">
      {{ item.contents }}
    </div>
    <div class="post-time">
      {{ item.createdAt | formatDate }}
      <i class="icon ion-md-create" @click="moveToUpdatePage"></i>
      <i class="icon ion-md-trash" @click="deleteItem"></i>
    </div>
  </li>
</template>

<script>
import { deletePost } from '@/api/posts.js';

export default {
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  methods: {
    moveToUpdatePage() {
      console.log('update');
      this.$router.push(`/posts/${this.item._id}`);
    },
    async deleteItem() {
      try {
        if (confirm('삭제하시겠습니까?')) {
          await deletePost(this.item._id);
          this.$emit('refresh');
        }
      } catch (error) {
        console.log(333, error);
      }
    }
  }
};
</script>

<style></style>
