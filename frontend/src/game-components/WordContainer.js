import React, { Component } from 'react';
import Word from './Word.js'
import { connect } from 'react-redux'
import { clickTile, deleteLetter, deleteWord, nextWord, submitWord } from '../actions'

function mapDispatchToProps(dispatch){
  return {
    clickTile: (tile) => dispatch(clickTile(tile)),
    deleteLetter: () => dispatch(deleteLetter()),
    deleteWord: () => dispatch(deleteWord()),
    submitWord: () => dispatch(submitWord()),
    getNextWord: () => dispatch(nextWord()),
  }
}

function mapStateToProps(state) {
  return {
    letterArray: state.wordSet[state.wordIndex].letterArray,
    correctWords: state.correctWords,
    incorrectWords: state.incorrectWords,
    submittedWords: state.submittedWords,
    score: state.score,
    warning: state.userWarning,
    wordFormed: state.usedTiles.map(tile => tile.letter).join(''),
    numberOfWords: state.wordSet.length,
  };
}

class WordContainer extends Component {

  handleTileClick = (event) => {
    this.props.clickTile({letter: event.target.value, id: event.target.id})
  }

  render() {
    return (
      <Word
        letterArray={this.props.letterArray}
        correctWords={this.props.correctWords}
        incorrectWords={this.props.incorrectWords}
        submittedWords={this.props.submittedWords}
        score={this.props.score}
        warning={this.props.warning}
        onTileClick={this.handleTileClick}
        onDeleteLetter={this.props.deleteLetter}
        onDeleteWord={this.props.deleteWord}
        onSubmit={this.props.submitWord}
        wordFormed={this.props.wordFormed}
        onGetNextWord={this.props.numberOfWords > 1 ? this.props.getNextWord : undefined}
      />
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(WordContainer)
