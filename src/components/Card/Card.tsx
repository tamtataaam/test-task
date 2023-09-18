import './Card.css';

import { FC } from 'react';

import { CardProps } from './types';

export const Card: FC<CardProps> = (props) => {
  const { children, color } = props;

  return (
    <div className="card" style={{ backgroundColor: color }}>
      {children}
    </div>
  );
};
