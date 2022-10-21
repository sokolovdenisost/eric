import type { FC } from 'react';
import s from './NormativeBase.module.scss';
import Mask from 'components/Animations/Mask';

const NormativeBase: FC = () => {
  return (
    <div className={s.root}>
      <Mask config={{ delay: 0.5 }}>
        <h1 className={s.title}>Нормативно-правовая база</h1>
      </Mask>
    </div>
  );
};

export default NormativeBase;
