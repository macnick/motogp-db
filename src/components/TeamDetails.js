import React, { useEffect } from 'react';
import { fetchTeamInfo } from '../actions/async';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';

const TeamDetails = ({ team, fetchTeamInfo }) => {
  let { id } = useParams();

  useEffect(() => fetchTeamInfo(id), [fetchTeamInfo, id]);

  return (
    <div className="details">
      <div className="badge">
        <img src={team.strTeamBadge} alt="team badge" id="badge" />
      </div>
      <div className="bike">
        <img src={team.strTeamJersey} alt="bike" id="bike" />
      </div>
      <div className="name info">Team Name: {team.strTeam}</div>
      <div className="manager info">Manager: {team.strManager}</div>
      <div className="country info">Home Country: {team.strCountry}</div>
      <div className="year info">Year Founded: {team.intFormedYear}</div>
      <div className="row">
        <div className="description">{team.strDescriptionEN}</div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  team: state.teamsList.team,
});

const mapDispatchToProps = (dispatch) => ({
  fetchTeamInfo: (id) => dispatch(fetchTeamInfo(id)),
});

TeamDetails.propTypes = {
  team: PropTypes.shape({
    strTeam: PropTypes.string.isRequired,
    strManager: PropTypes.string.isRequired,
    strCountry: PropTypes.string.isRequired,
    intFormedYear: PropTypes.string,
    strTeamBadge: PropTypes.string,
    strTeamJersey: PropTypes.string,
    strtrDescriptionEN: PropTypes.string,
  }),
  fetchTeamInfo: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(TeamDetails);
