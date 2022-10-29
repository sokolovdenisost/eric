import type { FC } from 'react';
import s from './WhenScroll.module.scss';

interface Props {
  text: string;
}

const WhenScroll: FC<Props> = ({ text }) => {
  return (
    <div className={s.scrollBlock}>
      <div className={s.scroll} />
      <p className={s.text}>{text}</p>
    </div>
  );
};

export default WhenScroll;
