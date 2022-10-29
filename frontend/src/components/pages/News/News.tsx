import type { FC } from 'react';
import s from './News.module.scss';
import Mask from 'components/Animations/Mask';
import Card from 'pages/News/Card';

const News: FC = () => {
  return (
    <div className={s.root}>
      <Mask config={{ delay: 0.5 }}>
        <h1 className={s.title}>Новости</h1>
      </Mask>
      <div className={s.news}>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((_, idx) => (
          <Mask key={idx} config={{ delay: 0.5 * idx, duration: 2 }}>
            <Card />
          </Mask>
        ))}
      </div>
    </div>
  );
};

export default News;
