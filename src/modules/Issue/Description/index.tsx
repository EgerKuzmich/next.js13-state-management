import { Box, Heading, Text } from 'grommet';

interface IDescriptionProps {
  createdAt: string;
  description: string;
  summary: string;
}

const IssueDescription = ({ createdAt, summary, description }: IDescriptionProps) => {
  const timeLabel = new Date(createdAt).toLocaleString('ru', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <Box fill="horizontal" pad={{ top: 'medium', bottom: 'medium' }}>
      <Text as={'time'} date-time={createdAt} size={'small'}>
        {timeLabel}
      </Text>

      <Heading level={1} size="small">
        {summary}
      </Heading>

      <Text>{description}</Text>
    </Box>
  );
};

export default IssueDescription;
