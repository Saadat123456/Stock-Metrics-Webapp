import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from '@redux-devtools/extension';
import stockDataReducer from './StockData/stock_data';
import detailsReducer from './Details/details';

const rootReducer = combineReducers({
  stockDataReducer,
  detailsReducer,
});

const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(thunk),
  ),
);

export default store;
