import './SortForm.css';

import { Button } from 'components';
import { useAppDispatch, useAppSelector } from 'hooks';
import { FC } from 'react';
import {
  alphabetSortOrderSelector,
  setAlphabetSortOrder,
  setTimeSortOrder,
  timeSortOrderSelector,
} from 'store/words';

export const SortForm: FC = () => {
  const alphabetSortOrder = useAppSelector(alphabetSortOrderSelector);
  const timeSortOrder = useAppSelector(timeSortOrderSelector);

  const dispatch = useAppDispatch();

  const handleToggleAlphabetOrder = () => {
    if (alphabetSortOrder) {
      const newSortOrder = alphabetSortOrder === 'asc' ? 'desc' : 'asc';
      dispatch(setAlphabetSortOrder(newSortOrder));
    } else {
      dispatch(setTimeSortOrder(null));
      dispatch(setAlphabetSortOrder('asc'));
    }
  };

  const handleToggleTimeOrder = () => {
    if (timeSortOrder) {
      const newSortOrder = timeSortOrder === 'asc' ? 'desc' : 'asc';
      dispatch(setTimeSortOrder(newSortOrder));
    } else {
      dispatch(setAlphabetSortOrder(null));
      dispatch(setTimeSortOrder('asc'));
    }
  };

  return (
    <div className="sort-form">
      <b>Сортировать:</b>

      <Button
        onClick={handleToggleAlphabetOrder}
        className={alphabetSortOrder ? 'selected' : 'sort-form__btn'}
      >
        {alphabetSortOrder && alphabetSortOrder === 'asc' ? '↓' : '↑'} по
        алфавиту
      </Button>
      <Button
        onClick={handleToggleTimeOrder}
        className={timeSortOrder ? 'selected' : 'sort-form__btn'}
      >
        {timeSortOrder === 'asc' ? '↓' : '↑'} по времени ввода
      </Button>
    </div>
  );
};
