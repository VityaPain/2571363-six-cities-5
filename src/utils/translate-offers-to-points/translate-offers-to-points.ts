import { TPlaceEntity, TPlaceEntityFull } from '@typings/place-card/place-card';
import { Point } from '@typings/city/city';

const translateOffersToPoints = (
  allPlaces: TPlaceEntity[] | TPlaceEntityFull[]
): Point[] => {
  const points: Point[] = [];
  allPlaces.map((offer) =>
    points.push({
      title: offer.title,
      lat: offer.location.latitude,
      lng: offer.location.longitude,
    })
  );
  return points;
};

export default translateOffersToPoints;
