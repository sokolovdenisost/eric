import s from './FeedbackForm.module.scss';
import Input from 'components/Input';
import Button from 'components/Button';
import Form from 'components/Form/Form';
import { memo, useEffect } from 'react';
import Textarea from 'components/Textarea';
import { ISendMailData } from 'types/form';
import { sendMail } from 'services/sendMail';
import { toast } from 'react-toastify';
import { useFormContext } from 'react-hook-form';

const FeedbackForm = () => {
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
      <p className={s.memo}>* – обязательные поля для заполнения</p>
      <div className={s.inputs}>
        <Input
          placeholder="Наименование организации / ФИО"
          isRequired
          name="name"
        />
        <Input placeholder="Контактное лицо" name="contactPerson" />
        <Input placeholder="Лицевой счет" name="personalAccount" />
        <Input placeholder="Адрес" isRequired name="address" />
        <Input placeholder="Email" isRequired name="email" />
        <Input placeholder="Контактный телефон" isRequired name="phone" />
      </div>
      <Textarea placeholder="Сообщение" isRequired name="message" />
      <Button type="submit" theme={['opal', 'big']} className={s.button}>
        Отправить сообщение
      </Button>
    </div>
  );
};

const FormContext = () => {
  const submitHandler = async (data: ISendMailData) => {
    try {
      const response = await sendMail(data);

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
      <FeedbackForm />
    </Form>
  );
};

export default memo(FormContext);
