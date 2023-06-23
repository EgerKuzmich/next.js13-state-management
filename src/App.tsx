import MainLayout from 'layout';
import LayoutProvider from 'layout/LayoutProvider';
import IssuePage from 'pages/Issue';
import MainPage from 'pages/Main';
import { Route, Routes } from 'react-router-dom';
import { APP_ROUTE } from 'routes';

function App() {
  return (
    <LayoutProvider>
      <MainLayout>
        <Routes>
          <Route path={`${APP_ROUTE.MAIN}/:navPage?`} element={<MainPage />} />
          <Route path={`${APP_ROUTE.ISSUE}/:issue`} element={<IssuePage />} />
        </Routes>
      </MainLayout>
    </LayoutProvider>
  );
}

export default App;
