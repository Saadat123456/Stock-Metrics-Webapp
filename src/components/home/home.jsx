import { useSelector } from 'react-redux';
import LoadingSpinner from '../common/loading-spinner';
import styles from './home.module.css';
import StockItem from './stock-item';

const Home = () => {
  const data = useSelector((state) => state.stockDataReducer);
  return (
    <div className={styles.container}>
      {data.length === 0
        ? (
          <LoadingSpinner />
        )
        : (
          <ul className={styles.list}>
            {data.map((stock) => (
              <StockItem stock={stock} key={stock.id} />
            ))}
          </ul>
        )}
    </div>
  );
};

export default Home;
