import styles from './loading-spinner.module.css';

const LoadingSpinner = () => (
  <div className={styles['lds-ripple']} data-testid="loading">
    <div />
    <div />
  </div>
);

export default LoadingSpinner;
