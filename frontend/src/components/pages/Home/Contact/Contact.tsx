import type { FC } from 'react';
import s from './Contact.module.scss';
import type { ContactsType } from 'types/home';
import TextBlock from 'components/TextBlock';
import Mask from 'components/Animations/Mask';

interface Props {
  data: {
    address: ContactsType,
    contacts: ContactsType[],
  };
}

const getContacts = (data: ContactsType) => (
  <TextBlock key={data.id} {...data} />
);

const Contact: FC<Props> = ({ data }) => {
  return (
    <div className={s.root}>
      <Mask>
        <h1 className={s.title}>Как с нами связаться?</h1>
      </Mask>
      <div className={s.block}>
        <div className={s.left}>{data.contacts.map(getContacts)}</div>
        <div className={s.right}>
          <TextBlock
            title={data.address.title}
            description={data.address.description}
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;
