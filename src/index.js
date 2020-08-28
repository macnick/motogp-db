import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import store from './reducers/store';
import { Provider } from 'react-redux';
import './assets/styles/reset.css';
import './assets/styles/main.css';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
