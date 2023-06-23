import MainIcon from 'assets/icons/main';
import TasksIcon from '../../assets/icons/tasks';
import { APP_ROUTE } from 'routes';

export const NAV_PAGE = {
  MAIN: 'main',
  ISSUES: 'issues',
  PROJECTS: 'projects',
  QUEUES: 'queues',
};

export type TNavPage = (typeof NAV_PAGE)[keyof typeof NAV_PAGE];

export interface NavigationItem {
  id: TNavPage;
  name: string;
  icon: React.FC;
  href?: string;
}

export const NAVIGATION_LIST: NavigationItem[] = [
  {
    id: NAV_PAGE.MAIN,
    name: 'Главная',
    icon: MainIcon,
    href: APP_ROUTE.MAIN,
  },
  {
    id: NAV_PAGE.ISSUES,
    name: 'Задачи',
    icon: TasksIcon,
  },
];
