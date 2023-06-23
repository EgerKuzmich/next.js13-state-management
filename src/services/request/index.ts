import { AxiosRequestConfig, AxiosResponse } from 'axios';
import { useOauthCredentials } from 'services/oauth/store';
import { IOAuthCredentials } from 'services/oauth/type';
import { QueryClient } from 'utils/api';

const getOauthHeaders = (credentials: IOAuthCredentials) => {
  const { access_token } = credentials;

  return {
    Authorization: `Oauth ${access_token}`,
  };
};

export const getCredentialHeaders = (credentials: IOAuthCredentials) => ({
  'X-Org-ID': import.meta.env.VITE_ORG_ID as string,
  ...getOauthHeaders(credentials),
});

const getBaseConfig = (credentials: IOAuthCredentials) => {
  const headers = getCredentialHeaders(credentials);

  return { headers };
};

export class RequestService {
  _baseClient: QueryClient;
  _config: AxiosRequestConfig;

  constructor(baseUrl?: string, config?: AxiosRequestConfig) {
    this._baseClient = new QueryClient(baseUrl, config);
    this._config = config || getBaseConfig(useOauthCredentials.getState());

    useOauthCredentials.subscribe((credentials) => {
      this.config = getBaseConfig(credentials);
    });
  }

  set config(config: AxiosRequestConfig) {
    this._config = config;
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  fetchQuery = async <T = any, D = any>(config?: AxiosRequestConfig<D>): Promise<AxiosResponse<T> | void> => {
    const resultConfig = config ? { ...this._config, ...config } : this._config;

    return this._baseClient.fetchQuery<T, D>(resultConfig);
  };
}
