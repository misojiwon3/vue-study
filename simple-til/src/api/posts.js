import { requestWithToken } from './api';

// 노트 생성
function createPost(postData) {
	return requestWithToken.post('posts', postData);
}

// 노트 조회
function fetchPost(postId) {
	return requestWithToken.get(`posts/${postId}`);
}

// 노트 조회
function fetchPosts() {
	return requestWithToken.get('posts');
}

// 노트 수정
function updatePost(postId, postData) {
	return requestWithToken.put(`posts/${postId}`, postData);
}

// 노트 삭제
function deletePost(postId) {
	return requestWithToken.delete(`posts/${postId}`);
}

export { createPost, fetchPosts, fetchPost, updatePost, deletePost };
