import type { FC } from 'react';
import RunningSlider from 'pages/Home/RunningSlider';
import s from './Home.module.scss';
import Mask from 'components/Animations/Mask';

const Home: FC<any> = ({ content }) => {
  return (
    <div className={s.root}>
      <Mask config={{ delay: 0.5 }}>
        <h1 className={s.title}>{content.title}</h1>
      </Mask>
      <Mask config={{ delay: 1, duration: 2 }}>
        <RunningSlider data={content.runningSlider} />
      </Mask>
      {/*<Contact data={} />*/}
    </div>
  );
};

export default Home;
