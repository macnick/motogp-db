import React from 'react';
import { connect } from 'react-redux';
import { fetchTeams } from '../actions/async';
import Team from '../components/Team';
import Loading from '../components/Loading';
import { changeFilter } from '../actions';
import { useEffect } from 'react';

const TeamList = ({ teams, changeFilter, fetchTeams, filter, loading }) => {
  useEffect(() => {
    fetchTeams();
  }, [fetchTeams]);

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="container">
      {teams
        .filter((team) =>
          filter === 'All' ? true : team.strCountry === filter
        )
        .map((team) => (
          <Team team={team} key={team.idTeam} />
        ))}
    </div>
  );
};

const mapStateToProps = (state) => ({
  teams: state.teamsList.teams,
  filter: state.filter,
});

const mapDispatchToProps = { fetchTeams };

export default connect(mapStateToProps, mapDispatchToProps)(TeamList);
