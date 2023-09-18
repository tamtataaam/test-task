import { InputForm } from 'modules/InputForm';
import { ValuesList } from 'modules/ValuesList';
import {
  sortedLetterValuesSelector,
  sortedMixedValuesSelector,
  sortedNumericValuesSelector,
} from 'store/words';

export const cardsArr = [
  {
    id: 1,
    Component: InputForm,
    color: '#fff',
    selector: null,
  },
  {
    id: 2,
    Component: ValuesList,
    color: '#0dcaf0',
    selector: sortedLetterValuesSelector,
  },
  {
    id: 3,
    color: '#20c997',
    Component: ValuesList,
    selector: sortedNumericValuesSelector,
  },
  {
    id: 4,
    color: '#ffc107',
    Component: ValuesList,
    selector: sortedMixedValuesSelector,
  },
];
