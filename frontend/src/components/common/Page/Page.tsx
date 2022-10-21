import type { FC, ReactNode } from 'react';
import Head from 'next/head';
import Header from 'components/Header';
import Footer from 'components/Footer';

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

      <Header />
      {children}
      <Footer />
    </>
  );
};

export default Page;
