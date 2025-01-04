import { Navigate } from 'react-router';
import { APP_ROUTES } from '@services/constants';
import { useAppSelector } from '@store/hooks';

type TAuthCheckerProps = {
  element: JSX.Element;
};

const AuthChecker = ({ element }: TAuthCheckerProps): JSX.Element => {
  const authorizationStatus = useAppSelector(
    (state) => state.userSlice.authorizationStatus
  );

  return authorizationStatus ? element : <Navigate to={APP_ROUTES.LOGIN} />;
};

export default AuthChecker;
