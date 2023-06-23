import { Box, Card, Text } from 'grommet';
import dayjs from 'dayjs';
import { memo, useMemo } from 'react';
import { UiCard } from 'ui/Card';
import { IIssueComment } from './types';
import UserIcon from 'assets/icons/user';

dayjs.locale('ru');

const CommentItem = (props: IIssueComment) => {
  const { createdAt, createdBy, text } = props;

  const { display: name } = createdBy;

  const createdLabel = useMemo(() => dayjs(createdAt).locale('ru').format('DD MMM YYYY HH:mm'), [createdAt]);

  return (
    <UiCard.Item>
      <Card pad={{ top: 'small', right: 'small', bottom: 'medium', left: 'small' }} gap="small" background="light-1">
        <Box gap="small" direction="row" align="center">
          <UserIcon />

          <Text size="medium">{name}</Text>

          <UiCard.TimeLabel date-time={createdAt}>{createdLabel}</UiCard.TimeLabel>
        </Box>

        <Box gap="small" pad={{ left: '60px' }}>
          {Boolean(text) && (
            <Text size="small" weight="bold">
              <Text weight="normal" size="small">
                {` ${text}`}
              </Text>
            </Text>
          )}
        </Box>
      </Card>
    </UiCard.Item>
  );
};

export default memo(CommentItem);
