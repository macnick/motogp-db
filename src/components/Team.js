import React from 'react';
import PropTypes from 'prop-types';

const Team = (team) => (
  <div className="line">
    <div>
      <div id="idTeam">{team.idTeam}</div>
      <div id="name">{team.strTeam}</div>
      <div id="manager">{team.strManager}</div>
    </div>
  </div>
);

Team.propTypes = {
  team: PropTypes.shape({
    idTeam: PropTypes.string.isRequired,
    strTeam: PropTypes.string.isRequired,
    strManager: PropTypes.string.isRequired,
  }).isRequired,
};

export default Team;