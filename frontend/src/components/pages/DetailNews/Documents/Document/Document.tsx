import s from './Document.module.scss';
import { FC } from 'react';
import Link from 'next/link';

const Document: FC<any> = ({ url, name }) => {
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

export default Document;
