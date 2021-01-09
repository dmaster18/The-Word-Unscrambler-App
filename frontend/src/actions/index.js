//Game Functions
function shuffle(letters) {
  return letters.split('').sort(() => Math.random() - 0.5);
}

export function fetchWords(numberOfWords) {
  return (dispatch) => {
    dispatch({type: 'FETCH_WORDS_START' });
    return fetch(`http://127.0.0.1:3000/words/?limit=${numberOfWords}`)
    .then(response => response.json())
    .then(json => dispatch({type: 'FETCH_WORDS_SUCCESS',
    data: json.data.map(word => ({
      name: word.attributes.name,
      letterArray: shuffle(word.attributes.name),
      allWords: word.attributes.all_words.map((word) => word.toLowerCase())
    }))
  }))
  .catch((error) => {console.log(error); dispatch({type: 'FETCH_WORDS_ERROR'})});
};
}

export function deleteWord() {
  return {type: 'DELETE_WORD'}
}

export function deleteLetter() {
  return {type: 'DELETE_LETTER'}
}

export function clickTile(usedTile) {
  return {type: 'ADD_LETTER', usedTile}
}

export function submitWord() {
  return {type: 'SUBMIT_WORD'}
}

export function nextWord() {
  return {type: 'NEXT_WORD'}
}

export function startGame() {
  return {type: 'START_GAME'}
}

export function endGame() {
  return {type: 'END_GAME'}
}

//Trainer Functions
export function fetchTrainerWords() {
  return (dispatch) => {
    dispatch({type: 'FETCH_TRAINER_WORDS_START' });
    return fetch('http://127.0.0.1:3000/word_collections')
    .then(response => response.json())
    .then(json => dispatch({type: 'FETCH_TRAINER_WORDS_SUCCESS',
      data: json.data.map(word_collection => ({
        twoLetterWords: word_collection.attributes.two_letter_word_collection,
        threeLetterWords: word_collection.attributes.three_letter_word_collection,
        fourLetterWords: word_collection.attributes.four_letter_word_collection,
        fiveLetterWords: word_collection.attributes.five_letter_word_collection,
        sixLetterWords: word_collection.attributes.six_letter_word_collection,
        sevenLetterWords: word_collection.attributes.seven_letter_word_collection,
        eightLetterWords: word_collection.attributes.eight_letter_word_collection,
        nineLetterWords: word_collection.attributes.nine_letter_word_collection
      }))
  }))
  .catch((error) => {console.log(error); dispatch({type: 'FETCH_TRAINER_WORDS_ERROR'})});
};
}

//Leaderboard Functions

export function submitToLeaderboard() {
  return (dispatch) => {
    dispatch({type: 'FETCH_LEADERBOARD_START' });
    return fetch(`http://127.0.0.1:3000/players`)
    .then(response => response.json())
    .then(json => dispatch({type: 'FETCH_LEADERBOARD_SUCCESS',
    data: json.data.map(word => ({
      name: document.getElementById('name').value,
      letterArray: shuffle(word.attributes.name),
      allWords: word.attributes.all_words.map((word) => word.toLowerCase())
    }))
  }))
  .catch((error) => {console.log(error); dispatch({type: 'FETCH_WORDS_ERROR'})});
};


  const score = this.props.score;
  const playerData = { player: { name, score: this.props.score } };
  const playersURL = 'http://127.0.0.1:3000/players';
  return fetch(playersURL, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(playerData) }).then(() => { window.location.href = 'http://localhost:3001/leaderboard'; });
 }
