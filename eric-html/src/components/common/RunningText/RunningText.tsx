import s from './RunningText.module.scss';
import { FC, Fragment, useEffect, useRef } from 'react';
import gsap from 'gsap';
import horizontalLoop from 'utils/horizontalLoop';

interface Props {
  words: string[];
}

const RunningText: FC<Props> = ({ words }) => {
  const animation = useRef(null);
  const widthRef = useRef({});
  const runningText = useRef(null);

  useEffect(() => {
    const items = gsap.utils.toArray(runningText.current.children);

    animation.current = horizontalLoop(runningText.current.children, {
      repeat: -1,
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

        animation.current = horizontalLoop(runningText.current.children, {
          repeat: -1,
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
    <div className={s.root} ref={runningText}>
      {String(words.join('|') + '|')
        .repeat(20)
        .split('|')
        .map((word, idx) => (
          <Fragment key={idx}>
            <p>{word}</p>
            <span />
          </Fragment>
        ))}
    </div>
  );
};

export default RunningText;
