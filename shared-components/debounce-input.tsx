/* eslint-disable no-unused-vars */
import React, {
  FC, memo, useEffect, useRef,
} from 'react';
import debounce from 'lodash.debounce';
import { Spinner } from '.';
import styles from '../styles/DebounceInput.module.css';

interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  pending?: boolean;
  value: string | string[];
  onChange: (_: React.ChangeEvent<HTMLInputElement>) => void
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

  async function handleChange(e: any) {
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
