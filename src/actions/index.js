import { CHANGE_FILTER } from './actions';

const changeFilter = country => ({
  type: CHANGE_FILTER,
  country,
});

export { changeFilter, CHANGE_FILTER };
