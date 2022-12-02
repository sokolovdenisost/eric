import s from './Input.module.scss';
import { FC, memo } from 'react';
import classNames from 'classnames';
import { FieldValues, useFormContext } from 'react-hook-form';

interface IInput {
  placeholder: string;
  isRequired?: boolean;
  name: string;
  config?: FieldValues;
}

const Input: FC<IInput> = ({ placeholder, isRequired, name, config }) => {
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

export default memo(Input);
