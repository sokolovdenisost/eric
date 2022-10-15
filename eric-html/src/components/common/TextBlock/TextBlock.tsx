import type { FC } from 'react';
import s from './TextBlock.module.scss';
import classNames from 'classnames';
import Mask from 'components/Animations/Mask';

interface Props {
  title: string;
  description: string;
  className?: string;
}

const TextBlock: FC<Props> = ({ title, description, className }) => {
  return (
    <div className={classNames(s.root, className)}>
      <Mask>
        <h1 className={s.title}>{title}</h1>
      </Mask>
      <Mask config={{ delay: 0.15 }}>
        <p
          className={s.description}
          dangerouslySetInnerHTML={{ __html: description }}
        />
      </Mask>
    </div>
  );
};

export default TextBlock;
