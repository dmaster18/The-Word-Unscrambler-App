import React from 'react';

const WordList = ({ title, words }) => (
  <>
    <span>{title}</span>
    <ol className="guessed-words">
      {words.map(word => <li key={word}>{word}</li>)}
    </ol>
  </>
);

export default WordList;
