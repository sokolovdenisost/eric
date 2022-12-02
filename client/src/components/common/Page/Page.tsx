import type { FC, ReactNode } from 'react';
import Head from 'next/head';
import Header from 'components/Header';
import Footer from 'components/Footer';
import Mask from 'components/Animations/Mask';
import { memo } from 'react';

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

      <Mask config={{ duration: 0.5 }}>
        <Header />
      </Mask>
      {children}
      <Footer />
    </>
  );
};

export default memo(Page);