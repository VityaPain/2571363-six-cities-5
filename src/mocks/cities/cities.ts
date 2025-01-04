import { City, CityName } from '../../typings/city/city';

export const cities: Record<CityName, City> = {
  Paris: {
    name: 'Paris',
    location: {
      latitude: 48.856667,
      longitude: 2.352222,
      zoom: 10,
    },
  },
  Cologne: {
    name: 'Cologne',
    location: {
      latitude: 50.936389,
      longitude: 6.952778,
      zoom: 10,
    },
  },
  Brussels: {
    name: 'Brussels',
    location: {
      latitude: 50.846667,
      longitude: 4.3525,
      zoom: 10,
    },
  },
  Amsterdam: {
    name: 'Amsterdam',
    location: {
      latitude: 52.372778,
      longitude: 4.893611,
      zoom: 10,
    },
  },
  Hamburg: {
    name: 'Hamburg',
    location: {
      latitude: 53.55,
      longitude: 10,
      zoom: 10,
    },
  },
  Dusseldorf: {
    name: 'Dusseldorf',
    location: {
      latitude: 51.233333,
      longitude: 6.783333,
      zoom: 10,
    },
  },
};
