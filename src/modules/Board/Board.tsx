import './Board.css';

import { Card } from 'components';
import { FC } from 'react';

import { cardsArr } from './data';

export const Board: FC = () => {
  return (
    <div className="board">
      {cardsArr.map(({ id, Component, color, selector }) => (
        <Card key={id} color={color}>
          {selector ? <Component selector={selector} /> : <Component />}
        </Card>
      ))}
    </div>
  );
};
