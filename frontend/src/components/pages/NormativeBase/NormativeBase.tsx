import type { FC } from 'react';
import s from './NormativeBase.module.scss';
import Mask from 'components/Animations/Mask';

const getItem = (data: any, idx: number) => (
  <li className={s.item}>
    <Mask config={{ delay: 0.5 * idx, duration: 2 }} key={idx}>
      <a href="/" className={s.link}>
        Об утверждении нормативов потребления коммунальной услуги по холодному и
        горячему водоснабжению в жилых помещениях при отсутствии индивидуальных
        приборов учета для потребителей Тверской области (с изменениями на 29
        декабря 2017 года)
      </a>
    </Mask>
  </li>
);

const NormativeBase: FC = () => {
  return (
    <div className={s.root}>
      <Mask config={{ delay: 0.5 }}>
        <h1 className={s.title}>Нормативно-правовая база</h1>
      </Mask>
      <div className={s.links}>
        <ul className={s.list}>{[1, 2, 3, 4, 5, 6].map(getItem)}</ul>
      </div>
    </div>
  );
};

export default NormativeBase;
