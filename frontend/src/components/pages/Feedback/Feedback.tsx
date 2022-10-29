import s from './Feedback.module.scss';
import Mask from 'components/Animations/Mask';
import Form from 'pages/Feedback/Form';

const Feedback = () => {
  return (
    <div className={s.root}>
      <Mask config={{ delay: 0.5 }}>
        <h1 className={s.title}>Обратная связь</h1>
      </Mask>

      <Form />
    </div>
  );
};

export default Feedback;
