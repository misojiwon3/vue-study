<template>
	<div class="contents">
		<h1 class="page-header">Update Post</h1>
		<div class="form-wrapper">
			<form class="form" @submit.prevent="submitForm">
				<div>
					<label for="title">Title: </label>
					<input id="title" type="text" v-model="title" />
				</div>
				<div>
					<label for="contents">Contents: </label>
					<textarea id="contents" type="text" rows="5" v-model="contents" />
					<p class="validation-text warning" v-if="!isContentsValid">
						Contents must be less than 200
					</p>
				</div>
				<button type="submit" class="btn">Update</button>
			</form>
			<p class="log">
				{{ logMessage }}
			</p>
		</div>
	</div>
</template>

<script>
import { fetchPost, updatePost } from '@/api/posts.js';

export default {
	data() {
		return {
			title: '',
			contents: '',
			logMessage: ''
		};
	},
	async created() {
		const { data } = await fetchPost(this.$route.params.id);
		this.title = data.title;
		this.contents = data.contents;
	},
	computed: {
		isContentsValid() {
			return this.contents.length <= 200;
		}
	},
	methods: {
		async submitForm() {
			try {
				const id = this.$route.params.id;
				await updatePost(id, {
					title: this.title,
					contents: this.contents
				});
				this.$router.push('/main');
			} catch (error) {
				console.log(error);
			}
		}
	}
};
</script>

<style scoped>
.form-wrapper .form {
	width: 100%;
}
.btn {
	color: white;
}
</style>
