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
            </>
          );
        }
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Game)
