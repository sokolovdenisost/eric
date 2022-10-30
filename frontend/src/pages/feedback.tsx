import type { NextPage } from 'next';
import Page from 'components/Page';
import Feedback from 'pages/Feedback';

const FeedbackPage: NextPage<any> = () => {
  return (
    <Page title="Обратная связь">
      <Feedback />
    </Page>
  );
};

export default FeedbackPage;
