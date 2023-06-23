/* eslint-disable  @typescript-eslint/no-explicit-any */
import axios, { AxiosError, AxiosRequestConfig, AxiosResponse, AxiosStatic } from 'axios';

export type TResponseState<T, E = unknown> = [T | null, E | null];

export class QueryClient {
  private client: AxiosStatic;
  private baseUrl?: string;
  private _config: AxiosRequestConfig;

  constructor(baseUrl?: string, config?: AxiosRequestConfig) {
    this.client = axios;
    this.baseUrl = baseUrl;
    this._config = config || {};
  }

  get config(): AxiosRequestConfig {
    return this._config;
  }

  set config(config: AxiosRequestConfig) {
    this._config = { ...this.config, ...config };
  }

  public getUrl = (url: string): string => {
    if (this.baseUrl) {
      return `${this.baseUrl}${url}`;
    }

    return url;
  };

  public processRequest = async <T = any>(request: Promise<AxiosResponse<T>>): Promise<AxiosResponse<T> | void> => {
    try {
      const response = await request;

      return response;
    } catch (error: unknown) {
      const axiosError = error as AxiosError;

      throw axiosError;
    }
  };

  public fetchQuery = async <T = any, D = any>(config: AxiosRequestConfig<D>): Promise<AxiosResponse<T> | void> => {
    const { url: endpoint, ...rest } = config;

    const url = this.getUrl(endpoint || '');

    return this.client({ ...this.config, ...rest, url }).catch((error: AxiosError) => {
      throw new Error(error.message);
    });
  };

  public get = async <T = any, D = any>(url: string, config?: AxiosRequestConfig<D>): Promise<AxiosResponse<T>> =>
    await this.client.get(this.getUrl(url), config);

  public delete = async <T = any, D = any>(url: string, config?: AxiosRequestConfig<D>): Promise<AxiosResponse<T>> =>
    await this.client.delete(this.getUrl(url), config);

  public head = async <T = any, D = any>(url: string, config?: AxiosRequestConfig<D>): Promise<AxiosResponse<T>> =>
    await this.client.head(this.getUrl(url), config);

  public options = async <T = any, D = any>(url: string, config?: AxiosRequestConfig<D>): Promise<AxiosResponse<T>> =>
    await this.client.options(this.getUrl(url), config);

  public post = async <T = any, D = any>(
    url: string,
    data?: D,
    config?: AxiosRequestConfig<D>,
  ): Promise<AxiosResponse<T>> => await this.client.post(this.getUrl(url), data, config);

  public put = async <T = any, D = any>(
    url: string,
    data?: D,
    config?: AxiosRequestConfig<D>,
  ): Promise<AxiosResponse<T>> => await this.client.put(this.getUrl(url), data, config);

  public patch = async <T = any, D = any>(
    url: string,
    data?: D,
    config?: AxiosRequestConfig<D>,
  ): Promise<AxiosResponse<T>> => await this.client.patch(this.getUrl(url), data, { ...this.config, ...config });

  public postForm = async <T = any, D = any>(
    url: string,
    data?: D,
    config?: AxiosRequestConfig<D>,
  ): Promise<AxiosResponse<T>> => await this.client.postForm(this.getUrl(url), data, config);

  public putForm = async <T = any, D = any>(
    url: string,
    data?: D,
    config?: AxiosRequestConfig<D>,
  ): Promise<AxiosResponse<T>> => await this.client.putForm(this.getUrl(url), data, config);

  public patchForm = async <T = any, D = any>(
    url: string,
    data?: D,
    config?: AxiosRequestConfig<D>,
  ): Promise<AxiosResponse<T>> => await this.client.patchForm(this.getUrl(url), data, config);
}
