import type { FC } from 'react';
import s from './Item.module.scss';
import { memo } from 'react';
import type { TRequisite } from 'types/requisites';

const Item: FC<TRequisite> = ({ title, description }) => {
  return (
    <div className={s.root}>
      <h4 className={s.title}>{title}</h4>
      <h3 className={s.description}>{description}</h3>
    </div>
  );
};

export default memo(Item);
