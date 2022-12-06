import Mask from 'components/Animations/Mask/Mask';
import Fade from 'components/Animations/Fade/Fade';
import s from './InstrumentReadings.module.scss';
import Form from './Form';

const InstrumentReadings = () => {
  return (
    <div className={s.root}>
      <Mask config={{ delay: 0.5 }}>
        <h1 className={s.title}>Передача показаний приборов учета</h1>
      </Mask>
      <Fade config={{ delay: 1, fromTranslateY: '25%' }}>
        <Form />
      </Fade>
    </div>
  );
};

export default InstrumentReadings;
