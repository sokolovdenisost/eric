import type { FC } from 'react';
import s from './Fade.module.scss';
import gsap, { Expo } from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import ScrollToPlugin from 'gsap/dist/ScrollToPlugin';
import { memo, useEffect, useRef } from 'react';
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const Fade: FC<any> = ({ children, config }) => {
  const animation = useRef({});
  const ref = useRef(null);

  useEffect(() => {
    animation.current = gsap.fromTo(
      ref.current,
      {
        opacity: 0,
        translateY: config?.fromTranslateY || '-100%'
      },
      {
        scrollTrigger: config?.isScrollTrigger
          ? {
              trigger: ref.current,
              start: config?.start
            }
          : null,
        opacity: 1,
        translateY: 0,
        duration: config?.duration ?? 0.75,
        delay: config?.delay ?? 0,
        ease: Expo.easeInOut
      }
    );

    return () => animation.current.kill();
  }, []);

  return (
    <div ref={ref} className={s.root}>
      {children}
    </div>
  );
};

export default memo(Fade);
