import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

import WordContainer from "./game-components/WordContainer";
import Word from "./game-components/Word";
import Timer from "./game-components/Timer";
import { fetchWords, endGame, nextWord, submitToLeaderboard } from "./actions";

function mapDispatchToProps(dispatch) {
  return {
    fetchWords: (numberOfWords) => dispatch(fetchWords(numberOfWords)),
    endGame: () => dispatch(endGame()),
    submitToLeaderboard: (name, score) =>
      dispatch(submitToLeaderboard(name, score)),
  };
}

function mapStateToProps(state) {
  return {
    status: state.gameStatus,
    score: state.score,
    letterArray:
      state.wordSet.length > 0
        ? state.wordSet[state.wordIndex].letterArray
        : [],
    allWords:
      state.wordSet.length > 0 ? state.wordSet[state.wordIndex].allWords : [],
  };
}

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = { name: "" };
  }

  componentDidMount() {
    this.props.fetchWords(this.props.numberOfWords);
  }

  handleChange = (event) => {
    this.setState({ name: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.submitToLeaderboard(this.state.name, this.props.score);
    console.log(this.state.name, this.props.score);
  };

  render() {
    switch (this.props.status) {
      case "Loading": {
        return "Loading...";
      }
      case "Running": {
        return (
          <div id="game">
            <span>
              <u>Time Remaining</u>:{" "}
            </span>
            <Timer
              numberOfMilliseconds={this.props.gameDuration}
              onComplete={this.props.endGame}
            />
            <WordContainer />
          </div>
        );
      }
      case "Complete": {
        return (
          <>
            <h1 id="final-score">
              Your Final Score is {this.props.score} Points!
            </h1>
            <form>
              <input
                type="text"
                id="name"
                placeholder="Your Name"
                value={this.state.name}
                onChange={this.handleChange}
              />
              <input type="submit" onClick={this.handleSubmit}></input>
            </form>
          </>
        );
      }
      case "Submit Success": {
        return <Redirect to="/leaderboard" />;
      }
      case "Submit Error": {
        return (
          <div>
            Sorry, we failed to submit your score to the leaderboard. Please
            come back later.
          </div>
        );
      }
      default: {
        return (
          <>
            <div>
              Sorry, the Word Unscrambler is having a bad day. Please come back
              later.
            </div>
          </>
        );
      }
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Game);
