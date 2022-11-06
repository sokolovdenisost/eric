import s from './DetailNews.module.scss';
import Mask from 'components/Animations/Mask';
import type { FC } from 'react';
import Documents from 'pages/DetailNews/Documents';
import Fade from 'components/Animations/Fade';
import { memo } from 'react';

const DetailNews: FC<any> = ({ content }) => {
  return (
    <div className={s.root}>
      <div className={s.top}>
        <Mask config={{ delay: 0.5 }}>
          <h2 className={s.title}>{content.title}</h2>
        </Mask>
        <Mask config={{ delay: 0.75 }}>
          <p className={s.datePublish}>
            Дата публикации: <span className={s.date}>{content.date}</span>
          </p>
        </Mask>
      </div>

      <div className={s.body}>
        <Fade config={{ delay: 1, fromTranslateY: '10%' }}>
          <div
            className={s.html}
            dangerouslySetInnerHTML={{ __html: content.description }}
          />
        </Fade>
      </div>

      {content?.documents?.length && (
        <Documents documents={content?.documents} />
      )}
    </div>
  );
};

export default memo(DetailNews);
