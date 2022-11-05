import type { GetStaticProps, NextPage } from 'next';
import Page from 'components/Page';
import Home from 'pages/Home';
import { getSingle } from 'strapi/index';
import { HomeContent } from 'types/home';

const homePageProps = {
  populate: {
    runningSlider: {
      populate: '*'
    },
    about: '*',
    contacts: '*'
  }
};

interface Props {
  content: HomeContent;
}

const HomePage: NextPage<Props> = ({ content }) => {
  return (
    <Page title="Главная">
      <Home content={content} />
    </Page>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const content = await getSingle('home-page', homePageProps);

  return {
    props: { content }
  };
};

export default HomePage;
