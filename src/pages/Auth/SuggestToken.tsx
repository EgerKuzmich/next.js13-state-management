import useYaOauth from 'services/oauth/useYaOauth';
import { OAUTH_SUGGEST_TOKEN_URL } from 'utils/constants';
import useImportScript from 'utils/hooks/useImportScript';

const SuggestTokenPage = () => {
  const [, onSuggestAuth] = useYaOauth();

  useImportScript({ url: OAUTH_SUGGEST_TOKEN_URL, onLoad: onSuggestAuth });

  return null;
};

export default SuggestTokenPage;
