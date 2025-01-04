import { createSlice } from '@reduxjs/toolkit';
import { APIErrorResponse } from '@services/index';
import {
  TPlaceEntity,
  TPlaceEntityFull,
  TCommentEntityFull,
} from '@typings/place-card/place-card';
import {
  setOffer,
  setComments,
  setNearbyOffers,
  setOfferLoading,
  setOfferError,
  setCommentError,
} from './actions';

type OfferState = {
  offer: TPlaceEntityFull | null;
  comments: TCommentEntityFull[];
  nearbyOffers: TPlaceEntity[];
  offerLoading: boolean;
  offerError: APIErrorResponse | null;
  commentError: APIErrorResponse | null;
};

const initialState: OfferState = {
  offer: null,
  comments: [],
  nearbyOffers: [],
  offerLoading: true,
  offerError: null,
  commentError: null,
};

const offerSlice = createSlice({
  name: 'offerSlice',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(setOffer, (state, action) => {
        state.offer = action.payload;
      })
      .addCase(setComments, (state, action) => {
        state.comments = action.payload;
      })
      .addCase(setNearbyOffers, (state, action) => {
        state.nearbyOffers = action.payload;
      })
      .addCase(setOfferLoading, (state, action) => {
        state.offerLoading = action.payload;
      })
      .addCase(setOfferError, (state, action) => {
        state.offerError = action.payload;
      })
      .addCase(setCommentError, (state, action) => {
        state.commentError = action.payload;
      });
  },
});

export default offerSlice.reducer;
