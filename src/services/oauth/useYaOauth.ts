import { OauthService } from '.';

const authService = new OauthService();

const useYaOauth = () => {
  return [authService.init, authService.suggest];
};

export default useYaOauth;
