import { APP_ROUTE } from 'routes';
import TasksIcon from '../../assets/icons/tasks';
import { TRoute } from 'utils/type';

export interface NavigationItem {
  id: number;
  name: string;
  icon: React.FC;
  href: TRoute;
}

export const NAVIGATION_LIST: NavigationItem[] = [
  {
    id: 1,
    name: 'Задачи',
    icon: TasksIcon,
    href: APP_ROUTE.ISSUES,
  },
];
