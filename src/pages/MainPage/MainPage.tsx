import './MainPage.css';

import { Board, SortForm } from 'modules';
import { FC } from 'react';

export const MainPage: FC = () => {
  return (
    <div className="main-page">
      <SortForm />
      <Board />
    </div>
  );
};
