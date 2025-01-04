import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@store/hooks';
import {
  getGlobalOffers,
  validateUser,
  fetchFavoriteOffer,
} from '@store/actions';

function useAppInit() {
  const dispatch = useAppDispatch();
  const authorizationStatus = useAppSelector(
    (state) => state.userSlice.authorizationStatus
  );
  useEffect(() => {
    dispatch(getGlobalOffers());
    dispatch(validateUser());
    dispatch(fetchFavoriteOffer());
  }, [dispatch, authorizationStatus]);
}

export default useAppInit;
