import { memo, FC } from 'react';
import { FaSpinner } from 'react-icons/fa';
import styles from '../styles/Spinner.module.css';

type SpinnerProps = {
  className?: string
}

const Spinner: FC<SpinnerProps> = ({ className }) => (
  <div className={className}>
    <FaSpinner className={styles.spinner} />
  </div>
);

Spinner.defaultProps = {
  className: '',
};

export default memo(Spinner);
