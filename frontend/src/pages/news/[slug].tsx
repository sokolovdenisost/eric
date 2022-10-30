import type { NextPage } from 'next';
import Page from 'components/Page';
import DetailNews from 'pages/DetailNews';

const DetailNewsPage: NextPage<any> = () => {
  return (
    <Page title="Новость">
      <DetailNews />
    </Page>
  );
};

export default DetailNewsPage;
