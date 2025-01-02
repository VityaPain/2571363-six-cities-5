import React from 'react';
import ReactDOM from 'react-dom/client';
import App from '@components/App/App';
import { favoritesOffers } from '@mocks/offers/offers';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App favoritesPlaces={favoritesOffers} />
  </React.StrictMode>
);
