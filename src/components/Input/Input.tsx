import './Input.css';

import { FC } from 'react';

import { InputProps } from './types';

export const Input: FC<InputProps> = (props) => {
  const { className, ...otherProps } = props;

  return (
    <input
      type="text"
      className={`custom-input ${className}`}
      {...otherProps}
    />
  );
};
