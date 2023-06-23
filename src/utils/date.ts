import dayjs from 'dayjs';
import { TSortType } from './type';
import { SORT_TYPE } from './constants';

export const sortByDate = (a: string, b: string, dir: TSortType) =>
  dir === SORT_TYPE.ASCENDING ? (dayjs(b).isAfter(dayjs(a)) ? 1 : -1) : dayjs(a).isAfter(dayjs(b)) ? 1 : -1;
