import React from 'react';
import { FaInfoCircle } from 'react-icons/fa';
import { Title } from '.';

import styles from '../styles/NoResult.module.css';

const NoResult = () => (
  <div className={styles.noresult}>
    <FaInfoCircle className={styles.infoIcon} />
    <Title>OOpss!.. No Result.</Title>
  </div>
);

export default NoResult;
