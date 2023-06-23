import { Card, CardBody } from 'grommet';
import IssueSummary from 'modules/Issue/Summary';

const IssuePageAside = () => {
  return (
    <Card background="light-1" height={'medium'} pad="medium" elevation="medium">
      <CardBody>
        <IssueSummary />
      </CardBody>
    </Card>
  );
};

export default IssuePageAside;
