import s from './DetailNews.module.scss';
import Mask from 'components/Animations/Mask';
import type { FC } from 'react';
import Documents from 'pages/DetailNews/Documents';
import Fade from 'components/Animations/Fade';

const DetailNews: FC = () => {
  return (
    <div className={s.root}>
      <div className={s.top}>
        <Mask config={{ delay: 0.5 }}>
          <h2 className={s.title}>Новость</h2>
        </Mask>
        <Mask config={{ delay: 0.75 }}>
          <p className={s.datePublish}>
            Дата публикации: <span className={s.date}>22 августа 2022</span>
          </p>
        </Mask>
      </div>

      <div className={s.body}>
        <Fade config={{ delay: 1 }}>
          <p>Повышение тарифов по ООО Газпром теплоэнерго Тверь</p>
        </Fade>
      </div>

      <Documents />
    </div>
  );
};

export default DetailNews;
