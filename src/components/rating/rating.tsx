import classNames from 'classnames';

type TRatingProps = {
  value: number;
  showRawValue?: boolean;
  containerClassName: string;
  starsClassName: string;
  valueClassName?: string;
};

const Rating = ({
  value,
  showRawValue,
  containerClassName,
  starsClassName,
  valueClassName = 'offer__rating-value',
}: TRatingProps): JSX.Element => {
  const rawValue = value;
  const roundedValue = Math.round(value);
  const starValue = `${20 * roundedValue}%`;

  return (
    <div className={classNames(containerClassName, 'rating')}>
      <div className={classNames(starsClassName, 'rating__stars')}>
        <span style={{ width: starValue }}></span>
        <span className="visually-hidden">Rating</span>
      </div>
      {showRawValue ? (
        <span className={classNames(valueClassName, 'rating__value')}>
          {rawValue}
        </span>
      ) : null}
    </div>
  );
};

export default Rating;
