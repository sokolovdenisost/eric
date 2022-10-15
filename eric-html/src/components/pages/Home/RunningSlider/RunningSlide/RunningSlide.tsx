import type { FC } from 'react';
import s from './RunningSlide.module.scss';
import classNames from 'classnames';
import type { runningSlider } from 'types/home';
import { IMAGE_TYPE_SIZES } from 'constants/index';

interface Props {
  data: runningSlider;
}

const RunningSlide: FC<Props> = ({ data }) => {
  return (
    <div className={classNames(s.root, s[IMAGE_TYPE_SIZES[data.type]])}>
      <img src={data.image} alt="image" className={s.image} />
    </div>
  );
};

export default RunningSlide;
