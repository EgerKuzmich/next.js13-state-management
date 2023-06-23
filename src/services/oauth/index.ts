import { toErrorWithMessage } from 'utils/error-handling';
import { IOAuthCredentials } from './type';
import { useOauthCredentials } from './store';
import { TExtendedWindow } from 'utils/type/global';

const CREDENTIALS = {
  client_id: import.meta.env.VITE_CLIENT_ID,
  response_type: 'token',
  redirect_uri: import.meta.env.VITE_REDIRECT_URI,
};

const ORIGIN_URI = import.meta.env.VITE_ORIGIN_URI;

export class OauthService {
  private _credentials: IOAuthCredentials;

  constructor(credentials?: IOAuthCredentials) {
    this._credentials = credentials ?? useOauthCredentials.getState();

    useOauthCredentials.subscribe((credentials) => {
      this._credentials = credentials;
    });
  }

  get credentials() {
    return this._credentials;
  }

  set credentials(credentials: IOAuthCredentials) {
    this._credentials = credentials;
  }

  get isExpired() {
    const { expires_in, created_at } = this._credentials;
    const now = Date.now();
    const expiresAt = created_at + +expires_in * 1000;
    return now > expiresAt;
  }

  get isAuth() {
    return !!this._credentials.access_token && !this.isExpired;
  }

  init = async () => {
    const extendedWindow = window as TExtendedWindow;

    if (!extendedWindow?.YaAuthSuggest?.init) {
      return;
    }

    try {
      const response = (await extendedWindow.YaAuthSuggest.init(CREDENTIALS, ORIGIN_URI)) ?? {};
      const { handler } = response;

      await handler();
    } catch (error) {
      const errorWithMessage = toErrorWithMessage(error);
      throw new Error(errorWithMessage.message);
    }
  };

  suggest = async () => {
    const extendedWindow = window as TExtendedWindow;

    if (!extendedWindow?.YaSendSuggestToken) {
      throw new Error("Can't find YaSendSuggestToken");
    }

    try {
      await extendedWindow.YaSendSuggestToken(ORIGIN_URI);
    } catch (error) {
      const errorWithMessage = toErrorWithMessage(error);
      throw new Error(errorWithMessage.message);
    }
  };
}
