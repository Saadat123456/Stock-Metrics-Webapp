import { getCoinMarketApiUrl } from '../../strings';

const GET_STOCK_DATA = 'Stock_Metrics_Webapp/stock_data/GET';

const initialState = [];

export const getStockData = () => async (dispatch) => {
  const response = await fetch(getCoinMarketApiUrl());
  const data = await response.json();
  dispatch({
    type: GET_STOCK_DATA,
    data: data.data.cryptoCurrencyList,
  });
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
