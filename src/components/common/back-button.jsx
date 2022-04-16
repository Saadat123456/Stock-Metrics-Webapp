// import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { filterStockData } from '../../redux/StockData/stock_data';

const BackButton = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  if (location.pathname.match(/\/details\/[1-9]+/g) === null) {
    return null;
  }

  function handleClick() {
    dispatch(filterStockData(''));
    if (window.history.state && window.history.state.idx > 0) {
      navigate(-1);
    } else {
      navigate('/', { replace: true }); // the current entry in the history stack will be replaced with the new one with { replace: true }
    }
  }

  return (
    <svg onClick={handleClick} style={{ cursor: 'pointer' }} stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="20" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M217.9 256L345 129c9.4-9.4 9.4-24.6 0-33.9-9.4-9.4-24.6-9.3-34 0L167 239c-9.1 9.1-9.3 23.7-.7 33.1L310.9 417c4.7 4.7 10.9 7 17 7s12.3-2.3 17-7c9.4-9.4 9.4-24.6 0-33.9L217.9 256z" /></svg>
  );
};

export default BackButton;
