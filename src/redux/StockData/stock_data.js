// import { getCoinMarketApiUrl } from '../../strings';
import mockData from './mock_data';

const GET_STOCK_DATA = 'Stock_Metrics_Webapp/stock_data/GET';

const initialState = [];

export const getStockData = () => async (dispatch) => {
  // const response = await fetch(getCoinMarketApiUrl());
  // const data = await response.json();
  setTimeout(() => {
    dispatch({
      type: GET_STOCK_DATA,
      // data: data.data.cryptoCurrencyList,
      data: mockData,
    });
  }, 2000);
  // const data = [];
  // dispatch({
  //   type: GET_STOCK_DATA,
  //   data: data.data.cryptoCurrencyList,
  //   // data: mockData,
  // });
};

const stockDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_STOCK_DATA:
      return action.data;
    default:
      return state;
  }
};

export default stockDataReducer;
