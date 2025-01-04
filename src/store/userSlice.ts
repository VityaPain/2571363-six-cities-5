import { createSlice } from '@reduxjs/toolkit';
import { TUserEntity } from '@typings/user/user';
import { TPlaceEntity } from '@typings/place-card/place-card';
import {
  setAuthorizationStatus,
  setUserData,
  fetchFavoriteOffer,
} from './actions';

type UserState = {
  authorizationStatus: boolean;
  userData: TUserEntity | null;
  favoriteOffers: TPlaceEntity[];
};

const initialState: UserState = {
  authorizationStatus: false,
  userData: null,
  favoriteOffers: [],
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(setAuthorizationStatus, (state, action) => {
        state.authorizationStatus = action.payload;
      })
      .addCase(setUserData, (state, action) => {
        state.userData = action.payload;
      })
      .addCase(fetchFavoriteOffer.fulfilled, (state, action) => {
        state.favoriteOffers = action.payload;
      });
  },
});

export default userSlice.reducer;
