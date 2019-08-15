import {
  FETCH_BREWERIES_DATA_START,
  FETCH_BREWERIES_DATA_SUCCESS,
  FETCH_BREWERIES_DATA_FAILURE,
} from '../actions';

const initialState = {
  breweries: [],
  isLoading: false,
  error: '',
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_BREWERIES_DATA_START:
      return {
        ...state,
        isLoading: true,
        error: '',
      };
    case FETCH_BREWERIES_DATA_SUCCESS:
      return {
        ...state,
        isLoading: false,
        breweries: action.payload,
        error: '',
      };
    default:
      return state;
  }
};
