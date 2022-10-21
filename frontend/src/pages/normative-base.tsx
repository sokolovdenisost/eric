import type { GetStaticProps, NextPage } from 'next';
import Page from 'components/Page';
import NormativeBase from 'pages/NormativeBase';
import data from 'stubs/homePage';

const NormativeBasePage: NextPage<any> = () => {
  return (
    <Page title="Нормативно-правовая база">
      <NormativeBase />
    </Page>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const content = data;

  return {
    props: { content }
  };
};

export default NormativeBasePage;
