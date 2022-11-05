import type { NextPage, GetStaticProps } from 'next';
import Page from 'components/Page';
import Requisites from 'pages/Requisites';
import { getSingle } from 'strapi/index';
import type { RequisitesContent } from 'types/requisites';

interface Props {
  content: RequisitesContent;
}

const RequisitesPage: NextPage<Props> = ({ content }) => (
  <Page title="Реквизиты">
    <Requisites content={content} />
  </Page>
);

export const getStaticProps: GetStaticProps = async () => {
  const content = await getSingle('requisites-page', { populate: '*' });

  return {
    props: { content }
  };
};

export default RequisitesPage;
