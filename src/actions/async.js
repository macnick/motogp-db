import axios from 'axios';
import { baseURL } from './actions';

const getTeams = () => {
  axios.get(baseURL + 'lookup_all_teams.php?id=4407');
};
