import axios from 'axios';

// 가짜 API 서버로 요청 보내는 비동기 함수
// $ json-server ./data.json --port 4000
export const getPosts = async () => {
  const response = await axios.get('http://localhost:4000/posts');
  return response.data;
};

export const getPostById = async (id) => {
  const response = await axios.get(`http://localhost:4000/posts/${id}`);
  return response.data;
};
