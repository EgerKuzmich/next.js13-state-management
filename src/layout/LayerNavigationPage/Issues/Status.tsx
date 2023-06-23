import { UiLayerIssue } from 'layout/LayerNavigationPage/Issues/ui';
import { TIssueStatus } from 'modules/Issue/types';

const StatusToLabel: Record<TIssueStatus, string> = {
  open: 'Открыта',
  inProgress: 'В работе',
  resolved: 'Завершена',
  closed: 'Отклонена',
};

const SidebarTaskStatus = ({ status }: { status: TIssueStatus }) => {
  const label = StatusToLabel[status];

  return <UiLayerIssue.Status value={label} size="small" />;
};

export default SidebarTaskStatus;
