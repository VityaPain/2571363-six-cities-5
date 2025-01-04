import { TUserEntity } from '@typings/user/user';

export type TReviewItem = {
  id: string;
  user: TUserEntity;
  stars: 1 | 2 | 3 | 4 | 5;
  text: string;
  datetime: string;
  readableDate: string;
};
