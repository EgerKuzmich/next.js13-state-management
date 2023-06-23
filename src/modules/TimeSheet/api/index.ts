import { AxiosRequestConfig } from 'axios';
import { QueryClient } from 'utils/api';
import { API_HOST } from 'utils/constants';
import { ITimeSheet } from 'modules/TimeSheet/types';
import { IEditTimeSheetData, ITimeSheetItem } from 'modules/Issue/types';

const BASE_API_URL = '/v2/issues';

export interface IEditTimeSheetParams {
  issueId: string;
  workLogId: number;
  data: IEditTimeSheetData;
}

const GET_ENDPOINT = {
  GET_TIME_SHEETS: (issueId: string) => `${BASE_API_URL}/${issueId}/worklog`,
  EDIT_TIME_SHEET: (issueId: string, workLogId: number) => `${BASE_API_URL}/${issueId}/worklog/${workLogId}`,
};

export class TimeSheetService {
  private _client: QueryClient;

  constructor() {
    this._client = new QueryClient(API_HOST);
  }

  getTimeSheets = (issueId?: string, config: AxiosRequestConfig = {}) => {
    if (!issueId) {
      return Promise.reject(new Error('Issue id is required'));
    }

    const url = GET_ENDPOINT.GET_TIME_SHEETS(issueId);

    const query = { method: 'GET', url, ...config };

    return this._client.fetchQuery<ITimeSheet[]>(query);
  };

  editTimeSheet = (params: IEditTimeSheetParams) => {
    const { issueId, workLogId, data } = params;

    const url = GET_ENDPOINT.EDIT_TIME_SHEET(issueId, workLogId);

    const query = { method: 'PATCH', data, url };

    return this._client.fetchQuery<ITimeSheetItem>(query);
  };
}
