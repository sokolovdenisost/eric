import type { FC } from 'react';
import s from './Header.module.scss';
import { nav } from 'constants/nav';
import classNames from 'classnames';
import type { NavType } from 'types/nav';
import Link from 'next/link';

const getItem = (data: NavType) => (
  <Link key={data.href} href={data.href}>
    <a className={s.link}>{data.title}</a>
  </Link>
);

const Header: FC = () => {
  return (
    <header className={classNames(s.root, 'container')}>
      <Link href="/">
        <a className={s.logo}>ЕРИЦ</a>
      </Link>
      <nav className={s.nav}>{nav.map(getItem)}</nav>
    </header>
  );
};

export default Header;
