import type { FC, ReactNode } from 'react';
import Head from 'next/head';
import Header from 'components/Header';
import Footer from 'components/Footer';
import Mask from 'components/Animations/Mask';
import { memo } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface IPage {
  title: string;
  children: ReactNode;
}

const Page: FC<IPage> = ({ title, children }) => {
  return (
    <>
      <Head>
        <title>{`${title} | Единый расчетно – информационный центр`}</title>
        <meta
          name="description"
          content="Единый расчетно – информационный центр, сокращенно ЕРИЦ, представляет собой учреждение, созданное с целью обеспечения координации и централизации расчетов по коммунальным платежам. В этой организации аккумулируется информация от организация – поставщиков коммунальных услуг, управляющих компаний, инженерных служб и на ее основании производится расчет общей суммы платежей за коммунальные услуги, создается единый платежный документ."
        />
        <meta
          name="keywords"
          content="ериц, осташков, единый расчетно информационный центр, ериц осташков, ерц"
        />
      </Head>

      <Header />
      {children}
      <Footer />
      <ToastContainer />
    </>
  );
};

export default memo(Page);
