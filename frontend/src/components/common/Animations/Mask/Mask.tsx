import type { FC, MutableRefObject, ReactNode } from 'react';
import s from './Mask.module.scss';
import { useEffect, useRef } from 'react';
import gsap, { Expo } from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import ScrollToPlugin from 'gsap/dist/ScrollToPlugin';

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

interface Props {
  children: ReactNode;
  config?: Config;
}

type Config = {
  delay?: number;
  duration?: number;
  start?: string;
  isScrollTrigger?: boolean;
  fromTranslateY?: string;
};

const Mask: FC<Props> = ({ children, config }) => {
  const mask = useRef(null);
  const animation: MutableRefObject<any> = useRef({});

  useEffect(() => {
    animation.current = gsap.fromTo(
      mask.current,
      {
        translateY: config?.fromTranslateY || '130%'
      },
      {
        scrollTrigger: config?.isScrollTrigger
          ? {
              trigger: mask.current,
              start: config?.start
            }
          : null,
        translateY: 0,
        duration: config?.duration ?? 0.75,
        delay: config?.delay ?? 0,
        ease: Expo.easeInOut
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
