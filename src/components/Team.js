import React from 'react';
import PropTypes from 'prop-types';
import TeamDetails from './TeamDetails';
import { Link } from 'react-router-dom';

const viewDetails = (id) => {
  alert(id);
  return <TeamDetails team={id} />;
};

const Team = ({ team }) => (
  <div className="line" id={team.idTeam}>
    <div>
      <div className="name">{team.strTeam}</div>
      <div className="manager">{team.strManager}</div>
    </div>
    <div>
      <Link to={`/team/${team.idTeam}`}></Link>
    </div>
    <div>
      <button type="button" onClick={() => viewDetails(team.idTeam)}>
        View Team Details
      </button>
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
