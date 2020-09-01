import React from 'react';
import ReactDOM from 'react-dom';
import { render } from '@testing-library/react';
import App from '../components/App';
import {
  getByLabelText,
  getByText,
  getByTestId,
  queryByTestId,
  waitFor,
  getQueriesForElement,
} from '@testing-library/dom';

// describe('<App />', () => {
//   it('Renders <App /> component correctly', () => {
//     const { getByText } = render(<App />);
//     expect(getByText(/Select Country/i)).toBeInTheDocument();
//   });
// });

test('Renders the correct content', () => {
  const root = document.createElement('div');
  ReactDOM.render(<App />, root);
  const { getByText, getByLabelText } = getQueriesForElement(root);
  expect(getByText('MotoGP')).not.toBeNull();
  // expect(root.querySelector('span').textContent).toBe('MotoGP Team Info');
});
