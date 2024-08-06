import axios from 'axios';

const BASE_URL = 'https://468f-49-228-236-244.ngrok-free.app/';
const VERSION = 'v1';

const axiosInstance = axios.create({
  baseURL: `${BASE_URL}${VERSION}`,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default axiosInstance;
