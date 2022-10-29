import s from './Card.module.scss';
import Link from 'next/link';

const Card = () => {
  return (
    <Link href="/news/1">
      <a className={s.root}>
        <div className={s.block}>
          <img
            className={s.img}
            src="https://images.unsplash.com/photo-1662581871665-f299ba8ace07?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=986&q=80"
            alt="news"
          />
        </div>
        <h4 className={s.title}>
          Повышение тарифов по ООО Газпром теплоэнерго Тверь
        </h4>
        <p className={s.date}>22 августа 2022</p>
      </a>
    </Link>
  );
};

export default Card;
