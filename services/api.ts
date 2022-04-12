import axios from 'axios';
import md5 from 'md5';
import { setupCache } from 'axios-cache-adapter';
import { BASE_API_URL, PUBLIC_API_KEY, PRIVATE_API_KEY } from '../.env';

const url = `${BASE_API_URL}/v1/public/`;

// Create `axios-cache-adapter` instance
const cache = setupCache({
  maxAge: 15 * 60 * 1000, // 15min cache
});

const instance = axios.create({
  baseURL: url,
  adapter: cache.adapter,
  headers: {
    Accept: 'application/json',
  },
});

instance.interceptors.request.use((config) => {
  const time = new Date().getTime();
  const hash = md5(`${time}${PRIVATE_API_KEY}${PUBLIC_API_KEY}`);

  config.params = {
    ts: time,
    apikey: PUBLIC_API_KEY,
    hash,
    ...config.params,
  };

  return config;
});

instance.interceptors.response.use((response) => response?.data?.data);

export default instance;
