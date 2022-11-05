import type { FC } from 'react';
import s from './NormativeBase.module.scss';
import Mask from 'components/Animations/Mask';
import type { Link, NormativeBaseContent } from 'types/normativeBase';

interface Props {
  content: NormativeBaseContent;
}

const getItem = (data: Link, idx: number) => (
  <li key={data.id} className={s.item}>
    <Mask config={{ delay: 1 + idx * 0.25, duration: 1 }} key={idx}>
      <a href={data.link} className={s.link}>
        {data.title}
      </a>
    </Mask>
  </li>
);

const NormativeBase: FC<Props> = ({ content }) => {
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

export default NormativeBase;
