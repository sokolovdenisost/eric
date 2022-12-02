import s from './Button.module.scss';
import classNames from 'classnames';
import type { FC, ReactNode } from 'react';
import { memo } from 'react';

type TButton = 'submit' | 'button';

interface IButton {
  type: TButton;
  theme: string[];
  children: ReactNode;
  className?: string;
}

const Button: FC<IButton> = ({ type, theme, children, className }) => {
  return (
    <button
      type={type}
      className={classNames(
        s.button,
        ...theme.map((t: string) => s[t]),
        className
      )}
    >
      {children}
    </button>
  );
};

export default memo(Button);
