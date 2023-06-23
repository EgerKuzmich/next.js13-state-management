export interface IAuthCredentials {
  client_id: string;
  response_type: string;
  redirect_uri: string;
}

export interface IAuthWidgetOptions {
  view: string;
  parentId: string;
  buttonView: string;
  buttonTheme: string;
  buttonSize: string;
  buttonBorderRadius: number;
}

export interface IAuthHandler {
  (): Promise<string>;
}

export interface IAuthResponse {
  handler: IAuthHandler;
}

export interface IYaAuthSuggest {
  init: (credentials: IAuthCredentials, originUri?: string, options?: IAuthWidgetOptions) => Promise<IAuthResponse>;
}

export type TYaSendSuggestToken = (originUri: string, extraMessage?: Record<string, unknown>) => Promise<void>;

export type TExtendedWindow = Window &
  typeof globalThis & { YaAuthSuggest: IYaAuthSuggest } & { YaSendSuggestToken: TYaSendSuggestToken };
