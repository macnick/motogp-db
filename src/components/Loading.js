import React from 'react';
import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import Header from './Header';

const Loading = () => (
  <div className="loading-wrap">
    <Header />
    <div className="loading">
      <Loader type="ThreeDots" color="#f11" />
    </div>
  </div>
);

export default Loading;
