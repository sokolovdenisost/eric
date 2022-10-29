import s from './Form.module.scss';
import Input from 'components/Input';
import { useForm } from 'react-hook-form';
import Button from 'components/Button';

const Form = () => {
  const {
    handleSubmit,
    formState: { errors }
  } = useForm();

  const submitHandler = (data: any) => console.log(data);

  return (
    <form noValidate className={s.root} onSubmit={handleSubmit(submitHandler)}>
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
    </form>
  );
};

export default Form;
