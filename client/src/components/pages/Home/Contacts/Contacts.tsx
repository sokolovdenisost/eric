import s from './Contacts.module.scss';
import { FC } from 'react';
import { TContact } from 'types/home';
import Fade from 'components/Animations/Fade';

const Contact: FC<TContact> = ({ title, description }) => (
  <div className={s.contact}>
    <h3 className={s.title}>{title}</h3>
    <p className={s.description}>{description}</p>
  </div>
);

interface Props {
  data: TContact[];
}

const getContacts = (data: TContact, idx: number) => (
  <Fade
    config={{
      delay: 1 + 0.25 * idx,
      fromTranslateY: '50%',
      isScrollTrigger: true
    }}
  >
    <Contact title={data.title} description={data.description} />
  </Fade>
);

const Contacts: FC<Props> = ({ data }) => {
  return <div className={s.root}>{data.map(getContacts)}</div>;
};

export default Contacts;
