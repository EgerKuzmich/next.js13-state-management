import { IFullIssue } from 'modules/Issue/types';

export const mockIssue = {
  self: 'https://api.tracker.yandex.net/v2/issues/INFRA-1',
  id: '64353c160c7373707a139bdd',
  key: 'INFRA-1',
  version: 111,
  statusStartTime: '2023-04-11T10:53:20.960+0000',
  statusType: null,
  project: {
    self: 'https://api.tracker.yandex.net/v2/projects/15',
    id: '15',
    display: 'Yandex Tracker Развитие',
  },
  description:
    'Необходимо разработать веб приложения, в котором сотрудники компании смогут редактировать или удалять свои трудозатраты, списанные в задачи YT.\n\nДля доступа в приложение пользователи должны авторизоваться под своей рабочей учётной записью Yandex.\n\nНа первом шаге, приложение дожно позволять найти в YT задачу по номеру либо наименованию.\n\nДалее пользователь должен иметь возможность перейти в задачу и увидеть все свои списанные в неё трудозатраты.  Для каждой трудозатраты должны быть доступны операции редактирования и удаления.  ',
  boards: [
    {
      id: 28,
    },
  ],
  type: {
    self: 'https://api.tracker.yandex.net/v2/issuetypes/2',
    id: '2',
    key: 'task',
    display: 'Задача',
  },
  createdAt: '2023-04-11T10:53:10.029+0000',
  commentWithExternalMessageCount: 0,
  updatedAt: '2023-05-29T14:42:50.777+0000',
  lastCommentUpdatedAt: '2023-05-10T08:29:16.371+0000',
  summary: 'Веб приложение для редактирования и удаления трудозатрат в задачах YT',
  originalEstimation: 'PT0S',
  updatedBy: {
    self: 'https://api.tracker.yandex.net/v2/users/1130000062836728',
    id: '1130000062836728',
    display: 'Даниил Приходько',
  },
  spent: 'P4DT1H30M',
  priority: {
    self: 'https://api.tracker.yandex.net/v2/priorities/3',
    id: '3',
    key: 'normal',
    display: 'Средний',
  },
  estimation: 'PT0S',
  followers: [
    {
      self: 'https://api.tracker.yandex.net/v2/users/1130000021006311',
      id: '1130000021006311',
      display: 'Андрей Синельник',
    },
    {
      self: 'https://api.tracker.yandex.net/v2/users/1130000053052167',
      id: '1130000053052167',
      display: 'Иван Малухин',
    },
  ],
  createdBy: {
    self: 'https://api.tracker.yandex.net/v2/users/1130000062879710',
    id: '1130000062879710',
    display: 'Евгений Колпашников',
  },
  commentWithoutExternalMessageCount: 1,
  votes: 0,
  assignee: {
    self: 'https://api.tracker.yandex.net/v2/users/1130000062836728',
    id: '1130000062836728',
    display: 'Даниил Приходько',
  },
  queue: {
    self: 'https://api.tracker.yandex.net/v2/queues/INFRA',
    id: '10',
    key: 'INFRA',
    display: 'Инфраструктура',
  },
  status: {
    self: 'https://api.tracker.yandex.net/v2/statuses/3',
    id: '3',
    key: 'inProgress',
    display: 'В работе',
  },
  previousStatus: {
    self: 'https://api.tracker.yandex.net/v2/statuses/1',
    id: '1',
    key: 'open',
    display: 'Открыт',
  },
  favorite: true,
} as IFullIssue;
