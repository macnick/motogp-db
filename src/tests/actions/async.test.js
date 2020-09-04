import { fetchRequest, fetchSuccess, fetchFailure } from '../../actions/async';
import * as types from '../../actions/actions';

describe('Testing actions', () => {
  const data = {
    teamsList: {
      loading: false,
      teams: [
        {
          idTeam: '137292',
          strTeamBadge:
            'https://www.thesportsdb.com/images/media/team/badge/qvsw871531399264.png',
          strTeam: 'Repsol Honda',
          strCountry: 'Japan',
        },
      ],
      team: {
        strTeam: '',
      },
    },
    filter: 'All',
  };

  const error = 'Error fetching data.';

  it('should initiate a fetch request', () => {
    const expectedAction = {
      type: types.FETCH_REQUEST,
      loading: true,
    };
    expect(fetchRequest()).toEqual(expectedAction);
  });

  it('should return data after fetch success', () => {
    const expectedAction = {
      type: types.FETCH_SUCCESS,
      payload: data,
    };
    expect(fetchSuccess(data)).toEqual(expectedAction);
  });

  it('should return an error in case of failure to fetch data', () => {
    const expectedAction = {
      type: types.FETCH_FAILURE,
      payload: error,
    };
    expect(fetchFailure(error)).toEqual(expectedAction);
  });
});
