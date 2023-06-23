import { useOauthCredentials } from 'services/oauth/store';
import { AppUser } from '.';
import { useMemo } from 'react';
import { OauthService } from 'services/oauth';

const useAppUser = () => {
  const authData = useOauthCredentials();

  return useMemo(() => {
    const auth = new OauthService(authData);

    const user = new AppUser(auth);

    return user;
  }, [authData]);
};

export default useAppUser;
