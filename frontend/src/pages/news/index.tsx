import type { NextPage } from 'next';
import Page from 'components/Page';
import News from 'pages/News';

const NewsPage: NextPage<any> = () => {
  return (
    <Page title="Новости">
      <News />
    </Page>
  );
};

export default NewsPage;
