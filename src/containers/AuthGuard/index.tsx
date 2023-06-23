import { PropsWithChildren } from 'react';
import AuthPage from 'pages/Auth';
import { Route, Routes } from 'react-router-dom';
import { APP_ROUTE } from 'routes';
import SuggestTokenPage from 'pages/Auth/SuggestToken';
import useAppUser from 'domains/user/useAppUser';

const AuthGuard = ({ children }: PropsWithChildren) => {
  const { isAuth } = useAppUser();

  if (!isAuth) {
    return (
      <Routes>
        <Route path={`${APP_ROUTE.MAIN}`} element={<AuthPage />} />
        <Route path={`${APP_ROUTE.MAIN}/verification`} element={<SuggestTokenPage />} />
      </Routes>
    );
  }

  return <>{children}</>;
};

export default AuthGuard;
