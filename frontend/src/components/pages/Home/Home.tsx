import type { FC } from 'react';
import RunningSlider from 'pages/Home/RunningSlider';
import s from './Home.module.scss';
import Mask from 'components/Animations/Mask';
import Fade from 'components/Animations/Fade';
import { memo } from 'react';
import Contacts from 'pages/Home/Contacts';
import { TContact, TRunningSlide, TSlide } from 'types/home';
import Slider from 'pages/Home/Slider';

interface IHome {
  content: {
    runningSlider: TRunningSlide[];
    contacts: TContact[];
    about: TSlide[];
  };
}

const Home: FC<IHome> = ({ content }) => {
  return (
    <div className={s.root}>
      <div className={s.top}>
        <Mask config={{ delay: 0.5 }}>
          <h1 className={s.title}>ЕДИНЫЙ РАСЧЕТНО – ИНФОРМАЦИОННЫЙ ЦЕНТР</h1>
        </Mask>
        <span className={s.description}>
          <Mask config={{ delay: 1 }}>
            <p>Города Осташкова</p>
          </Mask>
        </span>
      </div>
      <Fade config={{ delay: 1, duration: 2, fromTranslateY: '50%' }}>
        <RunningSlider data={content.runningSlider} />
      </Fade>
      <Contacts data={content.contacts} />
      <Slider about={content.about} />
    </div>
  );
};

export default memo(Home);
