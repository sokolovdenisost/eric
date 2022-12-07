import s from './Document.module.scss';
import { FC, memo } from 'react';
import Link from 'next/link';
import { TDocument } from 'types/news';

const Document: FC<TDocument> = ({ url, name }) => {
  return (
    <div className={s.document}>
      <Link href={url}>
        <a target="_blank">
          <div className={s.block}>
            <p className={s.default}>ЕРИЦ</p>
          </div>
          <p className={s.name}>{name}</p>
        </a>
      </Link>
    </div>
  );
};

export default memo(Document);
