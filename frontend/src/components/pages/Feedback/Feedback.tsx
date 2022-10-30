import s from './Feedback.module.scss';
import Mask from 'components/Animations/Mask';
import Form from 'pages/Feedback/Form';
import Fade from 'components/Animations/Fade';

const Feedback = () => {
  return (
    <div className={s.root}>
      <Mask config={{ delay: 0.5 }}>
        <h1 className={s.title}>Обратная связь</h1>
      </Mask>
      <Fade config={{ delay: 1, fromTranslateY: '25%' }}>
        <Form />
      </Fade>
    </div>
  );
};

export default Feedback;
