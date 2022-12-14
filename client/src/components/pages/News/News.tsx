import type { FC } from 'react';
import s from './News.module.scss';
import Mask from 'components/Animations/Mask';
import Card from 'pages/News/Card';
import Fade from 'components/Animations/Fade';
import { memo } from 'react';
import { TNews } from 'types/news';

const getNews = (news: TNews, idx: number) => (
  <Fade
    key={idx}
    config={{
      delay: 1 + idx * 0.25,
      duration: 1,
      fromTranslateY: '25%'
    }}
  >
    <Card {...news} />
  </Fade>
);

interface INews {
  content: TNews[];
}

const News: FC<INews> = ({ content }) => {
  const mapNews = content.map(getNews);

  return (
    <div className={s.root}>
      <Mask config={{ delay: 0.5 }}>
        <h1 className={s.title}>Новости</h1>
      </Mask>
      <div className={s.news}>{mapNews}</div>
    </div>
  );
};

export default memo(News);
