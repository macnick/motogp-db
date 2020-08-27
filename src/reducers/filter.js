import { CHANGE_FILTER } from '../actions/index';

const filter = (state = 'All', action) => {
  switch (action.type) {
    case CHANGE_FILTER:
      console.log(action);
      return action.country;
    default:
      return state;
  }
};

export default filter;
