import type { FC } from 'react';
import type { IHome } from 'types/home';
import RunningSlider from 'pages/Home/RunningSlider';
import s from './Home.module.scss';
import Contact from 'pages/Home/Contact';
import About from 'pages/Home/About';
import Mask from 'components/Animations/Mask';

interface Props {
  content: IHome;
}

const Home: FC<Props> = ({ content }) => {
  return (
    <div className={s.root}>
      <Mask>
        <h1 className={s.title}>{content.title}</h1>
      </Mask>
      <RunningSlider data={content.runningSlider} />
      <Contact data={content.contacts} />
      <About data={content.about} />
    </div>
  );
};

export default Home;
