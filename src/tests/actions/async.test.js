import {
  fetchRequest,
  fetchSuccess,
  fetchFailure,
  fetchTeams,
  fetchTeamInfo,
} from '../../actions/async';
import * as types from '../../actions/actions';

describe('Testing fetch request', () => {
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

  const success = fetchRequest(data);

  it('should initiate a fetch request', () => {
    const expectedAction = {
      type: types.FETCH_REQUEST,
      loading: true,
    };
    expect(fetchRequest()).toEqual(expectedAction);
  });

  it('should return fetch success', () => {
    const expectedAction = {
      type: types.FETCH_SUCCESS,
      payload: data,
    };
    expect(fetchSuccess(data)).toEqual(expectedAction);
  });
});
