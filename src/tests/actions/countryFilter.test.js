import * as types from '../../actions/actions';
import { changeFilter } from '../../actions/index';

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
