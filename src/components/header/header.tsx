import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '@store/hooks';
import { APP_ROUTES } from '@services/constants';
import { logout } from '@store/actions';

const Header = memo((): JSX.Element | null => {
  const dispatch = useAppDispatch();
  const authorizationStatus = useAppSelector(
    (state) => state.userSlice.authorizationStatus
  );
  const userData = useAppSelector((state) => state.userSlice.userData);
  const favoriteOffers = useAppSelector(
    (state) => state.userSlice.favoriteOffers
  );

  const handleLogout: React.MouseEventHandler<HTMLAnchorElement> = () => {
    dispatch(logout());
  };
  const isLoginPage = window.location.pathname === APP_ROUTES.LOGIN;

  return isLoginPage ? null : (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Link
              className="header__logo-link header__logo-link--active"
              to={APP_ROUTES.MAIN}
            >
              <img
                className="header__logo"
                src="img/logo.svg"
                alt="6 cities logo"
                width="81"
                height="41"
              />
            </Link>
          </div>
          {authorizationStatus ? (
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <Link
                    className="header__nav-link header__nav-link--profile"
                    to={APP_ROUTES.FAVORITES}
                  >
                    <div className="header__avatar-wrapper user__avatar-wrapper"></div>
                    <span className="header__user-name user__name">
                      {userData?.name}
                    </span>
                    <span className="header__favorite-count">
                      {favoriteOffers.length}
                    </span>
                  </Link>
                </li>
                <li className="header__nav-item">
                  <a className="header__nav-link" onClick={handleLogout}>
                    <span className="header__signout">Log out</span>
                  </a>
                </li>
              </ul>
            </nav>
          ) : (
            <nav className="header__nav">
              <li className="header__nav-item">
                <Link className="header__nav-link" to={APP_ROUTES.LOGIN}>
                  <span className="header__signout">Log in</span>
                </Link>
              </li>
            </nav>
          )}
        </div>
      </div>
    </header>
  );
});
Header.displayName = 'Header';

export default Header;
