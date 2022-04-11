import React, {
  FC, memo, useEffect, useRef,
} from 'react';
import debounce from 'lodash.debounce';
import { Spinner } from '.';
import styles from '../styles/DebounceInput.module.css';

interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  pending?: boolean;
  // eslint-disable-next-line no-unused-vars
  onDebounceChange: (_: React.ChangeEvent<HTMLInputElement>) => void
}

const DebounceInput: FC<InputProps> = ({
  value,
  onChange,
  pending,
  onDebounceChange,
  ...otherProps
}) => {
  const debouncedSearch = useRef(
    debounce((val): any => {
      onDebounceChange(val);
    }, 300),
  ).current;

  useEffect(() => () => {
    debouncedSearch.cancel();
  }, [debouncedSearch]);

  async function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    onChange(e?.target?.value);
    debouncedSearch(e.target.value);
  }

  return (
    <div className={styles.container}>
      <input
        onChange={handleChange}
        type="text"
        value={value}
        className={styles.input}
        {...otherProps}
      />
      {pending && (
        <div className={styles.spinnerContainer}>
          <Spinner />
        </div>
      )}
    </div>

  );
};

DebounceInput.defaultProps = {
  pending: false,
};

export default memo(DebounceInput);
