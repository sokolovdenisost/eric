import type { FC } from 'react';
import s from './RunningSlide.module.scss';
import classNames from 'classnames';
import type { Image, RunningSlideType } from 'types/home';

interface Props {
  data: RunningSlideType<Image>;
}

const RunningSlide: FC<Props> = ({ data }) => {
  return (
    <div className={classNames(s.root, s[data.type])}>
      <img src={data.image.url} alt="image" className={s.image} />
    </div>
  );
};

export default RunningSlide;
