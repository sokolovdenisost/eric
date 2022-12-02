import type { FC } from 'react';
import s from './NormativeBase.module.scss';
import Mask from 'components/Animations/Mask';
import { memo } from 'react';
import { TNormativeBase } from 'types/normative-base';

const getItem = (data: TNormativeBase, idx: number) => (
  <li key={data.id} className={s.item}>
    <Mask config={{ delay: 1 + idx * 0.25, duration: 1 }} key={idx}>
      <a href={data.link} className={s.link}>
        {data.title}
      </a>
    </Mask>
  </li>
);

interface INormativeBase {
  content: {
    links: TNormativeBase[];
  };
}

const NormativeBase: FC<INormativeBase> = ({ content }) => {
  return (
    <div className={s.root}>
      <Mask config={{ delay: 0.5 }}>
        <h1 className={s.title}>Нормативно-правовая база</h1>
      </Mask>
      <div className={s.links}>
        <ul className={s.list}>{content.links.map(getItem)}</ul>
      </div>
    </div>
  );
};

export default memo(NormativeBase);
