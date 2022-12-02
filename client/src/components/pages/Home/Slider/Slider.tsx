import s from './Slider.module.scss';
import Slide from 'pages/Home/Slider/Slide';
import { FC, useState } from 'react';
import { TSlide } from 'types/home';

interface Props {
  about: TSlide[];
}

const Slider: FC<Props> = ({ about }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const changeSlideHandler = (type: string) => {
    if (type === '+' && currentSlide !== about.length - 1) {
      setCurrentSlide(currentSlide + 1);
    }

    if (type === '-' && currentSlide !== 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  const mapSlides = about.map((data: TSlide, idx: number) => (
    <Slide
      currentSlide={currentSlide}
      slideNumber={idx}
      data={data}
      slidesLength={about.length - 1}
      changeSlide={changeSlideHandler}
    />
  ));

  return (
    <div className={s.root} style={{ marginLeft: `-${currentSlide * 100}vw` }}>
      {mapSlides}
    </div>
  );
};

export default Slider;
