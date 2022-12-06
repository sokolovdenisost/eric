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
        <title>{title}</title>
      </Head>

      <Header />
      {children}
      <Footer />
      <ToastContainer />
    </>
  );
};

export default memo(Page);
