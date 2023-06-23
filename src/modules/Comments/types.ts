export interface IIssueComment {
  self: string;
  id: number;
  longId: string;
  text: string;
  createdBy: {
    self: string;
    id: string;
    display: string;
  };
  updatedBy: {
    self: string;
    id: string;
    display: string;
  };
  createdAt: string;
  updatedAt: string;
  version: number;
  type: string;
  transport: string;
}
