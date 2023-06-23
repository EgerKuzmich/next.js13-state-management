import { Box, Tag, Text } from 'grommet';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const LayerIssue = styled(Box)`
  display: grid;
  grid-template-columns: minmax(0, 2fr) minmax(0, 1fr);
  grid-gap: 12px;
`;

const LayerIssueBody = styled(Link)`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  gap: 0.5rem;
  color: #f8f8f8;
  text-decoration: none;

  :hover,
  :focus {
    background-color: #999999;
  }
`;

const LayerIssueHeading = styled(Text).attrs({ as: 'b' })`
  color: #3d138d;
`;

const LayerIssueDescription = styled(Text).attrs({ as: 'p', size: 'small' })`
  color: #f8f8f8;
  margin: 0;
`;

const LayerIssueStatus = styled(Tag)`
  margin-top: 10px;
`;

export const UiLayerIssue = Object.assign(LayerIssue, {
  Body: LayerIssueBody,
  Heading: LayerIssueHeading,
  Description: LayerIssueDescription,
  Status: LayerIssueStatus,
});
