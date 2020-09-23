import axios from 'axios';

// 가짜 API 서버로 요청 보내는 비동기 함수
// $ json-server ./data.json --port 4000
// 웹팩 개발서버의 proxy 설정 후(CRA의 경우 package.json에서 설정) 도메인 생략 시,
// 현재 페이지의 도메인(localhost:3000)을 가리키게 됨
export const getPosts = async () => {
  const response = await axios.get('/posts');
  return response.data;
};

export const getPostById = async (id) => {
  const response = await axios.get(`/posts/${id}`);
  return response.data;
};
