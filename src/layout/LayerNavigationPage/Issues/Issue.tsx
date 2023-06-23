import { UiLayerIssue } from './ui';
import SidebarTaskStatus from './Status';
import { Box, Text } from 'grommet';
import FavoriteButton from 'ui/Button';
import { IFullIssue } from 'modules/Issue/types';
import { APP_ROUTE } from 'routes';
import { useLayoutContext } from 'layout/LayoutProvider';
import { useNavigate } from 'react-router-dom';
import { SyntheticEvent } from 'react';

interface ITaskProps extends Omit<IFullIssue, 'key'> {
  name: string;
}

const Issue = (props: ITaskProps) => {
  const { id, name, summary, status, favorite } = props;

  const { onSetPage } = useLayoutContext();

  const navigate = useNavigate();

  const to = `${APP_ROUTE.ISSUE}/${id}}`;

  const onClick = (evt: SyntheticEvent) => {
    evt.preventDefault();
    onSetPage('');
    navigate(to);
  };

  return (
    <UiLayerIssue>
      <UiLayerIssue.Body to={to} onClick={onClick}>
        <Text size="small">{summary}</Text>

        <UiLayerIssue.Heading>{name}</UiLayerIssue.Heading>
      </UiLayerIssue.Body>

      <Box direction="row" align="start" justify="between">
        <SidebarTaskStatus status={status.key} />

        <FavoriteButton active={favorite} />
      </Box>
    </UiLayerIssue>
  );
};

export default Issue;
