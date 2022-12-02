import type { FC } from 'react';
import s from './Header.module.scss';
import { nav, NavType } from 'constants/nav';
import classNames from 'classnames';
import Link from 'next/link';
import { memo, useState } from 'react';
import Mask from 'components/Animations/Mask';

const getItem = (data: NavType) => (
  <Link key={data.href} href={data.href}>
    <a className={s.link}>{data.title}</a>
  </Link>
);

const Header: FC = () => {
  const [active, setActive] = useState(false);
  return (
    <header className={classNames(s.root, 'container')}>
      <Link href="/">
        <a className={s.logo}>ЕРИЦ</a>
      </Link>
      <button className={classNames(s.menu)} onClick={() => setActive(!active)}>
        {active ? (
          <div>
            <Mask config={{ delay: 0.1 }}>
              <p className={s.menuTitle}>ЗАКРЫТЬ</p>
            </Mask>
          </div>
        ) : (
          <Mask config={{ delay: 0.1 }}>
            <p className={s.menuTitle}>МЕНЮ</p>
          </Mask>
        )}
      </button>
      <nav className={s.nav}>{nav.map(getItem)}</nav>
    </header>
  );
};

export default memo(Header);
