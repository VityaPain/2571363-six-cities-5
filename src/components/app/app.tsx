import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from '@pages/main-page/main-page';
import LoginPage from '@pages/login-page/login-page';
import FavoritesPage from '@pages/favorites-page/favorites-page';
import OfferPage from '@pages/offer-page/offer-page';
import ErrorPage from '@pages/error-page/error-page';
import AuthChecker from '@components/auth-checker/auth-checker';
import useAppInit from '@utils/use-init-app/use-init-app';
import { APP_ROUTES } from '@services/constants';

function App(): JSX.Element {
  useAppInit();
  return (
    <BrowserRouter>
      <Routes>
        <Route path={APP_ROUTES.MAIN} element={<MainPage />} />
        <Route path={APP_ROUTES.LOGIN} element={<LoginPage />} />
        <Route
          path={APP_ROUTES.FAVORITES}
          element={<AuthChecker element={<FavoritesPage />} />}
        />
        <Route path={APP_ROUTES.OFFER(':id')} element={<OfferPage />} />
        <Route path="/*" element={<ErrorPage description="Error" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
