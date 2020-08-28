import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { fetchTeams } from '../actions/async';
import Team from '../components/Team';
import Loading from '../components/Loading';
import { changeFilter } from '../actions';
import CountryFilter from '../components/CountryFilter';

import TeamDetails from '../components/TeamDetails';

const TeamList = ({ teams, changeFilter, fetchTeams, filter, loading }) => {
  useEffect(() => {
    fetchTeams();
  }, [fetchTeams]);

  if (loading) {
    return <Loading />;
  }

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <CountryFilter onFilter={(filter) => changeFilter(filter)} />
          <div className="container">
            {teams
              .filter((team) =>
                filter === 'All' ? true : team.strCountry === filter
              )
              .map((team) => (
                <Link key={team.idTeam} to={`/team/${team.idTeam}`}>
                  <Team team={team} key={team.idTeam} />
                </Link>
              ))}
          </div>
        </Route>
        <Route path="/team/:id">
          <TeamDetails />
        </Route>
      </Switch>
    </Router>
  );
};

const mapStateToProps = (state) => ({
  teams: state.teamsList.teams,
  filter: state.filter,
});

const mapDispatchToProps = (dispatch) => ({
  fetchTeams: () => dispatch(fetchTeams()),
  changeFilter: (filter) => dispatch(changeFilter(filter)),
});

TeamList.propTypes = {
  teams: PropTypes.arrayOf(
    PropTypes.shape({
      idTeam: PropTypes.string.isRequired,
      strTeam: PropTypes.string.isRequired,
      strCountry: PropTypes.string.isRequired,
      strTeamBadge: PropTypes.string.isRequired,
    })
  ).isRequired,
  filter: PropTypes.string.isRequired,
  changeFilter: PropTypes.func.isRequired,
  fetchTeams: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(TeamList);
