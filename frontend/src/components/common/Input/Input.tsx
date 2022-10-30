import s from './Input.module.scss';
import { FC } from 'react';
import classNames from 'classnames';
import { useFormContext } from 'react-hook-form';

type Input = {
  placeholder: string;
  isRequired?: boolean;
  name: string;
  config?: Config;
};

type Config = {
  required?: boolean;
};

const Input: FC<Input> = ({ placeholder, isRequired, name, config }) => {
  const {
    register,
    formState: { errors }
  } = useFormContext();

  const error = errors[name];

  return (
    <label className={s.root} htmlFor={name}>
      <input
        required
        className={classNames(s.input, error && s.error)}
        type="text"
        id={name}
        {...register(name, {
          required: isRequired,
          ...config
        })}
      />
      <span className={classNames(s.label, error && s.error)}>
        {placeholder}
        {isRequired && '*'}
      </span>
    </label>
  );
};

export default Input;
