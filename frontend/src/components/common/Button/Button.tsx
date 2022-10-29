import s from './Button.module.scss';
import classNames from 'classnames';
import type { FC, ReactNode } from 'react';

type Props = {
  theme: string[];
  children: ReactNode | string;
  className?: string;
  type?: 'button' | 'submit' | 'reset' | undefined;
};

const Button: FC<Props> = ({ type, theme, children, className }) => {
  return (
    <button
      type={type}
      className={classNames(s.button, ...theme.map((t) => s[t]), className)}
    >
      {children}
    </button>
  );
};

export default Button;
