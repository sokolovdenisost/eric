import s from './Card.module.scss';
import Link from 'next/link';
import type { FC } from 'react';
import { memo } from 'react';

const Card: FC<any> = ({ title, date, image, slug }) => {
  return (
    <Link href={`/news/${slug}`}>
      <a className={s.root}>
        <div className={s.block}>
          {!!image?.url ? (
            <img className={s.img} src={image?.url} alt="news" />
          ) : (
            <p className={s.default}>ЕРИЦ</p>
          )}
        </div>
        <h4 className={s.title}>{title}</h4>
        <p className={s.date}>{date}</p>
      </a>
    </Link>
  );
};

export default memo(Card);
