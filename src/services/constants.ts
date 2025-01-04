export const API_ROUTES = {
  OFFERS: {
    GET_GLOBAL: '/offers',
    GET_EXACT: (offerId: string) => `/offers/${offerId}`,
    GET_NEARBY: (offerId: string) => `/offers/${offerId}/nearby`,
  },
  FAVORITE: {
    GET: '/favorite/',
    POST: (offerId: string, status: string) => `/favorite/${offerId}/${status}`,
  },
  COMMENTS: {
    GET: (offerId: string) => `/comments/${offerId}`,
    POST: (offerId: string) => `/comments/${offerId}`,
  },
  USER: {
    VALIDATE: '/login',
    LOGIN: '/login',
    LOGOUT: '/logout',
  },
};

export const APP_ROUTES = {
  MAIN: '/',
  LOGIN: '/login',
  FAVORITES: 'favorites',
  OFFER: (offerId: string) => `/offer/${offerId}`,
};

export const TOKEN_HEADER = 'X-Token';

export const TOKEN_KEY = 'six-cities-token';
