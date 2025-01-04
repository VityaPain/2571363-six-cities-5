import styles from './styles.module.css';

type SpinnerProps = {
  variant: 'page' | 'block' | 'inline';
};

function Spinner({ variant }: SpinnerProps): JSX.Element {
  const spinner: JSX.Element = <div className={styles.loader}></div>;

  const containerSize = variant === 'page' ? styles.pageSize : styles.blockSize;

  return variant === 'inline' ? (
    spinner
  ) : (
    <div className={`${styles.spinnerContainer} ${containerSize}`}>
      {spinner}
    </div>
  );
}

export default Spinner;
