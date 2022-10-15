import type { FC } from 'react';
import s from './RunningSlider.module.scss';
import type { RunningSliderType } from 'types/home';
import RunningSlide from 'pages/Home/RunningSlider/RunningSlide';
import { useEffect, useRef } from 'react';
import horizontalLoop from 'utils/horizontalLoop';
import gsap from 'gsap';

interface Props {
  data: RunningSliderType[];
}

const getSlides = (data: RunningSliderType) => (
  <RunningSlide key={data.id} data={data} />
);

const RunningSlider: FC<Props> = ({ data }) => {
  const animation = useRef(null);
  const slider = useRef(null);
  const widthRef = useRef({});

  useEffect(() => {
    const items = gsap.utils.toArray(slider.current.children);

    animation.current = horizontalLoop(slider.current.children, {
      repeat: -1,
      reversed: true,
    });

    widthRef.current.last = window.innerWidth;

    const handleResize = () => {
      widthRef.current.new = window.innerWidth;

      if (widthRef.current.last !== widthRef.current.new) {
        if (animation.current) {
          animation.current.kill();
          animation.current = null;

          gsap.set(items, {
            clearProps: 'all',
          });
        }

        animation.current = horizontalLoop(slider.current.children, {
          repeat: -1,
          reversed: true,
        });

        widthRef.current.last = widthRef.current.new;
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      animation.current.kill();
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className={s.root} ref={slider}>
      {data.concat(data).map(getSlides)}
    </div>
  );
};

export default RunningSlider;
