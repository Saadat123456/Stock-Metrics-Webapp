import { useDispatch } from 'react-redux';
import { filterStockData } from '../../redux/StockData/stock_data';

const Search = () => {
  const dispatch = useDispatch();
  const style = {
    width: '100%',
    padding: '4px 8px',
    outline: 'none',
  };
  function handleChange(e) {
    dispatch(filterStockData(e.target.value));
  }
  return (
    <input type="text" style={style} id="search" onChange={handleChange} />
  );
};

export default Search;
