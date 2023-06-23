import { ITimeSheet } from 'modules/TimeSheet/types';

export const mockTimeSheets = [
  {
    self: 'https://api.tracker.yandex.net/v2/issues/TEST-324/worklog/1',
    id: 1,
    version: 1402121720882,
    issue: {
      self: 'https://api.tracker.yandex.net/v2/issues/TEST-324',
      id: '515ec9eae4b09cfa984e2047',
      key: 'TEST-324',
      display: 'важная задача',
    },
    comment: 'важный комментарий',
    createdBy: {
      self: 'https://api.tracker.yandex.net/v2/users/1120000000014909',
      id: 'veikus',
      display: 'Artem Veikus',
    },
    updatedBy: {
      self: 'https://api.tracker.yandex.net/v2/users/1120000000014909',
      id: 'veikus',
      display: 'Artem Veikus',
    },
    createdAt: '2021-09-28T08:42:06.258+0000',
    updatedAt: '2021-09-28T08:42:06.258+0000',
    start: '2021-09-21T10:30:00.000+0000',
    duration: 'PT8H',
  },
  {
    self: 'https://api.tracker.yandex.net/v2/issues/TEST-324/worklog/1',
    id: 1,
    version: 1402121720882,
    issue: {
      self: 'https://api.tracker.yandex.net/v2/issues/TEST-324',
      id: '515ec9eae4b09cfa984e2047',
      key: 'TEST-324',
      display: 'важная задача',
    },
    comment: 'важный комментарий',
    createdBy: {
      self: 'https://api.tracker.yandex.net/v2/users/1120000000014909',
      id: 'veikus',
      display: 'Artem Veikus',
    },
    updatedBy: {
      self: 'https://api.tracker.yandex.net/v2/users/1120000000014909',
      id: 'veikus',
      display: 'Artem Veikus',
    },
    createdAt: '2021-08-28T08:42:06.258+0000',
    updatedAt: '2021-09-28T08:42:06.258+0000',
    start: '2021-09-21T10:30:00.000+0000',
    duration: 'PT8H',
  },
  {
    self: 'https://api.tracker.yandex.net/v2/issues/TEST-324/worklog/1',
    id: 1,
    version: 1402121720882,
    issue: {
      self: 'https://api.tracker.yandex.net/v2/issues/TEST-324',
      id: '515ec9eae4b09cfa984e2047',
      key: 'TEST-324',
      display: 'важная задача',
    },
    comment: 'важный комментарий',
    createdBy: {
      self: 'https://api.tracker.yandex.net/v2/users/1120000000014909',
      id: 'veikus',
      display: 'Artem Veikus',
    },
    updatedBy: {
      self: 'https://api.tracker.yandex.net/v2/users/1120000000014909',
      id: 'veikus',
      display: 'Artem Veikus',
    },
    createdAt: '2021-07-28T08:42:06.258+0000',
    updatedAt: '2021-09-28T08:42:06.258+0000',
    start: '2021-09-21T10:30:00.000+0000',
    duration: 'PT8H',
  },
] as ITimeSheet[];
