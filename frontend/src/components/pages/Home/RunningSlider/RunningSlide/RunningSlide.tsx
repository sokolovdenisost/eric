import type { FC } from 'react';
import s from './RunningSlide.module.scss';
import classNames from 'classnames';
import { memo } from 'react';

const RunningSlide: FC<any> = ({ data }) => {
  return (
    <div className={classNames(s.root, s[data.type])}>
      <img src={data.image.url} alt="image" className={s.image} />
    </div>
  );
};

export default memo(RunningSlide);
