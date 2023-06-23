import { AxiosRequestConfig } from 'axios';
import { IFullIssue, IIssueApiParams } from '../types';
import { API_HOST, BASE_API_URL } from 'utils/constants';
import { IIssueComment } from 'modules/Comments/types';
import { RequestService } from 'services/request';

const GET_ENDPOINT = {
  SEARCH: () => `${BASE_API_URL}/_search`,
  COUNT: () => `${BASE_API_URL}/_count`,
  GET_COMMENTS: (issueId: string) => `${BASE_API_URL}/${issueId}/comments`,
};

export class IssueService {
  private _client: RequestService;

  constructor() {
    this._client = new RequestService(API_HOST);
  }

  search = async (params: IIssueApiParams, config: AxiosRequestConfig = {}) => {
    const url = GET_ENDPOINT.SEARCH();

    const query = { method: 'POST', data: params, url, ...config };

    const { data } = (await this._client.fetchQuery<IFullIssue[]>(query)) ?? {};

    if (!data) {
      return;
    }

    return data;
  };

  getCount = (params?: IIssueApiParams, config: AxiosRequestConfig = {}) => {
    const url = GET_ENDPOINT.COUNT();

    const query = { method: 'POST', data: params, url, ...config };

    return this._client.fetchQuery<number>(query);
  };

  getComments = (issueId?: string, config: AxiosRequestConfig = {}) => {
    if (!issueId) {
      return Promise.reject(new Error('Issue id is required'));
    }

    const url = GET_ENDPOINT.GET_COMMENTS(issueId);

    const query = { method: 'GET', url, ...config };

    return this._client.fetchQuery<IIssueComment[]>(query);
  };
}
