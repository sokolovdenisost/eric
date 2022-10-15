import type { GetStaticProps, NextPage } from 'next';
import Page from 'components/Page';
import Home from 'pages/Home';
import { IHome } from 'types/home';
import data from 'stubs/homePage';

interface Props {
  content: IHome;
}

const HomePage: NextPage<Props> = ({ content }) => {
  return (
    <Page title="Единый расчетно-информационный центр">
      <Home content={content} />
    </Page>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const content = data;

  return {
    props: { content },
  };
};

export default HomePage;
