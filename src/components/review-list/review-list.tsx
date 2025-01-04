import Review from '@components/review/review';
import { TCommentEntityFull } from 'typings/place-card/place-card';

type ReviewsListProps = {
  reviews: TCommentEntityFull[];
};

function ReviewList({ reviews }: ReviewsListProps): JSX.Element {
  return (
    <ul className="reviews__list">
      {reviews.map((reveiw) => (
        <Review key={reveiw.id} review={reveiw} />
      ))}
    </ul>
  );
}

export default ReviewList;
