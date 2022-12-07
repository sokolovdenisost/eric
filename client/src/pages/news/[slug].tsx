import type { NextPage } from 'next';
import Page from 'components/Page';
import DetailNews from 'pages/DetailNews';
import { GetStaticPaths, GetStaticProps } from 'next';
import { getAllPath, getSingleBySlug } from 'strapi/index';
import { TDetailNews, TNews } from 'types/news';
import { revalidate } from 'constants/common';

interface IDetailNews {
  content: TDetailNews;
}

const DetailNewsPage: NextPage<IDetailNews> = ({ content }) => (
  <Page title="Новость">
    <DetailNews content={content} />
  </Page>
);

export const getStaticPaths: GetStaticPaths = async () => {
  const news = await getAllPath('news-details');

  const paths = news.map((n: TNews) => ({ params: { slug: n.slug } }));

  return {
    paths,
    fallback: false
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  try {
    const content = await getSingleBySlug('news-details', params!.slug, '*');

    return {
      props: { content },
      revalidate
    };
  } catch (e) {
    return {
      props: {},
      notFound: true,
      revalidate
    };
  }
};

export default DetailNewsPage;
