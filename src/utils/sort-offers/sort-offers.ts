import { SortOrder } from '@typings/sorting-filter/sorting-filter';
import { TPlaceEntity } from '@typings/place-card/place-card';

function sortOffers(offers: TPlaceEntity[], sortOrder: SortOrder) {
  switch (sortOrder) {
    case SortOrder.TOP_RATED:
      return offers.toSorted((a, b) => b.rating - a.rating);
    case SortOrder.HIGH_TO_LOW:
      return offers.toSorted((a, b) => b.price - a.price);
    case SortOrder.LOW_TO_HIGH:
      return offers.toSorted((a, b) => a.price - b.price);
    default:
      return offers;
  }
}

export default sortOffers;
