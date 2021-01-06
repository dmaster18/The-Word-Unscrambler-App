import React, { Component } from 'react';

export default class Leaderboard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      playerData: []
    }
  }

  fetchPlayers () {
    const playersURL = 'http://127.0.0.1:3000/players';
    const playerData = fetch(playersURL).then(resp => resp.json());
    return playerData;
  }

  renderLeaderboardData() {
    const sortedPlayerData = this.state.playerData.sort(function (a, b) { return b.attributes.score - a.attributes.score });
    const leaderboardData = sortedPlayerData.map((player, index) => <tr><td>{index+1}</td><td>{player.attributes.name}</td> <td>{player.attributes.score} Points</td></tr>);
    return leaderboardData;
  }

  componentDidMount() {
    this.fetchPlayers().then(json => {
    this.setState(
      {playerData: json.data,
      }
    )})
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
