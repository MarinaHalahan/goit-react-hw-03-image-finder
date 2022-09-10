import axios from 'axios';
axios.defaults.baseURL = 'https://pixabay.com/api/';
const KEY = '28330490-ea9a8c99c9db698ace415b720';

export const fetchImage = async (page, query) => {
  const response = await axios.get(
    `/?key=${KEY}&q=${query}&page=${page}&image_type=photo&orientation=horizontal&per_page=12`
  );
  return response.data;
};
