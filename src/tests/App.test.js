import React from 'react';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';
import App from '../components/App';
import '@testing-library/jest-dom';
// import { render, fireEvent } from '@testing-library/react';
// import { render, fireEvent } from '@testing-library/user-event';
import {
  getByLabelText,
  getByText,
  getByTestId,
  queryByTestId,
  queryByText,
  waitFor,
  getQueriesForElement,
} from '@testing-library/dom';
// import { changeFilter, CHANGE_FILTER } from '../actions/index';
// import { handleFilter } from '../components/CountryFilter';

const mockStore = configureStore([]);

describe('Renders my Redux connected component', () => {
  let store;
  let component;

  beforeEach(() => {
    store = mockStore({
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
    });

    store.dispatch = jest.fn();

    component = renderer.create(
      <Provider store={store}>
        <App />
      </Provider>
    );
  });

  it('should render with given state from Redux store', () => {
    expect(component.toJSON()).toMatchSnapshot();
  });

  it('should render the logo', () => {
    // expect(component.toJSON().match(/MotoGP/)).toBe(true);
    expect(component.root.querySelector('span').textContent).toBe(
      'MotoGP Team Info'
    );
  });

  // it('should dispatch an action on country select', () => {
  //   renderer.act(() => {
  //     component.root.findByType('select').props.onChange();
  //   });

  //   expect(store.dispatch).toHaveBeenCalledTimes(2);
  //   expect(store.dispatch).toHaveBeenCalledWith(
  //     changeFilter({ country: 'Italy', type: CHANGE_FILTER })
  //   );
  // });
});
