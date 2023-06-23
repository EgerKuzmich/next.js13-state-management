import { create } from 'zustand';
import { ITimeSheet } from '../types';
import { SORT_TYPE } from 'utils/constants';
import { TSortType } from 'utils/type';
import { sortByDate } from 'utils/date';

interface ITimeSheetStore {
  current: ITimeSheet | null;
  list: ITimeSheet[];
  add: (list: ITimeSheet[]) => void;
  addItem: (item: ITimeSheet) => void;
  removeItem: (item: ITimeSheet) => void;
  setCurrent: (item: ITimeSheet) => void;
  sort: TSortType;
  sortList: () => ITimeSheet[];
  setSort: (sort: TSortType) => void;
}

export const useTimeSheetStore = create<ITimeSheetStore>((set, get) => ({
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
