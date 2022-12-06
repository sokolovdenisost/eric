import s from './InstrumentReadingsForm.module.scss';
import Input from 'components/Input';
import Button from 'components/Button';
import Form from 'components/Form/Form';
import { memo, useEffect } from 'react';
import Textarea from 'components/Textarea';
import { useFormContext } from 'react-hook-form';
import { ISendInstrumentReadingsData } from 'types/form';
import { sendMail } from 'services/sendMail';
import { toast } from 'react-toastify';

const InstrumentReadingsForm = () => {
  const {
    formState: { isSubmitSuccessful },
    reset
  } = useFormContext();

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
    }
  }, [isSubmitSuccessful]);

  return (
    <div className={s.root}>
      <div className={s.inputs}>
        <Input placeholder="ФИО" isRequired name="name" />
        <Input placeholder="Адрес" isRequired name="address" />
        <Input placeholder="ГВС №1" name="gvs1" />
        <Input placeholder="ГВС №2" name="gvs2" />
        <Input placeholder="ХВС №1" name="hvs1" />
        <Input placeholder="ХВС №2" name="hvs2" />
      </div>
      <Button type="submit" theme={['opal', 'big']} className={s.button}>
        Отправить показания
      </Button>
    </div>
  );
};

const FormContext = () => {
  const submitHandler = async (data: ISendInstrumentReadingsData) => {
    try {
      const response = await sendMail<ISendInstrumentReadingsData>(data, {
        subject: 'Передача показаний приборов учета'
      });

      if (response.data === 'success') {
        toast('Сообщение отправлено', {
          type: 'success'
        });
      }
    } catch (e) {
      throw e;
    }
  };

  return (
    <Form submitHandler={submitHandler}>
      <InstrumentReadingsForm />
    </Form>
  );
};

export default memo(FormContext);
