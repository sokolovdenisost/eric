import type { FC, MutableRefObject } from 'react';
import s from './RunningSlider.module.scss';
import RunningSlide from 'pages/Home/RunningSlider/RunningSlide';
import { memo, useEffect, useRef } from 'react';
import horizontalLoop from 'utils/horizontalLoop';
import gsap from 'gsap';

const getSlides = (data: any) => <RunningSlide key={data.id} data={data} />;

const RunningSlider: FC<any> = ({ data }) => {
  const animation: MutableRefObject<any> = useRef({});
  const slider: MutableRefObject<HTMLDivElement | null> = useRef(null);
  const widthRef: MutableRefObject<any> = useRef({});

  useEffect(() => {
    const items = gsap.utils.toArray(slider!.current!.children);

    animation.current = horizontalLoop(slider!.current!.children, {
      repeat: -1,
      reversed: true
    });

    widthRef.current.last = window.innerWidth;

    const handleResize = () => {
      widthRef.current.new = window.innerWidth;

      if (widthRef.current.last !== widthRef.current.new) {
        if (animation.current) {
          animation.current.kill();
          animation.current = null;

          gsap.set(items, {
            clearProps: 'all'
          });
        }

        animation.current = horizontalLoop(slider!.current!.children, {
          repeat: -1,
          reversed: true
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

export default memo(RunningSlider);
