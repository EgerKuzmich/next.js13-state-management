import { create } from 'zustand';

interface IIssueFilter {
  status: string;
  priority: string;
  assignee: string;
  type: string;
  query: string;
  page: number;
  perPage: number;
}

interface IIssueQueryValue {
  filter: Partial<IIssueFilter>;
  setFilter: (filter: Partial<IIssueFilter>) => void;
}

export const useIssueQueryParams = create<IIssueQueryValue>((set, get) => ({
  filter: {},
  setQuery: (query: string) => set({ filter: { ...get().filter, query } }),
  setFilter: (filter: Partial<IIssueFilter>) => set({ ...get().filter, filter }),
}));
