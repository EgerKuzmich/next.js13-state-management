import { TSortType } from './type';

export const API_HOST = import.meta.env.VITE_API_HOST;

export const AUTHORIZE_URL = `https://oauth.yandex.ru/authorize?response_type=token&client_id=${
  import.meta.env.VITE_CLIENT_ID
}`;

export const OAUTH_WIDGET_URL = 'https://yastatic.net/s3/passport-sdk/autofill/v1/sdk-suggest-with-polyfills-latest.js';

export const OAUTH_SUGGEST_TOKEN_URL =
  'https://yastatic.net/s3/passport-sdk/autofill/v1/sdk-suggest-token-with-polyfills-latest.js';

export const BASE_API_URL = '/v2/issues';

export const DATE_FORMAT = {
  FULL: 'YYYY-MM-DD HH:mm:ss',
  SHORT: 'YYYY-MM-DD',
  TIME: 'HH:mm',
};

export const FETCH_STATUS = {
  FULFILLED: 'fulfilled',
  IDLE: 'idle',
  PENDING: 'pending',
  REJECTED: 'rejected',
} as const;

export const SORT_TYPE: Record<string, TSortType> = {
  ASCENDING: 'asc',
  DESCENDING: 'desc',
};
