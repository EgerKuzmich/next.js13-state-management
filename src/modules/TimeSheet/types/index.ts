import { IIssueEntry } from 'utils/type';

export type TTimeSheetType = 'IssueCreated' | 'IssueUpdated' | 'IssueDeleted' | 'IssueWorkflow';

export interface ITimeSheet {
  id: number;
  self: string;
  version: number;
  issue: IIssueEntry;
  comment: string;
  createdBy: Omit<IIssueEntry, 'key'>;
  updatedBy: Omit<IIssueEntry, 'key'>;
  createdAt: string;
  updatedAt: string;
  start: string;
  duration: string;
}
