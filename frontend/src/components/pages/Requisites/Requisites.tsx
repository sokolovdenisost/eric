import type { FC } from 'react';
import s from './Requisites.module.scss';
import Mask from 'components/Animations/Mask';
import Item from 'pages/Requisites/Item';
import Fade from 'components/Animations/Fade';
import type { Requisite, RequisitesContent } from 'types/requisites';

const getItem = (data: Requisite) => (
  <Item key={data.id} title={data.title} description={data.description} />
);

interface Props {
  content: RequisitesContent;
}

const Requisites: FC<Props> = ({ content }) => {
  return (
    <div className={s.root}>
      <Mask config={{ delay: 0.5 }}>
        <h1 className={s.title}>Реквизиты</h1>
      </Mask>

      <Fade config={{ delay: 1, fromTranslateY: '25%' }}>
        <div className={s.items}>{content.requisites.map(getItem)}</div>
      </Fade>
    </div>
  );
};

export default Requisites;
