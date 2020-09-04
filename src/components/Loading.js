import React from 'react';
import Loader from 'react-loader-spinner';
// import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
// import Header from './Header';

const Loading = () => (
  <div className="loading-wrap">
    <div className="loading">
      <Loader
        type="ThreeDots"
        color="#f11"
        height={100}
        width={100}
        timeout={2000}
      />
    </div>
  </div>
);

export default Loading;
