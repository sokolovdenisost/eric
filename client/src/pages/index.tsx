import type { GetStaticProps, NextPage } from 'next';
import Page from 'components/Page';
import Home from 'pages/Home';
import { getSingle } from 'strapi/index';
import { revalidate } from 'constants/common';

const homePageProps = {
  populate: {
    runningSlider: {
      populate: '*'
    },
    about: {
      populate: '*'
    },
    contacts: '*'
  }
};

const HomePage: NextPage<any> = ({ content }) => {
  return (
    <Page title="Главная">
      <Home content={content} />
    </Page>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const content = await getSingle('home-page', homePageProps);

  return {
    props: { content },
    revalidate
  };
};

export default HomePage;
