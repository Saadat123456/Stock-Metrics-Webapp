import deepFreeze from 'deep-freeze';
import mockData from './mock_data';
import stockDataReducer, { GET_STOCK_DATA, filterStockData } from './stock_data';

describe('Test Stock Data Reducer', () => {
  const initialState = { found: [], not_found: [] };

  test('Should return initial state', () => {
    expect(stockDataReducer(undefined, {})).toEqual(initialState);
  });

  let newState = {
    found: mockData,
    not_found: [],
  };

  deepFreeze(initialState);
  test('Add Initial Data', () => {
    expect(stockDataReducer(initialState, {
      type: GET_STOCK_DATA,
      data: mockData,
    })).toEqual(newState);
  });

  const createFilteredData = (mockData, filter) => ({
    found: mockData.filter(
      (stock) => stock.name.toUpperCase().match(filter.toUpperCase()),
    ),
    not_found: mockData.filter(
      (stock) => !stock.name.toUpperCase().match(filter.toUpperCase()),
    ),
  });

  let filter = 't';
  let filteredDataState = createFilteredData(mockData, filter);

  test('Add First Character to filter', () => {
    expect(stockDataReducer(newState, filterStockData(filter))).toEqual(filteredDataState);
  });

  test('Add Second Character to filter', () => {
    filter = 'te';
    newState = filteredDataState;
    filteredDataState = createFilteredData(mockData, filter);
    expect(stockDataReducer(filteredDataState, filterStockData(filter)));
  });

  test('Remove Second Character to filter', () => {
    filter = 't';
    newState = filteredDataState;
    filteredDataState = createFilteredData(mockData, filter);
    expect(stockDataReducer(filteredDataState, filterStockData(filter)));
  });

  test('Remove First Character to filter', () => {
    filter = '';
    newState = filteredDataState;
    filteredDataState = createFilteredData(mockData, filter);
    expect(stockDataReducer(filteredDataState, filterStockData(filter)));
  });
});
