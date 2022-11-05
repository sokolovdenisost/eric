import type { GetStaticProps, NextPage } from 'next';
import Page from 'components/Page';
import NormativeBase from 'pages/NormativeBase';
import { getSingle } from 'strapi/index';
import { NormativeBaseContent } from 'types/normativeBase';

interface Props {
  content: NormativeBaseContent;
}

const NormativeBasePage: NextPage<Props> = ({ content }) => (
  <Page title="Нормативно-правовая база">
    <NormativeBase content={content} />
  </Page>
);

export const getStaticProps: GetStaticProps = async () => {
  const content = await getSingle('normative-base-page', { populate: '*' });

  return {
    props: { content }
  };
};

export default NormativeBasePage;
