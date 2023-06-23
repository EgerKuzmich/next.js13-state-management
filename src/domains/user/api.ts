import { IUserInfo } from './type';
import { RequestService } from 'services/request';

const BASE_URL = `${import.meta.env.VITE_LOGIN_URL}`;

const ENDPOINT = '/info';

export class UserService {
  private _client: RequestService;

  constructor() {
    this._client = new RequestService(BASE_URL);
  }

  getUserInfo = () => {
    const query = { method: 'GET', url: ENDPOINT };

    return this._client.fetchQuery<IUserInfo>(query);
  };
}
