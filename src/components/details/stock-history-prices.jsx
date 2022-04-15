import PropTypes from 'prop-types';
import LoadingSpinner from '../common/loading-spinner';
import styles from './stock-history-prices.module.css';

const StockHistoryPrices = ({ description }) => (
  <div className={styles.col}>
    <h3 className={`${styles.row} ${styles.heading}`}>Daily Prices</h3>
    <div className={styles.historyContainer}>
      {description.length === 0 ? <LoadingSpinner /> : (
        <>
          {
          description.map((cryptoCurrency) => {
            const date = new Date(parseInt(cryptoCurrency[0], 10) * 1000);
            const dateString = `${`00${date.getDay()}`.slice(-2)}/${`00${date.getMonth()}`.slice(-2)}/${`${date.getFullYear()}`.slice(-2)}`;
            const timeString = `${`00${date.getHours()}`.slice(-2)}:${`00${date.getMinutes()}`.slice(-2)}`;
            return (
              <div key={cryptoCurrency[0]} className={`${styles.row} ${styles.historyPrices}`}>
                <div className={styles.price}>
                  {cryptoCurrency[1]}
                </div>
                <div className={styles.dateTime}>
                  {timeString}
                  &nbsp;|&nbsp;
                  {dateString}
                </div>
              </div>
            );
          })
        }
        </>
      )}
    </div>

  </div>
);

StockHistoryPrices.propTypes = {
  description: PropTypes.instanceOf(Object).isRequired,
};

export default StockHistoryPrices;
