import { createSelector } from '@reduxjs/toolkit';
import { getSortedData } from 'helpers/getSortedData';
import { RootState } from 'store';

export const letterValuesSelector = createSelector(
  (state: RootState) => state.words,
  (words) => words.letterValues
);

export const numericValuesSelector = createSelector(
  (state: RootState) => state.words,
  (words) => words.numericValues
);

export const mixedValuesSelector = createSelector(
  (state: RootState) => state.words,
  (words) => words.mixedValues
);

export const alphabetSortOrderSelector = createSelector(
  (state: RootState) => state.words,
  (words) => words.alphabetSortOrder
);

export const timeSortOrderSelector = createSelector(
  (state: RootState) => state.words,
  (words) => words.timeSortOrder
);

export const sortedLetterValuesSelector = createSelector(
  [letterValuesSelector, alphabetSortOrderSelector, timeSortOrderSelector],
  (letterValues, alphabetSortOrder, timeSortOrder) => {
    return getSortedData(letterValues, alphabetSortOrder, timeSortOrder);
  }
);

export const sortedNumericValuesSelector = createSelector(
  [numericValuesSelector, alphabetSortOrderSelector, timeSortOrderSelector],
  (numericValues, alphabetSortOrder, timeSortOrder) => {
    return getSortedData(numericValues, alphabetSortOrder, timeSortOrder);
  }
);

export const sortedMixedValuesSelector = createSelector(
  [mixedValuesSelector, alphabetSortOrderSelector, timeSortOrderSelector],
  (mixedValues, alphabetSortOrder, timeSortOrder) => {
    return getSortedData(mixedValues, alphabetSortOrder, timeSortOrder);
  }
);
