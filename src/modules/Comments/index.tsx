import { useQuery } from '@tanstack/react-query';
import { useUpdateEffect } from 'react-use';
import { useCommentStore } from './store';
import { useParams } from 'react-router-dom';

import { Box } from 'grommet';
import EllipsisLoader from 'ui/EllipsisLoader';
import { UiCard } from 'ui/Card';
import CommentItem from './Item';

import { IIssueComment } from './types';

import { mockComments } from 'mock/comments';
import { useMemo } from 'react';
import SortButton from 'ui/Button/Sort';

const QUERY_KEY = 'comments';

const getComments = () =>
  new Promise<IIssueComment[]>((resolve) => {
    setTimeout(() => resolve(mockComments), 1000);
  });

const IssueComments = () => {
  const { issue } = useParams();

  const { data, isLoading } = useQuery([QUERY_KEY, issue], getComments);

  const { add, sort, list: unsorted, sortList, setSort } = useCommentStore();

  const list = useMemo(
    () => sortList(),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [sort, unsorted, sortList],
  );

  useUpdateEffect(() => {
    if (data) {
      add(data);
    }
  }, [isLoading, data]);

  if (isLoading || !list.length) {
    return (
      <Box fill align="center" justify="center">
        <EllipsisLoader />
      </Box>
    );
  }

  return (
    <Box gap="medium" pad={{ top: 'medium', bottom: 'medium' }}>
      <Box align="end">
        <SortButton onToggle={setSort} />
      </Box>

      <UiCard.List>
        {list.map((item) => (
          <CommentItem key={item.id} {...item} />
        ))}
      </UiCard.List>
    </Box>
  );
};

export default IssueComments;
