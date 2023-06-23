import { createContextProvider } from 'utils/factory/createContextProvider';
import { PropsWithChildren, useCallback, useMemo, useState } from 'react';
import { LAYOUT_TITLE } from './constants';

const [useLayoutContext, LayoutContextProvider] = createContextProvider();

const LayoutProvider = ({ children }: PropsWithChildren) => {
  const [page, setPage] = useState<string>('');
  const [title, setTitle] = useState<string>(LAYOUT_TITLE.MAIN);

  const onSetPage = useCallback((page: string) => {
    setPage(page);
  }, []);

  const onSetTitle = useCallback((title: string) => {
    setTitle(title);
  }, []);

  const value = useMemo(() => ({ page, title, onSetPage, onSetTitle }), [page, title, onSetPage, onSetTitle]);

  return <LayoutContextProvider value={value}>{children}</LayoutContextProvider>;
};

export { useLayoutContext };
export default LayoutProvider;
