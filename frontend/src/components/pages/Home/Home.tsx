import type { FC } from 'react';
import RunningSlider from 'pages/Home/RunningSlider';
import s from './Home.module.scss';
import Mask from 'components/Animations/Mask';
import Fade from 'components/Animations/Fade';

const Home: FC<any> = ({ content }) => {
  return (
    <div className={s.root}>
      <div className={s.top}>
        <Mask config={{ delay: 0.5 }}>
          <h1 className={s.title}>{content.title}</h1>
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
      {/*<Contact data={} />*/}
    </div>
  );
};

export default Home;
