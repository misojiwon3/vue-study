<template>
	<div class="contents">
		<div class="form-wrapper form-wrapper-sm">
			<form @submit.prevent="submitForm" class="form">
				<div>
					<label for="username">id:</label>
					<input id="username" type="text" v-model="username" />
					<p class="validation-text">
						<span class="warning" v-if="!isUsernameValid && username">
							Please enter an email address
						</span>
					</p>
				</div>
				<div>
					<label for="password">pw:</label>
					<input id="password" type="text" v-model="password" />
				</div>
				<button
					:disabled="!isUsernameValid || !password"
					type="submit"
					class="btn"
				>
					로그인
				</button>
			</form>
			<p class="log">{{ logMessage }}</p>
		</div>
	</div>
</template>

<script>
import { loginUser } from '@/api/index.js';
import { validateEmail } from '@/utils/validation.js';

export default {
	data() {
		return {
			username: '',
			password: '',
			logMessage: ''
		};
	},
	computed: {
		isUsernameValid() {
			return validateEmail(this.username);
		}
	},
	methods: {
		initForm() {
			this.username = '';
			this.password = '';
		},
		async submitForm() {
			try {
				const loginData = {
					username: this.username,
					password: this.password
				};
				const { data } = await loginUser(loginData);
				console.log(data.user.username);
				this.$router.push('/main');
				// this.logMessage = `${data.user.username} 로그인되었습니다.`;
			} catch (error) {
				console.log(error.response);
				this.logMessage = error.response.data;
			} finally {
				this.initForm();
			}
		}
	}
};
</script>

<style>
.btn {
	color: white;
}
</style>
