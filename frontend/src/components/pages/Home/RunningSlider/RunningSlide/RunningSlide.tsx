import type { FC } from 'react';
import s from './RunningSlide.module.scss';
import classNames from 'classnames';

const RunningSlide: FC<any> = ({ data }) => {
  return (
    <div className={classNames(s.root, s[data.type])}>
      <img src={data.img} alt="image" className={s.image} />
    </div>
  );
};

export default RunningSlide;
