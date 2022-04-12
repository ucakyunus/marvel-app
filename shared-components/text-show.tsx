import { memo, ReactNode, FC } from 'react';
import { Title } from '.';

import styles from '../styles/TextShow.module.css';

type TextShowProps = {
  textKey: string,
  textValue?: String,
  children?: ReactNode
}

const TextShow: FC<TextShowProps> = ({ textKey, textValue, children }) => (
  <div className={`${styles.styleTextShow} ${children && styles.styleListShow}`}>
    <Title className={styles.styleTextKey}>{textKey}</Title>
    {textValue && <Title headingLevel="p" className={styles.styleTextValue}>{textValue}</Title>}
    {children && (
      <div className={styles.styleDetailContainer}>
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
