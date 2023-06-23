interface IBoardItem {
  id: number;
  name?: string;
}

interface IIssueType {
  self: string;
  id: string;
  key: string;
  display: string;
}

interface IIssuePriority {
  self: string;
  id: string;
  key: string;
  display: string;
}

interface IIssueFollower {
  self: string;
  id: string;
  display: string;
}

interface ICreatedBy {
  self: string;
  id: string;
  display: string;
}

interface IIssueAssignee {
  self: string;
  id: string;
  display: string;
}

interface IIssueQueue {
  self: string;
  id: string;
  key: string;
  display: string;
}

export type TIssueStatus = 'open' | 'inProgress' | 'resolved' | 'closed';

interface IIssueStatus {
  id: string;
  display: string;
  key: TIssueStatus;
  self?: string;
}

interface IIssueProject {
  self: string;
  id: string;
  display: string;
}

interface IIssueStatusType {
  value: TIssueStatus;
  order: number;
}

export interface IFullIssue {
  self: string;
  id: string;
  key: string;
  version: number;
  statusStartTime: string;
  statusType: IIssueStatusType | null;
  project: IIssueProject;
  description: string;
  boards: IBoardItem[];
  type: IIssueType;
  createdAt: string;
  commentWithExternalMessageCount: number;
  updatedAt: string;
  lastCommentUpdatedAt: string;
  summary: string;
  originalEstimation: string;
  updatedBy: IIssueAssignee;
  spent: string;
  priority: IIssuePriority;
  estimation: string;
  followers: IIssueFollower[];
  createdBy: ICreatedBy;
  commentWithoutExternalMessageCount: number;
  votes: number;
  assignee: IIssueAssignee;
  queue: IIssueQueue;
  status: IIssueStatus;
  previousStatus: IIssueStatus;
  favorite: boolean;
}

export interface IIssueApiFilter {
  assignee: string;
}

export interface IIssueApiParams {
  filter?: Partial<IIssueApiFilter>;
}

export interface ITimeSheetItem {
  start: string;
  duration: string;
  comment?: string;
}

export interface IEditTimeSheetData {
  duration: string;
  comment?: string;
}
