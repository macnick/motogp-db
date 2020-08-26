import axios from 'axios';
import { BASE_URL, ALL_TEAMS, TEAM_INFO } from './actions';

const getTeams = () => {
  axios.get(`${BASE_URL}${ALL_TEAMS}`);
};

const getTeam = (id) => {
  axios.get(`${BASE_URL}${TEAM_INFO}${id}`);
};

export { getTeams, getTeam };
