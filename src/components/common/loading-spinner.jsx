import styles from './loading-spinner.module.css';

const LoadingSpinner = () => (
  <div className={styles['lds-ripple']}>
    <div />
    <div />
  </div>
);

export default LoadingSpinner;
