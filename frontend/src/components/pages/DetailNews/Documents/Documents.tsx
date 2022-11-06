import s from './Documents.module.scss';
import type { FC } from 'react';
import Link from 'next/link';
import Mask from 'components/Animations/Mask';
import Fade from 'components/Animations/Fade';

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

const Documents: FC<any> = ({ documents }) => {
  return (
    <div className={s.root}>
      <Mask config={{ delay: 1.25 }}>
        <h3 className={s.title}>Документы</h3>
      </Mask>

      <div className={s.documents}>
        {documents.map((document: any, idx: number) => (
          <Fade
            key={document.id}
            config={{ delay: 1.5 + 0.25 * idx, fromTranslateY: '20%' }}
          >
            <Document {...document} />
          </Fade>
        ))}
      </div>
    </div>
  );
};

export default Documents;
