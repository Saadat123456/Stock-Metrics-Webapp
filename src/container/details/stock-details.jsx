import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getDetails } from '../../redux/Details/details';
import StockDescription from '../../components/details/stock-description';
import styles from './stock-details.module.css';
import StockHistoryPrices from '../../components/details/stock-history-prices';

const StockDetails = ({ stock }) => {
  const dispatch = useDispatch();
  const description = useSelector((state) => state.detailsReducer);
  useEffect(() => {
    dispatch(getDetails(stock.id));
  }, []);
  return (
    <div className={styles.container}>
      <StockDescription stock={stock} />
      <StockHistoryPrices description={description} />
    </div>
  );
};

StockDetails.propTypes = {
  stock: PropTypes.instanceOf(Object).isRequired,
};

export default StockDetails;
