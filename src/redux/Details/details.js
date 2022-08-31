export const GET_DETAILS = 'Stock_Metrics_Webapp/details/GET';
export const FETCH_STARTING = 'Stock_Metrics_Webapp/details/START_FETCHING';

export const getDetailsApiUrl = (id) => `https://cors-anywhere.herokuapp.com/https://api.coinmarketcap.com/data-api/v3/cryptocurrency/detail/chart?id=${id}&range=1D`;

const initialState = [];

export const getDetails = (id) => async (dispatch) => {
  dispatch({
    type: FETCH_STARTING,
  });

  const response = await fetch(getDetailsApiUrl(id));
  const data = await response.json();
  const tempData = [];
  Object.keys(data.data.points).map((point) => tempData.push(
    [point, data.data.points[point].v[0]],
  ));
  dispatch({
    type: GET_DETAILS,
    data: tempData,
  });
};

const detailsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_DETAILS:
      return action.data;
    case FETCH_STARTING:
      return [];
    default:
      return state;
  }
};

export default detailsReducer;
