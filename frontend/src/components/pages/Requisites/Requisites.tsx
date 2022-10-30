import type { FC } from 'react';
import s from './Requisites.module.scss';
import Mask from 'components/Animations/Mask';
import Item from 'pages/Requisites/Item';
import Fade from 'components/Animations/Fade';

const Requisites: FC = () => {
  return (
    <div className={s.root}>
      <Mask config={{ delay: 0.5 }}>
        <h1 className={s.title}>Реквизиты</h1>
      </Mask>

      <Fade config={{ delay: 1, fromTranslateY: '25%' }}>
        <div className={s.items}>
          <Item
            title="Генеральный директор"
            description="Соколова Ирина Сергеевна"
          />
          <Item title="КПП" description="691301001" />
          <Item title="ОКВЭД" description="72 40" />
          <Item title="ОГРН" description="1116913000654" />
          <Item title="ОКПО" description="91925838" />
          <Item title="Р/СЧ" description="40702810463160000961" />
          <Item title="БИК" description="042809679" />
          <Item title="ИНН" description="6913013113" />
          <Item
            title="Телефоны"
            description="+7-915-733-91-61 или 8 (48235) 4-70-80"
          />
          <Item
            title="Адрес"
            description="172730 Тверская обл., г.Осташков Ленинский пр., 119а, офис 4. В здании Сбербанка 2 этаж"
          />
        </div>
      </Fade>
    </div>
  );
};

export default Requisites;
