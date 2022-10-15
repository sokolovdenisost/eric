import type { FC } from 'react';
import s from './NotFound.module.scss';
import Mask from 'components/Animations/Mask';

const NotFound: FC = () => {
  return (
    <div className={s.root}>
      <div className={s.center}>
        <Mask>
          <h1 className={s.title}>Страница не найдена</h1>
        </Mask>
        <Mask config={{ delay: 0.5, duration: 2 }}>
          <p className={s.number}>404</p>
        </Mask>
        <Mask config={{ delay: 2 }}>
          <a href="/" className={s.link}>
            ВЕРНУТЬСЯ НА ГЛАВНУЮ
          </a>
        </Mask>
      </div>
    </div>
  );
};

export default NotFound;
