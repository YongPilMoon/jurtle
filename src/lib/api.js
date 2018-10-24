import axios from 'axios';

export const apiUri = process.env.NODE_ENV === 'development' ? 'http://localhost:4000' : 'http://52.78.38.76:4000';
export const setAuthToken = (token) => {
  axios.defaults.headers.common.token = '';
  delete axios.defaults.headers.common.token;

  if (token) {
    axios.defaults.headers.common.token = `${token}`;
  }
};

export const writePost = ({ title, body, tags, mainImg, published }) => axios.post(`${apiUri}/api/posts`, { title, body, tags, mainImg, published });
export const getPost = id => axios.get(`${apiUri}/api/posts/${id}`);
export const getPostList = ({ tag, page }) => {
  const validatedTag = (!tag) ? '' : tag;
  return axios.get(`${apiUri}/api/posts/?page=${page}&tag=${validatedTag}`);
};
export const editPost = ({ id, title, body, tags, published, mainImg }) => axios.patch(`${apiUri}/api/posts/${id}`, { title, body, tags, mainImg, published });
export const removePost = id => axios.delete(`${apiUri}/api/posts/${id}`);

export const login = password => axios.post(`${apiUri}/api/auth/login`, { password });
export const checkLogin = () => axios.get(`${apiUri}/api/auth/check`);
export const logout = () => axios.post(`${apiUri}/api/auth/logout`);
