import { shallowMount } from '@vue/test-utils';
import SignupForm from '@/components/SignupForm.vue';

describe('SignupForm.vue', () => {
	test('회원가입 페이지의 input들 입력 안할 시 버튼 비활성화', () => {
		const wrapper = shallowMount(SignupForm, {
			data() {
				return {
					username: ''
				};
			}
		});
		const button = wrapper.find('.btn');
		console.log(button.element.disabled);
		expect(button.element.disabled).toBeTruthy();
	});
});
