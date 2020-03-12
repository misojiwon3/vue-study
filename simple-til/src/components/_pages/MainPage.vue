<template>
	<div>
		<div class="main list-container contents">
			<h1 class="page-header">Today I Learned</h1>
			<loading-spinner v-if="isLoading"></loading-spinner>
			<ul v-else>
				<post-list-item
					v-for="item in postItems"
					:key="item._id"
					:item="item"
					@refresh="fetchPosts"
				></post-list-item>
			</ul>
		</div>
		<router-link to="/create" class="create-button">
			<i class="ion-md-add"></i>
		</router-link>
	</div>
</template>

<script>
import PostListItem from '@/components/posts/PostListItem.vue';
import LoadingSpinner from '@/components/_common/LoadingSpinner.vue';
import { fetchPosts } from '@/api/posts.js';

export default {
	data() {
		return {
			postItems: [],
			isLoading: false
		};
	},
	components: {
		PostListItem,
		LoadingSpinner
	},
	created() {
		if (!this.$store.getters.isLogin) {
			this.$router.push('/');
		}
		this.fetchPosts();
	},
	methods: {
		async fetchPosts() {
			this.isLoading = true;
			const { data } = await fetchPosts();
			this.isLoading = false;
			this.postItems = data.posts;
		}
	}
};
</script>

<style></style>
