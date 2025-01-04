import { City } from '@typings/city/city';
import { TUserEntity } from '@typings/user/user';

export type TPlaceEntityLocation = {
  latitude: number;
  longitude: number;
  zoom: number;
};

export type TPlaceEntity = {
  id: string;
  city: City;
  isFavorite: boolean;
  isPremium: false;
  location: TPlaceEntityLocation;
  previewImage: string;
  price: number;
  rating: number;
  title: string;
  type: 'string';
};

export type TPlaceEntityFull = TPlaceEntity & {
  description: string;
  bedrooms: number;
  goods: string[];
  host: TUserEntity;
  images: string[];
  maxAdults: number;
};

export type TCommentEntity = {
  comment: string;
  rating: number;
};

export type TCommentEntityFull = TCommentEntity & {
  id: string;
  date: string;
  user: TUserEntity;
};
