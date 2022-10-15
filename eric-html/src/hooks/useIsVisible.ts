import { useEffect, useState } from 'react';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';

interface Visible {
  element: any;
  start: string;
  end: string;
  handleOnce?: () => void;
}

export const useIsVisible = ({ element, start, end, handleOnce }: Visible) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const st = new ScrollTrigger({
      trigger: element,
      start,
      onEnter: () => {
        setIsVisible(true);
      },
      onEnterBack: () => {
        setIsVisible(true);
      },
      onLeaveBack: () => {
        setIsVisible(false);
      },
      onLeave: () => {
        setIsVisible(false);
      },
      end,
    });

    return () => {
      st.kill();
    };
  }, [element, end, handleOnce, start]);

  return isVisible;
};
