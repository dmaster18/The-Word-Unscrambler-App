import React, { Component } from 'react';


function mapStateToProps(state) {
  return {boardStatus: state.boardStatus, players: state.players}
}

function mapDispatchToProps(dispatch){
  return { fetchPlayers: () => dispatch(fetchPlayers())
  }
}

class Leaderboard extends Component {
  /*constructor(props) {
    super(props)
    this.state = {
      playerData: []
    }
  }*/

  /*fetchPlayers () {
    const playersURL = 'http://127.0.0.1:3000/players';
    const playerData = fetch(playersURL).then(resp => resp.json());
    return playerData;
  }*/

  renderLeaderboardData() {
    const sortedPlayerData = this.props.playerPlayers.sort(function (a, b) { return b.score - a.score });
    const leaderboardData = sortedPlayerData.map((player, index) => <tr><td>{index+1}</td><td>{player.name}.</td> <td>{player.score} Points</td></tr>);
    return leaderboardData;
  }

  render () {
    return (
      <div>
        <table id='leaderboard'>
          <tr><th>Rank</th><th>Name</th><th>Score</th></tr>
          {this.renderLeaderboardData()}
        </table>
      </div>
    )
  }

}


export default connect(mapStateToProps, mapDispatchToProps)(Leaderboard)
