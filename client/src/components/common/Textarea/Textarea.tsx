import s from './Textarea.module.scss';
import { FC, memo } from 'react';
import classNames from 'classnames';
import { FieldValues, useFormContext } from 'react-hook-form';

interface ITextarea {
  placeholder: string;
  isRequired?: boolean;
  name: string;
  config?: FieldValues;
}

const Textarea: FC<ITextarea> = ({ placeholder, isRequired, name, config }) => {
  const {
    register,
    formState: { errors }
  } = useFormContext();

  const error = errors[name];

  return (
    <label className={s.root} htmlFor={name}>
      <textarea
        required
        className={classNames(s.textarea, error && s.error)}
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

export default memo(Textarea);
