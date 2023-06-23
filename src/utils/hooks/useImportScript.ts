import { useAsyncEffect } from './useAsyncEffect';

interface IUseImportScriptProps {
  url: string;
  onLoad?: () => Promise<void>;
  onError?: () => void;
}

const useImportScript = (props: IUseImportScriptProps) => {
  const { url, onLoad, onError } = props;

  useAsyncEffect(
    ({ current: cancel }) => {
      if (cancel) {
        return;
      }

      const script = document.createElement('script');
      script.src = url;
      script.async = true;
      document.body.appendChild(script);

      script.onload = async () => {
        await onLoad?.();
      };

      script.onerror = () => {
        onError?.();
      };

      return () => {
        document.body.removeChild(script);
      };
    },
    [url, onError, onLoad],
  );
};
export default useImportScript;
