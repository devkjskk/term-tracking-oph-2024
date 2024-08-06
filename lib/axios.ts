import axios from 'axios';

const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

const VERSION = 'v1';

const axiosInstance = axios.create({
  baseURL: `${BASE_URL}${VERSION}`,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default axiosInstance;
