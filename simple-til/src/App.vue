<template>
	<div class="app">
		<AppHeader></AppHeader>
		<div class="app-contents">
			<!-- 현재 route에 맞는 component가 render -->
			<router-view></router-view>
		</div>
	</div>
</template>

<script>
import AppHeader from '@/components/_common/AppHeader.vue';

export default {
	components: {
		AppHeader
	}
};
</script>

<style>
@import './css/reset.css';
@import './css/common.css';
</style>
