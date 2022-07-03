import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";
import { setSearchField, requestRobots } from "../actions";

import "./App.css";

class App extends React.Component {
  componentDidMount() {
    this.props.onRequestRobots();
  }

  render() {
    const { robots, searchField, onSearchChange, isPending } = this.props;
    const filteredRobots = () =>
      robots.filter((robot) =>
        robot.name.toLowerCase().includes(searchField.toLowerCase())
      );

    return isPending ? (
      <h1>Loading</h1>
    ) : (
      <div className="tc">
        <h1 className="f1">RoboFriends</h1>
        <SearchBox searchChange={onSearchChange} />
        <Scroll>
          <CardList robots={filteredRobots()} />
        </Scroll>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  searchField: state.searchRobotsReducer.searchField,
  robots: state.requestRobotsReducer.robots,
  isPending: state.requestRobotsReducer.isPending,
  error: state.requestRobotsReducer.error,
});

const mapDispatchToProps = (dispatch) => ({
  onSearchChange: (event) => {
    dispatch(setSearchField(event.currentTarget.value));
  },
  onRequestRobots: () => dispatch(requestRobots()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
