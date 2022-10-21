import type { GetStaticProps, NextPage } from 'next';
import Page from 'components/Page';
import News from 'pages/News';
import data from 'stubs/homePage';

const NewsPage: NextPage<any> = () => {
  return (
    <Page title="Новости">
      <News />
    </Page>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const content = data;

  return {
    props: { content }
  };
};

export default NewsPage;
