import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import styles from './home.module.css';
import Star from './star';

const Home = () => {
  const data = useSelector((state) => state.stockDataReducer);
  return (
    <div className={styles.container}>
      {data.length === 0
        ? (
          <div className="lds-ripple">
            <div />
            <div />
          </div>
        )
        : (
          <ul className={styles.list}>
            {data.map((stock) => (
              <Link to={`/details/${stock.cmcRank}`} key={stock.id} className={`${styles['list-item-link']} ${stock.cmcRank === 1 || stock.cmcRank === 2 || stock.cmcRank === 3 ? styles[`position-${stock.cmcRank}`] : ''}`}>
                <li className={styles['list-item']}>
                  <div className={styles.price}>
                    <div>
                      {stock.quotes.filter((quote) => quote.name === 'USD')[0].price.toFixed(3)}
                    &nbsp;$
                    </div>
                  </div>
                  <div className={styles.representation}>
                    <span>{stock.name}</span>
                    <span>
                      (&nbsp;
                      {stock.symbol}
                    &nbsp;)
                      {
                      stock.cmcRank === 1 ? <Star className={styles.star} colorDark="#fc0" colorLight1="#fd5" colorLight2="#ffe680" colorLight3="#ffd42a" /> : ''
                    }
                      {
                      stock.cmcRank === 2 ? <Star className={styles.star} colorDark="#8b8b8b" colorLight1="#c0c0c0" colorLight2="#c0c0c0" colorLight3="#c0c0c0" /> : ''
                    }
                      {
                      stock.cmcRank === 3 ? <Star className={styles.star} colorDark="#cd7f32" colorLight1="#ef953d" colorLight2="#ff9f41" colorLight3="#ff9f41" /> : ''
                    }
                    </span>
                  </div>
                  <div className={styles.supply}>
                    <div data-title="Total Supply" className={styles.tooltip}>
                      TS:&nbsp;
                    </div>
                    {stock.totalSupply}
                  </div>
                </li>
              </Link>
            ))}
          </ul>
        )}
    </div>
  );
};

export default Home;
