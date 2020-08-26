import axios from 'axios';
import {
  FETCH_REQUEST,
  FETCH_SUCCESS,
  FETCH_FAILURE,
  BASE_URL,
  ALL_TEAMS,
  TEAM_INFO,
} from './actions';

const fetchRequest = () => ({
  type: FETCH_REQUEST,
});

const fetchSuccess = (data) => ({
  type: FETCH_SUCCESS,
  payload: data,
});

const fetchFailure = (error) => ({
  type: FETCH_FAILURE,
  payload: error,
});

const fetchTeams = () => (dispatch) => {
  dispatch(fetchRequest());
  axios
    .get(`${BASE_URL}${ALL_TEAMS}`)
    .then((response) => {
      dispatch(fetchSuccess(response.data));
    })
    .catch((error) => {
      dispatch(fetchFailure(error.message));
    });
};

const fetchTeamInfo = (id) => (dispatch) => {
  dispatch(fetchRequest());
  axios
    .get(`${BASE_URL}${TEAM_INFO}${id}`)
    .then((response) => {
      dispatch(fetchSuccess(response.data));
    })
    .catch((error) => {
      dispatch(fetchFailure(error.message));
    });
};

export { fetchRequest, fetchSuccess, fetchFailure, fetchTeams, fetchTeamInfo };
