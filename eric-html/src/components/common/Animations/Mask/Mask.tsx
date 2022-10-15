import type { FC, ReactNode } from 'react';
import s from './Mask.module.scss';
import { useEffect, useRef } from 'react';
import gsap, { Expo } from 'gsap';

interface Props {
  children: ReactNode;
  config?: Config;
}

type Config = {
  delay?: number,
  duration?: number,
};

const Mask: FC<Props> = ({ children, config }) => {
  const mask = useRef(null);
  const animation = useRef({});

  useEffect(() => {
    animation.current = gsap.fromTo(
      mask.current,
      {
        translateY: '100%',
      },
      {
        scrollTrigger: {
          trigger: mask.current,
          start: 'bottom bottom',
        },
        translateY: 0,
        duration: config?.duration ?? 0.75,
        delay: config?.delay ?? 0,
        ease: Expo.easeInOut,
      }
    );

    return () => animation.current.kill();
  }, []);

  return (
    <div className={s.root}>
      <div className={s.children} ref={mask}>
        {children}
      </div>
    </div>
  );
};

export default Mask;
