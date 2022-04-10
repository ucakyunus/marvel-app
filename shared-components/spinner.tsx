import { memo, FC } from 'react';

import styles from '../styles/Spinner.module.css';

const Spinner: FC = () => (
  <div className={styles['loading-spinner__overlay']}>
    <div className={styles['lds-dual-ring']} />
  </div>
);

export default memo(Spinner);
