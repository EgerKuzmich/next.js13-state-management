import { create } from 'zustand';
import { IFullIssue } from '../types';
import { TSortType } from 'utils/type';
import { SORT_TYPE } from 'utils/constants';
import { sortByDate } from 'utils/date';

interface IIssueStore {
  current: IFullIssue | null;
  list: IFullIssue[];
  add: (issues: IFullIssue[]) => void;
  addItem: (current: IFullIssue) => void;
  removeItem: (current: IFullIssue) => void;
  setCurrent: (current: IFullIssue) => void;
  query: string;
  setQuery: (query: string) => void;
  sort: TSortType;
  sortList: () => IFullIssue[];
  setSort: (sort: TSortType) => void;
}

export const useIssueStore = create<IIssueStore>((set, get) => ({
  current: null,
  list: [],
  add: (list) => set({ list }),
  addItem: (item) => set((state) => ({ list: [...state.list, item] })),
  removeItem: (current) => set((state) => ({ list: state.list.filter((t) => t.id !== current.id) })),
  query: '',
  setQuery: (query) => set({ query }),
  setCurrent: (current) => set({ current }),
  sort: SORT_TYPE.DESCENDING,
  sortList: () => get().list.sort((a, b) => sortByDate(a.createdAt, b.createdAt, get().sort)),
  setSort: (sort) => set({ sort }),
}));
