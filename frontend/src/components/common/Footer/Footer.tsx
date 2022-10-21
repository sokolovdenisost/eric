import type { FC } from 'react';
import s from './Footer.module.scss';
import { Nav, nav } from 'constants/nav';
import classNames from 'classnames';
import RunningText from 'components/RunningText';

const Footer: FC = () => {
  return (
    <footer className={s.root}>
      <RunningText
        words={['осташков', 'единый расчетно-информационный центр']}
      />
      <div className={classNames(s.body, 'container')}>
        <a href="/" className={s.logo}>
          ЕРИЦ
        </a>
        <p className={s.description}>
          Единый расчетно – информационный центр, сокращенно ЕРИЦ, представляет
          собой учреждение, созданное с целью обеспечения координации и
          централизации расчетов по коммунальным платежам. В этой организации
          аккумулируется информация от организация – поставщиков коммунальных
          услуг, управляющих компаний, инженерных служб и на ее основании
          производится расчет общей суммы платежей за коммунальные услуги,
          создается единый платежный документ.
        </p>
        <div className={s.menu}>
          <p className={s.title}>МЕНЮ</p>
          <ul className={s.list}>
            {nav.map((data: Nav) => (
              <li key={data.href} className={s.item}>
                <a href={data.href} className={s.link}>
                  {data.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className={s.rights}>
        <p className={s.allRights}>
          © 2022. Единый расчетно – информационный центр
        </p>
      </div>
    </footer>
  );
};

export default Footer;
