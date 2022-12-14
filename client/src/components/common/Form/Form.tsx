import type { FC, ReactNode } from 'react';
import { memo } from 'react';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';

interface IFrom {
  children: ReactNode;
  submitHandler: SubmitHandler<any>;
}

const Form: FC<IFrom> = ({ children, submitHandler }) => {
  const methods = useForm();
  const { handleSubmit } = methods;

  return (
    <FormProvider {...methods}>
      <form noValidate onSubmit={handleSubmit(submitHandler)}>
        {children}
      </form>
    </FormProvider>
  );
};

export default memo(Form);
