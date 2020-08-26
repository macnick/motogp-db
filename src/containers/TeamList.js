import React from 'react';
import { connect } from 'react-redux';
// import { increment, decrement, reset } from './actionCreators';

const TeamList = ({ type }) => {
  return (
    <div className="container">
      <div className="line">Team one</div>
      <div className="line">Team two</div>
      <div className="line">Team three</div>
      <div className="line">Team four!</div>
    </div>
  );
};

const mapStateToProps = (state /*, ownProps*/) => {
  return {
    counter: state.counter,
  };
};

const mapDispatchToProps = { fetchTeams };

export default connect(mapStateToProps, mapDispatchToProps)(TeamList);
