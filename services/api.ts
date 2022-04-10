import axios from 'axios';
import md5 from 'md5';
import { setupCache } from 'axios-cache-adapter';
import { NEXT_PUBLIC_BASE_API_URL, NEXT_PUBLIC_PUBLIC_API_KEY, NEXT_PUBLIC_PRIVATE_API_KEY } from '.';

const url = `${NEXT_PUBLIC_BASE_API_URL}/v1/public/`;

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
  const hash = md5(`${time}${NEXT_PUBLIC_PRIVATE_API_KEY}${NEXT_PUBLIC_PUBLIC_API_KEY}`);

  config.params = {
    ts: time,
    apikey: NEXT_PUBLIC_PUBLIC_API_KEY,
    hash,
    ...config.params,
  };

  return config;
});

export default instance;
