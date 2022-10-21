import type { FC } from 'react';
import s from './News.module.scss';
import Mask from 'components/Animations/Mask';

const News: FC = () => {
  return (
    <div className={s.root}>
      <Mask config={{ delay: 0.5 }}>
        <h1 className={s.title}>Новости</h1>
      </Mask>
    </div>
  );
};

export default News;
