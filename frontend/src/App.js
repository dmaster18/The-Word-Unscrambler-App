import logo from './logo.svg';
import './App.css';
import Game from './Game.js'
import Trainer from './Trainer.js'
import Leaderboard from './Leaderboard.js'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="the-word-unscrambler">
      </header>
      <Router>
        <div>
        <Switch>
          <Route exact path="/">
              <nav className="navigation">
                <h1 className="app-title">The Word Unscrambler</h1>
                <Link to="/quick-game">Quick Game</Link>
                <Link to="/medium-game">Medium Game</Link>
                <Link to="/long-game">Long Game</Link>
                <Link to="/trainer">Word Trainer</Link>
                <Link to="/leaderboard">Leaderboard</Link>
              </nav>
          </Route>
          <Route exact path="/quick-game">
            <Game numberOfWords={1} gameDuration={1*60*1000}/>
            <nav>
              <Link to="/">Home Page</Link>
            </nav>
          </Route>
          <Route exact path="/medium-game">
            <Game numberOfWords={5} gameDuration={3*60*1000}/>
            <nav>
              <Link to="/">Home Page</Link>
            </nav>
          </Route>
          <Route exact path="/long-game">
            <Game numberOfWords={10} gameDuration={5*60*1000}/>
            <nav>
              <Link to="/">Home Page</Link>
            </nav>
          </Route>
          <Route exact path="/trainer">
            <Trainer/>
            <nav>
              <Link to="/">Home Page</Link>
            </nav>
          </Route>
          <Route exact path="/leaderboard">
            <Leaderboard/>
            <nav>
              <Link to="/">Home Page</Link>
            </nav>
          </Route>
       </Switch>
       <br></br>
      </div>
    </Router>
    </div>
  );
}

export default App;
