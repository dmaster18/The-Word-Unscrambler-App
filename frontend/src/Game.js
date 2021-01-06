import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import WordContainer from './game-components/WordContainer';
import Word from './game-components/Word';
import Timer from './game-components/Timer';
import {fetchWords, endGame, nextWord } from './actions';

function mapDispatchToProps(dispatch){
  return { fetchWords: (numberOfWords) => dispatch(fetchWords(numberOfWords)),
   endGame: () => dispatch(endGame()),
  }
}

function mapStateToProps(state) {
  return {status: state.gameStatus, score: state.score,
    letterArray: state.wordSet.length > 0 ? state.wordSet[state.wordIndex].letterArray : [],
    allWords: state.wordSet.length > 0 ? state.wordSet[state.wordIndex].allWords : []}
}

class Game extends Component {

 componentDidMount() {
   this.props.fetchWords(this.props.numberOfWords);
 }

 submitToLeaderboard = (event) => {
   event.preventDefault();
   const name = document.getElementById('name').value;
   const score = this.props.score;
   const playerData = { player: { name, score: this.props.score } };
   const playersURL = 'http://127.0.0.1:3000/players';
   return fetch(playersURL, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(playerData) }).then(() => { window.location.href = 'http://localhost:3001/leaderboard'; });
  }

  render() {
    switch (this.props.status) {
      case 'Loading': {
        return 'Loading...'
      }
      case 'Running': {
        return (
          <div id="game">
            <span><u>Time Remaining</u>: </span><Timer numberOfMilliseconds={this.props.gameDuration} onComplete={this.props.endGame}/>
            <WordContainer />
          </div>
        )
        }
        case 'Complete': {
          return (
            <>
              <h1 id='final-score'>Your Final Score is {this.props.score} Points!</h1>
              <form>
                <input type='text' id='name'>Enter Name</input>
                <input type='submit' onClick={this.submitToLeaderboard}>Submit Score</input>
              </form>
            </>
          );
        }
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Game)
