import { memo, ReactNode, FC } from 'react';
import { Title } from '.';

import styles from '../styles/TextShow.module.css';

type TextShowProps = {
  textKey: string,
  textValue?: string,
  children?: ReactNode
}

const TextShow: FC<TextShowProps> = ({ textKey, textValue, children }) => (
  <div className={styles.textShow}>
    <Title>{textKey}</Title>
    {textValue && <span>{textValue}</span>}
    {children && (
      <div>
        {children}
      </div>
    )}
  </div>
);

TextShow.defaultProps = {
  textValue: '',
  children: null,
};

export default memo(TextShow);
