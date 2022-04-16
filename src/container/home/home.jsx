import { useSelector } from 'react-redux';
import LoadingSpinner from '../../components/common/loading-spinner';
import Search from '../../components/search/search';
import styles from './home.module.css';
import StockItem from '../../components/home/stock-item';

const Home = () => {
  const data = useSelector((state) => state.stockDataReducer);
  return (
    <div className={styles.container}>
      <Search />
      {data.found.length === 0
        ? (
          <LoadingSpinner />
        )
        : (
          <ul className={styles.list}>
            {data.found.map((stock) => (
              <StockItem stock={stock} key={stock.id} />
            ))}
          </ul>
        )}
    </div>
  );
};

export default Home;
