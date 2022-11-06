import type { FC } from 'react';
import { memo } from 'react';
import { FormProvider, useForm } from 'react-hook-form';

const Form: FC<any> = ({ children, submitHandler }) => {
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
