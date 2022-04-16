import getCoinMarketApiUrl from '../../strings';

export const GET_STOCK_DATA = 'Stock_Metrics_Webapp/stock_data/GET';
export const FILTER_STOCK_DATA = 'Stock_Metrics_Webapp/stock_data/FILTER_STOCK_DATA';

const initialState = { found: [], not_found: [] };

export const getStockData = () => async (dispatch) => {
  const response = await fetch(getCoinMarketApiUrl());
  const data = await response.json();
  dispatch({
    type: GET_STOCK_DATA,
    data: data.data.cryptoCurrencyList,
  });
};

export const filterStockData = (filter) => ({
  type: FILTER_STOCK_DATA,
  filter,
});

const stockDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_STOCK_DATA: {
      const data = { found: action.data, not_found: [] };
      return data;
    }
    case FILTER_STOCK_DATA: {
      const combineArray = [
        ...state.found, ...state.not_found,
      ];
      const newState = {
        found: combineArray.filter(
          (stock) => stock.name.toUpperCase().match(action.filter.toUpperCase()),
        ),
        not_found: combineArray.filter(
          (stock) => !stock.name.toUpperCase().match(action.filter.toUpperCase()),
        ),
      };
      newState.found.sort((first, second) => first.cmcRank - second.cmcRank);
      return newState;
    }
    default:
      return state;
  }
};

export default stockDataReducer;
