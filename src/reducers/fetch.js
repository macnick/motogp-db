import {
  FETCH_REQUEST,
  FETCH_SUCCESS,
  GET_TEAM_SUCCESS,
  FETCH_FAILURE,
} from '../actions/actions';

const initialState = {
  loading: false,
  teams: [],
  team: {},
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
        team: {},
        error: '',
      };
    case FETCH_FAILURE:
      return {
        loading: false,
        teams: [],
        error: action.payload,
      };
    case GET_TEAM_SUCCESS:
      return {
        ...state,
        loading: false,
        team: action.payload.teams[0],
        error: '',
      };
    default:
      return state;
  }
};

export default fetchReducer;
