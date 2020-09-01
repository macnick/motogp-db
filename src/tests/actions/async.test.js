import * as actions from '../../actions/async';
import * as types from '../../actions/actions';
import { changeFilter } from '../../actions/index';
// import {
//   FETCH_REQUEST,
//   FETCH_SUCCESS,
//   FETCH_FAILURE,
//   BASE_URL,
//   ALL_TEAMS,
//   TEAM_INFO,
//   GET_TEAM_SUCCESS,
// } from '../../actions';

describe('Testing filter action', () => {
  it('Should change the filter', () => {
    const text = 'Italy';
    const expectedAction = {
      type: types.CHANGE_FILTER,
      country: text,
    };
    expect(changeFilter(text)).toEqual(expectedAction);
  });
});

describe('Testing fetch request', () => {
  it('Should initiate a fetch', () => {
    const expectedAction = {
      type: types.FETCH_REQUEST,
      loading: true,
    };
    expect(actions.fetchRequest()).toEqual(expectedAction);
  });
});
