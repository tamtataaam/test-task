import './ValuesList.css';

import { useAppSelector } from 'hooks';
import { FC } from 'react';

import { ValuesListProps } from './types';

export const ValuesList: FC<ValuesListProps> = ({ selector }) => {
  const data = useAppSelector(selector);

  return (
    <ul className="values-list">
      {data.map(({ value, time, count }) => (
        <li key={time} className={count > 1 ? 'li-marker' : ''}>
          {value} {count > 1 ? `- ${count}` : ''}
        </li>
      ))}
    </ul>
  );
};
