const initialState = {/*Game Variables*/score: 0, wordIndex: 0, wordSet: [],
gameStatus: 'Loading', usedTiles: [], correctWords: [], incorrectWords: [],
submittedWords: [], userWarning: null, /*Trainer Variables*/ trainerWords: [],
trainerStatus: 'Loading', /*Leaderboard Variables*/ players: [], boardStatus: undefined}

export default function reducer(state=initialState, action) {
  switch(action.type) {
    //Game Cases
    case 'FETCH_WORDS_START':
      return initialState
    case 'FETCH_WORDS_SUCCESS':
      return {...state, wordSet: action.data, gameStatus: 'Running'}
    case 'FETCH_WORDS_ERROR':
      return {...state, wordSet: [], gameStatus: 'Error'}
    case 'DELETE_WORD':
      return {...state, usedTiles: [], userWarning: null}
    case  'DELETE_LETTER':
      const usedTiles = [...state.usedTiles]
      usedTiles.pop()
      return {...state, usedTiles, userWarning: null}
    case 'ADD_LETTER':
      if (state.usedTiles.find((tile) => (tile.id === action.usedTile.id))) {
        return {
          ...state,
          userWarning: "Can't use same tile twice. Please choose another."
        }
      } else {
        return {
          ...state,
          usedTiles: [...state.usedTiles, action.usedTile],
          userWarning: null
        }
      }
    case 'SUBMIT_WORD':
      const lettersUsed = state.usedTiles.map(usedTile => usedTile.letter);
      const wordFormed = lettersUsed.join('');
      if (state.wordSet[state.wordIndex].allWords.includes(wordFormed.toLowerCase()) && !state.correctWords.includes(wordFormed)){
        return {
          ...state,
          submittedWords: [...state.submittedWords, wordFormed],
          correctWords: [...state.correctWords, wordFormed],
          score: (state.score += wordFormed.length),
          usedTiles: [],
        }
       } else if (state.correctWords.includes(wordFormed)) {
          return {...state, userWarning: "Can't submit same word twice.", usedTiles: []}
       } else {
          return {...state, submittedWords: [...state.submittedWords, wordFormed],
          incorrectWords: [...state.incorrectWords, wordFormed], usedTiles: []
        }
      }
    case 'NEXT_WORD':
      if (state.wordIndex === (state.wordSet.length - 1)){
        return {...state, gameStatus: 'Complete', usedTiles: []}
      } else {
        return {...state, wordIndex: (state.wordIndex +=1), usedTiles: []}
      }
    case 'START_GAME':
      return {...state, gameStatus: 'Running'}
    case 'END_GAME':
      return {...state, gameStatus: 'Complete'}
    //Trainer Cases
    case 'FETCH_TRAINER_WORDS_START':
      return initialState
    case 'FETCH_TRAINER_WORDS_SUCCESS':
      return {...state, trainerWords: action.data, trainerStatus: 'Running'}
    case 'FETCH_TRAINER_WORDS_ERROR':
      return {...state, trainerWords: [], trainerStatus: 'Error'}
    //Leaderboard Cases
    case 'FETCH_PLAYERS_START':
      return {...state, boardStatus: 'Loading'}
    case 'FETCH_PLAYERS_SUCCESS':
      return {...state, players: action.data, boardStatus: 'Success'}
    case 'FETCH_PLAYERS_ERROR':
      return {...state, boardStatus: 'Error'}
    case 'SUBMIT_PLAYER_START':
      return initialState
    case 'SUBMIT_PLAYER_SUCCESS':
      return {...state, players: [...state.players, action.player], gameStatus: 'Submit Success' }
    case 'SUBMIT_PLAYER_ERROR':
      return {...state, players: [], gameStatus: 'Submit Error'}
    default:
      return state;
  }
}
