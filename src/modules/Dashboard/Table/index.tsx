import dayjs from 'dayjs';
import { TableCell, Text } from 'grommet';
import { IFullIssue } from 'modules/Issue/types';
import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { APP_ROUTE } from 'routes';
import { DATE_FORMAT } from 'utils/constants';
import { UiTable } from './ui';

const HEADINGS = ['Ключ', 'Задача', 'Статус', 'Приоритет', 'Создана', 'Обновлена'];

const Header = () => {
  return (
    <UiTable.Header>
      <UiTable.Row header>
        {HEADINGS.map((item) => (
          <TableCell key={item} scope="col">
            <Text as="strong">{item}</Text>
          </TableCell>
        ))}
      </UiTable.Row>
    </UiTable.Header>
  );
};

const IssueCard = ({ data }: { data: IFullIssue }) => {
  const { id, key, summary, status, priority, createdAt, updatedAt } = data;

  const navigate = useNavigate();

  const createdLabel = dayjs(createdAt).format(DATE_FORMAT.FULL);
  const updatedLabel = dayjs(updatedAt).format(DATE_FORMAT.FULL);

  const redirectUrl = `${APP_ROUTE.ISSUE}/${id}`;

  const onClick = useCallback(() => {
    navigate(redirectUrl);
  }, [navigate, redirectUrl]);

  return (
    <UiTable.Row onClick={onClick}>
      <TableCell>
        <Text as="strong">{key}</Text>
      </TableCell>

      <TableCell>{summary}</TableCell>

      <TableCell>{status.display}</TableCell>

      <TableCell>{priority.display}</TableCell>

      <TableCell>{createdLabel}</TableCell>

      <TableCell>{updatedLabel}</TableCell>
    </UiTable.Row>
  );
};

const DashboardTable = ({ list }: { list: IFullIssue[] }) => {
  if (!list.length) {
    return null;
  }

  return (
    <UiTable>
      <Header />
      <UiTable.Body>
        {list.map((item) => (
          <IssueCard data={item} key={item.id} />
        ))}
      </UiTable.Body>
    </UiTable>
  );
};

export default DashboardTable;
