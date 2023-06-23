import { OauthService } from 'services/oauth';
import { UserService } from './api';
import { IUserInfo } from './type';
import useAppUserStore from './store';

interface IAppUser {
  isAuth: boolean;
  getUserInfo: () => Promise<void | IUserInfo>;
}

export class AppUser implements IAppUser {
  private _client: UserService;
  private _auth: OauthService;

  constructor(auth: OauthService) {
    this._client = new UserService();
    this._auth = auth;
  }

  get data() {
    return useAppUserStore.getState();
  }

  get isAuth() {
    return this._auth.isAuth;
  }
  // get isAuth() {
  //   return this._auth.isAuth && !!this.data?.id;
  // }

  getUserInfo = async () => {
    const { data: userInfo } = (await this._client.getUserInfo()) ?? {};

    if (!userInfo) {
      return;
    }

    useAppUserStore.setState(userInfo);

    return userInfo;
  };
}
