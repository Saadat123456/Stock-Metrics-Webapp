import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import LoadingSpinner from '../common/loading-spinner';
import StockDetails from './stock-details';

const Details = () => {
  const { id } = useParams();
  const data = useSelector((state) => state.stockDataReducer);
  const styles = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };
  return (
    <div style={styles}>
      {
        data.length === 0 ? (
          <LoadingSpinner />
        ) : (
          <StockDetails stock={data[id - 1]} />
        )
      }
    </div>
  );
};

export default Details;
