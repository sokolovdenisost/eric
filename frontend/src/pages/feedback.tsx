import type { NextPage } from 'next';
import Page from 'components/Page';
import Feedback from 'pages/Feedback';

const FeedbackPage: NextPage<any> = () => {
  return (
    <Page title="Новости">
      <Feedback />
    </Page>
  );
};

export default FeedbackPage;
