import type { NextPage } from 'next';
import Page from 'components/Page';
import News from 'pages/News';
import { GetStaticProps } from 'next';
import { getCollection } from 'strapi/index';
import { TNews } from 'types/news';

interface INews {
  content: TNews[];
}

const NewsPage: NextPage<INews> = ({ content }) => (
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
