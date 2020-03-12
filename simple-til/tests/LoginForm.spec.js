import { shallowMount } from '@vue/test-utils';
// import Vue from 'vue';
import LoginForm from './LoginForm.vue';

describe('LoginForm.vue', () => {
	test('컴포넌트가 마운트되면 화면에 그려져야 함', () => {
		// const instance = new Vue(LoginForm).$mount();
		const wrapper = shallowMount(LoginForm);
		// console.log(wrapper.vm.username);
		expect(wrapper.vm.username).toBe('');
	});

	test('id는 이메일 형식이어야 한다', () => {
		const wrapper = shallowMount(LoginForm, {
			data() {
				return {
					username: 'test@c.com'
				};
			}
		});
		// find : dom selector 기호를 통해 html 태그를 찾을 수 있음. jquery .find()랑 같음
		// const usernameInput = wrapper.find('#username');
		// console.log(usernameInput.element.value);
		// console.log(usernameInput.html());
		// console.log(wrapper.vm.isUsernameValid);
		const warningText = wrapper.find('.warning');
		// console.log(warningText.html());
		expect(!warningText.exists()).toBeTruthy();
	});

	test('id와 pw가 입력되지 않으면 로그인 버튼이 비활성화', () => {
		const wrapper = shallowMount(LoginForm, {
			data() {
				return {
					username: 'misojiwon3@naver.com',
					password: ''
				};
			}
		});
		const button = wrapper.find('.disabled');
		console.log(button.element.disabled);
		expect(button.element.disabled).toBeTruthy;
	});
});
