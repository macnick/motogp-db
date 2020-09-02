import React from 'react';
import { Provider } from 'react-redux';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';
import App from '../components/App';
import Header from '../components/Header';
import '@testing-library/jest-dom';

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

  it('should render the App', () => {
    expect(component.toJSON()).toMatchSnapshot();
  });

  it('should render the Header', () => {
    const { getByText } = render(<Header />);
    expect(getByText(/MotoGP Team Info/)).toBeInTheDocument();
  });

  it('should render the selection menu', () => {
    const { getByText } = render(
      <Provider store={store}>
        <App />
      </Provider>
    );
    expect(getByText(/Select Country/)).toBeInTheDocument();
  });
});
