import type { FC } from 'react';
import s from './Header.module.scss';
import { nav, Nav } from 'constants/nav';
import classNames from 'classnames';

const Header: FC = () => {
  return (
    <header className={classNames(s.root, 'container')}>
      <a href="/" className={s.logo}>
        ЕРИЦ
      </a>
      <nav className={s.nav}>
        {nav.map((data: Nav) => (
          <a key={data.href} href={data.href} className={s.link}>
            {data.title}
          </a>
        ))}
      </nav>
    </header>
  );
};

export default Header;
