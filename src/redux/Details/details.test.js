import deepFreeze from 'deep-freeze';
import detailsReducer, { FETCH_STARTING, GET_DETAILS } from './details';

describe('Test Details Reducer', () => {
  const initialState = [];
  deepFreeze(initialState);
  test('Undefined Action: Should Return initial State', () => {
    expect(detailsReducer(initialState, { type: undefined })).toEqual(initialState);
  });

  test('Return Empty Array When Fetching Starts', () => {
    expect(detailsReducer(initialState, { type: FETCH_STARTING })).toEqual(initialState);
  });

  test('Return Data After Data Fetched', () => {
    const newData = [
      ['1649987640', 39977.779581286995],
      ['1649987940', 39985.145700436995],
      ['1649988240', 39957.10514902175],
    ];
    expect(detailsReducer(initialState, { type: GET_DETAILS, data: newData })).toEqual(newData);
  });
});
