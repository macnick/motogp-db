import React from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';

const TeamDetails = ({ teams }) => {
  let { id } = useParams();
  console.log('id:', id, 'teams:', teams);
  let detail = teams.filter((t) => id === t.idTeam);
  console.log('Detail:', detail[0]);

  return (
    <div className="details">
      <div className="badge">
        <img src={detail[0].strTeamBadge} alt="team badge" />
      </div>
      <div className="name">{detail.strTeam}</div>
      <div className="manager">{detail.strManager}</div>
      <div className="country">{detail.strCountry}</div>
      <div className="year">{detail.intFormedYear}</div>
      <div className="description">{detail.strDescriptionEN}</div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  teams: state.teamsList.teams,
});

export default connect(mapStateToProps, null)(TeamDetails);
// export default TeamDetails;
