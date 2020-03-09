<template>
	<div>
		<header>
			<router-link to="/login">로그인</router-link> |
			<router-link to="/signup">회원가입</router-link>
		</header>
		<!-- 현재 route에 맞는 component가 render -->
		<router-view></router-view>
	</div>
</template>

<script>
export default {};
</script>

<style></style>
