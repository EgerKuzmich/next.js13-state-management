import { create } from 'zustand';
import { SORT_TYPE } from 'utils/constants';
import { TSortType } from 'utils/type';
import { sortByDate } from 'utils/date';
import { IIssueComment } from '../types';

interface ICommentStore {
  current: IIssueComment | null;
  list: IIssueComment[];
  add: (list: IIssueComment[]) => void;
  addItem: (item: IIssueComment) => void;
  removeItem: (item: IIssueComment) => void;
  setCurrent: (item: IIssueComment) => void;
  sort: TSortType;
  sortList: () => IIssueComment[];
  setSort: (sort: TSortType) => void;
}

export const useCommentStore = create<ICommentStore>((set, get) => ({
  current: null,
  list: [],
  add: (list) => set({ list }),
  addItem: (item) => set((state) => ({ list: [...state.list, item] })),
  removeItem: (item) => set((state) => ({ list: state.list.filter((t) => t.id !== item.id) })),
  setCurrent: (item) => set({ current: item }),
  sort: SORT_TYPE.DESCENDING,
  sortList: () => get().list.sort((a, b) => sortByDate(a.createdAt, b.createdAt, get().sort)),
  setSort: (sort) => set({ sort }),
}));
