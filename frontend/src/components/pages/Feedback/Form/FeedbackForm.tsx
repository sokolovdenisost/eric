import s from './FeedbackForm.module.scss';
import Input from 'components/Input';
import Button from 'components/Button';
import Form from 'components/Form/Form';

const FeedbackForm = () => {
  const submitHandler = (data: any) => console.log(data);

  return (
    <Form submitHandler={submitHandler}>
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
        <Button type="submit" theme={['opal', 'big']} className={s.button}>
          Отправить сообщение
        </Button>
      </div>
    </Form>
  );
};

export default FeedbackForm;
