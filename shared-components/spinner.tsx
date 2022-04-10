import { memo, FC } from 'react';
import { FaSpinner } from 'react-icons/fa';
import styles from '../styles/Spinner.module.css';

const Spinner: FC = () => (
  <div>
    <FaSpinner className={styles.spinner} />
  </div>
);

export default memo(Spinner);
