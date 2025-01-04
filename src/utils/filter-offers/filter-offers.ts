import { City } from '@typings/city/city';
import { TPlaceEntity } from '@typings/place-card/place-card';

function filterOffers(offers: TPlaceEntity[], city: City) {
  return offers.filter((offer) => offer.city.name === city.name);
}

export default filterOffers;
