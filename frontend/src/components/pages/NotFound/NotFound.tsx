import type { FC } from 'react';
import s from './NotFound.module.scss';
import Mask from 'components/Animations/Mask';
import Link from 'next/link';

const NotFound: FC = () => {
  return (
    <div className={s.root}>
      <div className={s.center}>
        <Mask config={{ duration: 2 }}>
          <h1 className={s.title}>Страница не найдена</h1>
        </Mask>
        <Mask config={{ delay: 0.75, duration: 2 }}>
          <p className={s.number}>404</p>
        </Mask>
        <Mask config={{ delay: 1.5, duration: 2 }}>
          <Link href="/">
            <a className={s.link}>ВЕРНУТЬСЯ НА ГЛАВНУЮ</a>
          </Link>
        </Mask>
      </div>
    </div>
  );
};

export default NotFound;
