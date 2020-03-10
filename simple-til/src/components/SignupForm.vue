<template>
	<div class="contents">
		<div class="form-wrapper form-wrapper-sm">
			<!-- .prevent : submit의 기본 동작인 새로고침을 막음 -->
			<form @submit.prevent="submitForm" class="form">
				<div>
					<label for="username">id: </label>
					<input id="username" type="text" v-model="username" />
				</div>
				<div>
					<label for="password">pw: </label>
					<input id="password" type="text" v-model="password" />
				</div>
				<div>
					<label for="nickname">nickname: </label>
					<input id="nickname" type="text" v-model="nickname" />
				</div>
				<button type="submit" class="btn">회원 가입</button>
			</form>
			<p class="log">{{ logMessage }}</p>
		</div>
	</div>
</template>

<script>
import { registerUser } from '@/api/index.js';
import { validateEmail } from '@/utils/validation.js';

export default {
	data() {
		return {
			username: '',
			password: '',
			nickname: '',
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
			this.nickname = '';
		},
		async submitForm() {
			const userData = {
				username: this.username,
				password: this.password,
				nickname: this.nickname
			};
			const { data } = await registerUser(userData);
			this.logMessage = `${data.username}님이 가입했습니다.`;
			this.initForm();
		}
	}
};
</script>

<style scoped>
.form {
	width: 460px;
	height: 100%;
}
.form .validation-text {
	margin-top: -0.5rem;
	margin-bottom: 0.5rem;
	font-size: 1rem;
	display: flex;
	flex-direction: row-reverse;
	justify-content: space-between;
}
.btn {
	color: white;
}
.log {
	width: 460px;
}
</style>
