import { useState, memo } from 'react';
import { useAppDispatch, useAppSelector } from '@store/hooks';
import { setSortOrder } from '@store/actions';
import { sortFilters } from './sorting-filter.constants/sorting-filter.constants';

const SortingFilter = memo((): JSX.Element => {
  const dispatch = useAppDispatch();
  const sortOrder = useAppSelector((state) => state.offersSlice.sortOrder);

  const [showFilters, setShowFilters] = useState(false);

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>{' '}
      <span
        className="places__sorting-type"
        tabIndex={0}
        onClick={() => setShowFilters(true)}
      >
        {sortOrder}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul
        className={`places__options places__options--custom ${
          showFilters ? 'places__options--opened' : null
        }`}
        onClick={() => setShowFilters(false)}
      >
        {sortFilters.map((filter) => (
          <li
            className={`places__option ${
              filter === sortOrder ? 'places__option--active' : null
            }`}
            tabIndex={0}
            key={filter}
            onClick={() => dispatch(setSortOrder(filter))}
          >
            {filter}
          </li>
        ))}
      </ul>
    </form>
  );
});

SortingFilter.displayName = 'SortingFilter';

export default SortingFilter;
