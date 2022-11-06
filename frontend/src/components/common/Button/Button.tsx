import s from './Button.module.scss';
import classNames from 'classnames';
import type { FC } from 'react';
import { memo } from 'react';

const Button: FC<any> = ({ type, theme, children, className }) => {
  return (
    <button
      type={type}
      className={classNames(
        s.button,
        ...theme.map((t: any) => s[t]),
        className
      )}
    >
      {children}
    </button>
  );
};

export default memo(Button);
