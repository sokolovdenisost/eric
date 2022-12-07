import type { GetStaticProps, NextPage } from 'next';
import Page from 'components/Page';
import NormativeBase from 'pages/NormativeBase';
import { getSingle } from 'strapi/index';
import type { TNormativeBase } from 'types/normative-base';
import { revalidate } from 'constants/common';

interface INormativeBase {
  content: {
    links: TNormativeBase[];
  };
}

const NormativeBasePage: NextPage<INormativeBase> = ({ content }) => (
  <Page title="Нормативно-правовая база">
    <NormativeBase content={content} />
  </Page>
);

export const getStaticProps: GetStaticProps = async () => {
  const content = await getSingle('normative-base-page', { populate: '*' });

  return {
    props: { content },
    revalidate
  };
};

export default NormativeBasePage;
