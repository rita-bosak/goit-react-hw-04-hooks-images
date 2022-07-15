import axios from 'axios';
import { API_KEY } from './apiRequest';

const fetchImage = async (name, page, perPage) => {
  const response = await axios.get(
    `/?q=${name}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=${perPage}`
  );

  return response.data.hits;
};

const ImageApi = {
  fetchImage,
};

export default ImageApi;
