export type SortTypes = 'asc' | 'desc' | null;

export interface Value {
  value: string;
  count: number;
  time: number;
}

export interface WordsState {
  numericValues: Value[];
  letterValues: Value[];
  mixedValues: Value[];
  alphabetSortOrder: SortTypes;
  timeSortOrder: SortTypes;
  loading: boolean;
}
