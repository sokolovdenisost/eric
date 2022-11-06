import type { NextPage } from 'next';
import Page from 'components/Page';
import News from 'pages/News';
import { GetStaticPaths, GetStaticProps } from 'next';
import { getAllPath, getCollection } from 'strapi/index';

const NewsPage: NextPage<any> = ({ content }) => (
  <Page title="Новости">
    <News content={content} />
  </Page>
);

export const getStaticProps: GetStaticProps = async () => {
  const content = await getCollection('news-details', {
    sort: 'id:desc'
  });

  return {
    props: { content }
  };
};

export default NewsPage;
