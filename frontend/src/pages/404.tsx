import type { NextPage } from 'next';
import NotFound from 'pages/NotFound';
import Page from 'components/Page';

const NotFoundPage: NextPage = () => {
  return (
    <Page title="Страница не найдена">
      <NotFound />
    </Page>
  );
};

export default NotFoundPage;
