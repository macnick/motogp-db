import { CHANGE_FILTER } from '../actions/index';

const filter = (state = 'All', action) => {
  switch (action.type) {
    case CHANGE_FILTER:
      return action.country;
    default:
      return state;
  }
};

export default filter;
