import { create } from 'zustand';
import { IUserInfo } from './type';

const useAppUserStore = create<IUserInfo>((set) => ({
  login: '',
  id: '',
  client_id: '',
  psuid: '',
  setUser: (user: IUserInfo) => set(user),
}));

export default useAppUserStore;
