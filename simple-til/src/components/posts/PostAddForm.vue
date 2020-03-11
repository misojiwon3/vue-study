<template>
	<div class="contents">
		<h1 class="page-header">Create Post</h1>
		<div class="form-wrapper">
			<form class="form" @submit.prevent="submitForm">
				<div>
					<label for="title">title</label>
					<input id="title" type="text" v-model="title" />
				</div>
				<div>
					<label for="contents">contents</label>
					<textarea id="contents" type="text" rows="5" v-model="contents" />
					<p class="validation-text warning" v-if="!isContentsValid">
						Contents must be less than 200
					</p>
				</div>
				<button type="submit" class="btn">Create</button>
			</form>
			<p class="log">
				{{ logMessage }}
			</p>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			title: '',
			contents: '',
			logMessage: ''
		};
	},
	computed: {
		isContentsValid() {
			return this.contents.length <= 200;
		}
	},
	methods: {
		initForm() {
			this.title = '';
			this.contents = '';
		},
		async submitForm() {
			try {
				console.log('submti');
				const postData = {
					title: this.title,
					contents: this.contents
				};
				const response = await this.$store.dispatch('CREATE_POST', postData);
				console.log(response);
				this.$router.push('/main');
			} catch (error) {
				console.log(error.response.data);
				this.logMessage = error.response.data.message;
			} finally {
				this.initForm();
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
