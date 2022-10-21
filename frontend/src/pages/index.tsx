import type { GetStaticProps, NextPage } from 'next';
import Page from 'components/Page';
import Home from 'pages/Home';
import data from 'stubs/homePage';

const HomePage: NextPage<any> = ({ content }) => {
  return (
    <Page title="Главная">
      <Home content={content} />
    </Page>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const content = data;

  return {
    props: { content }
  };
};

export default HomePage;
