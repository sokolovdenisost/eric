import s from './Documents.module.scss';
import type { FC } from 'react';
import Mask from 'components/Animations/Mask';
import Fade from 'components/Animations/Fade';
import { memo } from 'react';
import Document from './Document';
import type { TDocument } from 'types/news';

const getDocuments = (document: TDocument, idx: number) => (
  <Fade
    key={document.name}
    config={{ delay: 1.5 + 0.25 * idx, fromTranslateY: '20%' }}
  >
    <Document {...document} />
  </Fade>
);

interface IDocuments {
  documents: TDocument[];
}

const Documents: FC<IDocuments> = ({ documents }) => {
  return (
    <div className={s.root}>
      <Mask config={{ delay: 1.25 }}>
        <h3 className={s.title}>Документы</h3>
      </Mask>

      <div className={s.documents}>{documents.map(getDocuments)}</div>
    </div>
  );
};

export default memo(Documents);
