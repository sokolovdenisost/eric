import s from './InstrumentReadingsButton.module.scss';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { memo } from 'react';

const InstrumentReadingsButton = () => {
  const { asPath } = useRouter();

  if (asPath === '/instrument-readings') {
    return <></>;
  }

  return (
    <Link href="/instrument-readings">
      <a>
        <div className={s.root}>
          <p className={s.text}>Передать показания</p>
        </div>
      </a>
    </Link>
  );
};

export default memo(InstrumentReadingsButton);
