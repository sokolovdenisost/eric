import type { FC, ReactNode } from 'react';
import Head from 'next/head';
import Header from 'components/Header';
import Footer from 'components/Footer';
import Mask from 'components/Animations/Mask';

interface Props {
  title: string;
  children: ReactNode;
}

const Page: FC<Props> = ({ title, children }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>

      <Mask config={{ duration: 0.5 }}>
        <Header />
      </Mask>
      {children}
      <Mask config={{ duration: 1 }}>
        <Footer />
      </Mask>
    </>
  );
};

export default Page;
