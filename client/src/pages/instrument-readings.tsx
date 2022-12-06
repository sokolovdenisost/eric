import type { NextPage } from 'next';
import Page from 'components/Page';
import InstrumentReadings from 'pages/InstrumentReadings';

const InstrumentReadingsPage: NextPage = () => (
  <Page title="Передача показания приборов учета">
    <InstrumentReadings />
  </Page>
);

export default InstrumentReadingsPage;
