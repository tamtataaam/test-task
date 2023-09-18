import './Button.css';

import { FC } from 'react';

import { ButtonProps } from './types';

export const Button: FC<ButtonProps> = (props) => {
  const { className, children, ...otherProps } = props;

  return (
    <button className={`btn ${className}`} {...otherProps}>
      {children}
    </button>
  );
};
