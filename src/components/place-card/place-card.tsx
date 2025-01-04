import { Link, useNavigate } from 'react-router-dom';
import classNames from 'classnames';
import { useAppDispatch } from '@store/hooks';
import Rating from '@components/rating/rating';
import BookmarkButton from '@components/bookmark-button/bookmark-button';
import { TPlaceEntity } from '@typings/place-card/place-card';
import { setOfferActive, setFavoriteStatus } from '@store/actions';
import { store } from '@store/index';
import { APP_ROUTES } from '@services/constants';
import { useCallback } from 'react';

type TPlaceProps = {
  place: TPlaceEntity;
  type: 'Main' | 'Favorites' | 'Nearby';
};

const offerViewConfig = {
  Main: {
    cardClassName: 'cities__card',
    imageWrapperClassName: 'cities__image-wrapper',
    imageWidth: '260',
    imageHeight: '200',
  },
  Favorites: {
    cardClassName: 'favorites__card',
    imageWrapperClassName: 'favorites__image-wrapper',
    imageWidth: '150',
    imageHeight: '110',
  },
  Nearby: {
    cardClassName: 'near-places__card',
    imageWrapperClassName: 'near-places__image-wrapper',
    imageWidth: '260',
    imageHeight: '200',
  },
};

function PlaceCard({ place, type }: TPlaceProps): JSX.Element {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const viewConfig = offerViewConfig[type];

  const handleToggleFavoriteStatus = useCallback(() => {
    const authorizationStatus = store.getState().userSlice.authorizationStatus;

    if (authorizationStatus) {
      dispatch(
        setFavoriteStatus({
          offerId: place.id,
          status: place.isFavorite ? 0 : 1,
          isMainPage: true,
        })
      );
    } else {
      navigate(APP_ROUTES.LOGIN);
    }
  }, [dispatch, navigate, place]);

  return (
    <article
      className={classNames(viewConfig.cardClassName, 'place-card')}
      onMouseOver={() => dispatch(setOfferActive(place))}
      onMouseLeave={() => dispatch(setOfferActive(null))}
    >
      {place.isPremium ? (
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      ) : null}
      <div
        className={classNames(
          viewConfig.imageWrapperClassName,
          'place-card__image-wrapper'
        )}
      >
        <Link to={`/offer/${place.id}`}>
          <img
            className="place-card__image"
            src={place.previewImage}
            width={viewConfig.imageWidth}
            height={viewConfig.imageHeight}
            alt={place.title}
          />
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{place.price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <BookmarkButton
            marked={place.isFavorite}
            handleToggleFavoriteStatus={handleToggleFavoriteStatus}
          />
        </div>
        <Rating
          value={place.rating}
          containerClassName={'place-card__rating'}
          starsClassName={'place-card__stars'}
        />
        <h2 className="place-card__name">
          <Link to={`/offer/${place.id}`}>{place.title}</Link>
        </h2>
        <p className="place-card__type">{place.type}</p>
      </div>
    </article>
  );
}

export default PlaceCard;
