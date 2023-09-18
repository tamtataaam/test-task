import { SortTypes, Value } from 'store/words';

const getAlphabetSortedData = (data: Value[], sortOrder: 'asc' | 'desc') => {
  return data.sort((a, b) => {
    if (sortOrder === 'asc') {
      return a.value.localeCompare(b.value);
    } else {
      return b.value.localeCompare(a.value);
    }
  });
};

const getTimeSortedData = (data: Value[], sortOrder: 'asc' | 'desc') => {
  return data.sort((a, b) => {
    if (sortOrder === 'asc') {
      return a.time - b.time;
    } else {
      return b.time - a.time;
    }
  });
};

export const getSortedData = (
  data: Value[],
  alphabetSortOrder: SortTypes,
  timeSortOrder: SortTypes
) => {
  const sortedData = data.slice();

  if (alphabetSortOrder) {
    return getAlphabetSortedData(sortedData, alphabetSortOrder);
  }

  if (timeSortOrder) {
    return getTimeSortedData(sortedData, timeSortOrder);
  }

  return getTimeSortedData(sortedData, 'desc');
};
