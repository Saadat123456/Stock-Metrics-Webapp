import PropTypes from 'prop-types';
import styles from './stock-description.module.css';

const StockDescription = ({ stock }) => {
  const data = stock.quotes.filter((quote) => quote.name === 'USD')[0];
  return (
    <div className={styles['stock-description']}>
      <div className={styles['description-left']}>
        {data.price.toFixed(3)}
        &nbsp;$
      </div>
      <div className={styles['description-right']}>
        <div className={styles.stockHeading}>{stock.name}</div>
        <div className={styles.stockHeading}>{stock.symbol}</div>
        <div className={styles.col}>
          <div className={styles.row}>
            <div>Market Cap</div>
            <div>
              $&nbsp;
              {data.marketCap}
            </div>
          </div>
          <div className={styles.row}>
            <div>Volume(24h)</div>
            <div>
              $&nbsp;
              {data.volume24h}
            </div>
          </div>
          <div className={styles.row}>
            <div>24h %</div>
            <div>
              $&nbsp;
              {data.percentChange24h}
            </div>
          </div>
          <div className={styles.row}>
            <div>Circulating Supply</div>
            <div>
              $&nbsp;
              {stock.circulatingSupply}
            </div>
          </div>
          <div className={styles.row}>
            <div>Max Supply</div>
            <div>
              $&nbsp;
              {stock.maxSupply}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

StockDescription.propTypes = {
  stock: PropTypes.instanceOf(Object).isRequired,
};

export default StockDescription;
