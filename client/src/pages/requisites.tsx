import type { NextPage, GetStaticProps } from 'next';
import Page from 'components/Page';
import Requisites from 'pages/Requisites';
import { getSingle } from 'strapi/index';
import type { TRequisite } from 'types/requisites';
import { revalidate } from 'constants/common';

interface Props {
  content: {
    requisites: TRequisite[];
  };
}

const RequisitesPage: NextPage<Props> = ({ content }) => (
  <Page title="Реквизиты">
    <Requisites content={content} />
  </Page>
);

export const getStaticProps: GetStaticProps = async () => {
  const content = await getSingle('requisites-page', { populate: '*' });

  return {
    props: { content },
    revalidate
  };
};

export default RequisitesPage;
