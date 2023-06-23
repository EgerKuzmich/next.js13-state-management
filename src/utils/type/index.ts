import { APP_ROUTE } from 'routes';
import { FETCH_STATUS } from '../constants';
// eslint-disable-next-line  @typescript-eslint/no-explicit-any
export type TPropsWithClassName<Extend = Record<string, any>> = Extend & { className?: string };

export type TRoute = (typeof APP_ROUTE)[keyof typeof APP_ROUTE];

export interface IIssueEntry {
  self: string;
  id: string;
  key: string;
  display: string;
}

export type TFetchStatus = (typeof FETCH_STATUS)[keyof typeof FETCH_STATUS];

export type TSortType = 'asc' | 'desc';
