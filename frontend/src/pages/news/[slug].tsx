import type { NextPage } from 'next';
import Page from 'components/Page';
import DetailNews from 'pages/DetailNews';
import { GetStaticPaths, GetStaticProps } from 'next';
import { getAllPath, getCollection, getSingleBySlug } from 'strapi/index';

const DetailNewsPage: NextPage<any> = ({ content }) => (
  <Page title="Новость">
    <DetailNews content={content} />
  </Page>
);

export const getStaticPaths: GetStaticPaths = async () => {
  const news = await getAllPath('news-details');

  const paths = news.map((n: any) => ({ params: { slug: n.slug } }));

  return {
    paths,
    fallback: false
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  try {
    const content = await getSingleBySlug('news-details', params!.slug, '*');

    return {
      props: { content }
    };
  } catch (e) {
    return {
      props: {},
      notFound: true
    };
  }
};

export default DetailNewsPage;
