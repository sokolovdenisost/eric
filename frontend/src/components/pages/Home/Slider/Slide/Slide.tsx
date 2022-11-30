import Arrow from 'images/arrow.svg';
import s from './Slide.module.scss';
import React, { FC } from 'react';
import { TSlide } from 'types/home';
import Mask from 'components/Animations/Mask';
import classNames from 'classnames';

interface Props {
  currentSlide: number;
  changeSlide: (type: string) => void;
  data: TSlide;
  slideNumber: number;
  slidesLength: number;
}

const Slide: FC<Props> = ({
  currentSlide,
  slidesLength,
  slideNumber,
  changeSlide,
  data
}) => {
  const isDisabledLeft = currentSlide === 0;
  const isDisabledRight = slidesLength === currentSlide;

  return (
    <div className={s.root}>
      <img src={data.image.url} alt={data.title} className={s.image} />
      <div className={s.body}>
        <div className={s.arrows}>
          <button
            disabled={isDisabledLeft}
            className={classNames(isDisabledLeft && s.disabled)}
            onClick={() => changeSlide('-')}
          >
            <Arrow className={s.arrowLeft} />
          </button>
          <span className={s.number}>{slideNumber + 1} / 3</span>
          <button
            className={classNames(isDisabledRight && s.disabled)}
            disabled={isDisabledRight}
            onClick={() => changeSlide('+')}
          >
            <Arrow className={s.arrowRight} />
          </button>
        </div>
        <h3 className={s.title}>{data.title}</h3>
        <div
          className={s.description}
          dangerouslySetInnerHTML={{ __html: data.description }}
        />
      </div>
    </div>
  );
};

export default Slide;
