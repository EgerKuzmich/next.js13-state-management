import { Box, Grid, Spinner } from 'grommet';
import { OAUTH_WIDGET_URL } from 'utils/constants';
import logo from 'assets/us-logo.svg';
import useImportScript from 'utils/hooks/useImportScript';
import { UiAuthPage } from './ui';
import { useAsyncEffect } from 'utils/hooks/useAsyncEffect';
import { MutableRefObject, useCallback } from 'react';
import useYaOauth from 'services/oauth/useYaOauth';
import { IOAuthCredentials } from 'services/oauth/type';
import { useOauthCredentials } from 'services/oauth/store';
import useAppUser from 'domains/user/useAppUser';
import { useQuery } from '@tanstack/react-query';

type TSuggestMessageType = 'token';

interface ISuggestMessage {
  type: TSuggestMessageType;
  payload: Omit<IOAuthCredentials, 'created_at'>;
}

const LOGO_DIMENSIONS = {
  WIDTH: 80,
  HEIGHT: 80,
};

const isNotEmptyMessage = (data: MessageEvent['data']) => typeof data === 'object' && data !== null && 'type' in data;

const QUERY_KEY = 'user-info';

const AuthPage = () => {
  const [onInitAuthWidget] = useYaOauth();

  const { access_token } = useOauthCredentials();
  const { getUserInfo } = useAppUser();

  const hasAccess = !!access_token;

  const { isFetching: isLoading } = useQuery([QUERY_KEY], getUserInfo, { enabled: hasAccess });

  useImportScript({ url: OAUTH_WIDGET_URL, onLoad: onInitAuthWidget });

  const onIncomingMessage = useCallback(async (event: MessageEvent) => {
    const { data } = event;

    if (!isNotEmptyMessage(data) || data.type !== 'token') {
      return;
    }

    const { payload } = data as ISuggestMessage;
    const created_at = Date.now();
    const result = { created_at, ...payload };

    useOauthCredentials.setState(result);
  }, []);

  const handleMessageListener = useCallback(
    (state: MutableRefObject<boolean>) => {
      const { current: cancel } = state;

      if (cancel) {
        window.removeEventListener('message', onIncomingMessage);
      }

      window.addEventListener('message', onIncomingMessage);
    },
    [onIncomingMessage],
  );

  useAsyncEffect(handleMessageListener, []);

  return (
    <UiAuthPage>
      <Grid fill rows={['auto', 'flex']} gap="large" pad="medium">
        <img src={logo} width={LOGO_DIMENSIONS.WIDTH} height={LOGO_DIMENSIONS.HEIGHT} />
        <Box fill align="center" justify="center">
          {isLoading && <Spinner size="large" />}
        </Box>
      </Grid>
    </UiAuthPage>
  );
};

export default AuthPage;
