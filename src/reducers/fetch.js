const FETCH_REQUEST = 'FETCH_REQUEST';
const FETCH_SUCCESS = 'FETCH_SUCCESS';
const FETCH_FAILURE = 'FETCH_FAILURE';

const initialState = {
  loading: false,
  teams: [],
  error: '',
};

const fetchReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_SUCCESS:
      return {
        ...state,
        loading: false,
        teams: action.payload.teams,
        error: '',
      };
    case FETCH_FAILURE:
      return {
        loading: false,
        teams: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

export default fetchReducer;