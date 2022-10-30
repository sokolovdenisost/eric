import type { NextPage } from 'next';
import Page from 'components/Page';
import Requisites from 'pages/Requisites';

const RequisitesPage: NextPage<any> = () => {
  return (
    <Page title="Реквизиты">
      <Requisites />
    </Page>
  );
};

export default RequisitesPage;
