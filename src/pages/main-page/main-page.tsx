import { useEffect, useMemo } from 'react';
import { useAppDispatch, useAppSelector } from '@store/hooks';
import Header from '@components/header/header';
import Map from '@components/map/map';
import OffersList from '@components/offers-list/offers-list';
import { LocationsTabs } from '@components/locations-tabs/locations-tabs';
import SortingFilter from '@components/sorting-filter/sorting-filter';
import Spinner from '@components/spinner/spinner';
import MainEmpty from '@components/main-empty/main-empty';
import { updateCityOffers } from '@store/actions';
import translateOffersToPoints from '@utils/translate-offers-to-points/translate-offers-to-points';

const MainPage = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const loading = useAppSelector((state) => state.offersSlice.loading);
  const city = useAppSelector((state) => state.offersSlice.city);
  const cityOffers = useAppSelector((state) => state.offersSlice.cityOffers);
  const sortOrder = useAppSelector((state) => state.offersSlice.sortOrder);

  useEffect(() => {
    if (!loading) {
      dispatch(updateCityOffers());
    }
  }, [dispatch, loading, city, sortOrder]);

  const mapPoints = useMemo(
    () => translateOffersToPoints(cityOffers),
    [cityOffers]
  );

  const offersContent = useMemo(
    () =>
      cityOffers.length > 0 ? (
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">
                {cityOffers.length} places to stay in {city.name}
              </b>
              <SortingFilter />
              <OffersList offers={cityOffers} type="Main" />
            </section>
            <div className="cities__right-section">
              <section
                className="cities__map map"
                style={{ background: 'none' }}
              >
                {' '}
                <Map city={city} points={mapPoints} />
              </section>
            </div>
          </div>
        </div>
      ) : (
        <MainEmpty currentCity={city} />
      ),
    [cityOffers, city, mapPoints]
  );

  return (
    <div className="page page--gray page--main">
      <Header />
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <LocationsTabs />
        {loading ? <Spinner variant="block" /> : offersContent}
      </main>
    </div>
  );
};

export default MainPage;
