import { Value, WordsState } from 'store/words';

export interface ValuesListProps {
  selector: (state: { words: WordsState }) => Value[];
}
