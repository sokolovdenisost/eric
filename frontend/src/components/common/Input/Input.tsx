import s from './Input.module.scss';
import { FC } from 'react';
import classNames from 'classnames';

type Input = {
  placeholder: string;
  isRequired?: boolean;
  name: string;
};

const Input: FC<Input> = ({ placeholder, isRequired, name }) => {
  return (
    <label className={s.root} htmlFor={name}>
      <input
        placeholder=""
        required
        className={classNames(s.input)}
        type="text"
        id={name}
      />
      <span className={classNames(s.label)}>
        {placeholder}
        {isRequired && '*'}
      </span>
    </label>
  );
};

export default Input;
