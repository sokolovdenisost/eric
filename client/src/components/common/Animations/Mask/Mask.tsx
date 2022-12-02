import type { FC, ReactNode } from 'react';
import s from './Mask.module.scss';
import { memo, useEffect, useRef } from 'react';
import gsap, { Expo } from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import ScrollToPlugin from 'gsap/dist/ScrollToPlugin';

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

interface IMask {
  children: ReactNode;
  config: TConfig;
}

type TConfig = {
  fromTranslateY?: string;
  isScrollTrigger?: boolean;
  start?: string;
  duration?: number;
  delay?: number;
};

const Mask: FC<IMask> = ({ children, config }) => {
  const animation: any = useRef(null);
  const mask = useRef(null);

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

export default memo(Mask);
