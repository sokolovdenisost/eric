import s from './Documents.module.scss';
import type { FC } from 'react';
import Link from 'next/link';
import Mask from 'components/Animations/Mask';
import Fade from 'components/Animations/Fade';

const Document: FC = () => {
  return (
    <div className={s.document}>
      <Link href="/">
        <a>
          <img
            src="https://data.unhcr.org/images/documents/big_4cda85d892a5c0b5dd63b510a9c83e9c9d06e739.jpg"
            alt="document"
            className={s.image}
          />
          <p className={s.name}>
            Главное управление “Региональная энергетическая комиссия” Тверской
            области
          </p>
        </a>
      </Link>
    </div>
  );
};

const Documents: FC = () => {
  return (
    <div className={s.root}>
      <Mask config={{ delay: 1.25 }}>
        <h3 className={s.title}>Документы</h3>
      </Mask>

      <div className={s.documents}>
        <Fade config={{ delay: 1.5, fromTranslateY: '20%' }}>
          <Document />
        </Fade>
      </div>
    </div>
  );
};

export default Documents;
