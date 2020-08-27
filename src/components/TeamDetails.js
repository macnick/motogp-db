import React, { useEffect } from 'react';
import { fetchTeamInfo } from '../actions/async';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';

const TeamDetails = ({ team, fetchTeamInfo }) => {
  let { id } = useParams();

  useEffect(() => fetchTeamInfo(id), [id]);

  return (
    <div className="details">
      <div className="badge">
        <img src={team.strTeamBadge} alt="team badge" />
      </div>
      <div className="name">{team.strTeam}</div>
      <div className="manager">{team.strManager}</div>
      <div className="country">{team.strCountry}</div>
      <div className="year">{team.intFormedYear}</div>
      <div className="description">{team.strDescriptionEN}</div>
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
    intFormedYear: PropTypes.string.isRequired,
    strTeam: PropTypes.string.isRequired,
    strtrDescriptionEN: PropTypes.string.isRequired,
  }),
  fetchTeamInfo: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(TeamDetails);
