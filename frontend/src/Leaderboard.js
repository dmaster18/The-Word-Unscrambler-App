import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPlayers } from './actions';



function mapStateToProps(state) {
  return {boardStatus: state.boardStatus, players: state.players}
}

function mapDispatchToProps(dispatch){
  return { fetchPlayers: () => dispatch(fetchPlayers()) }
}

class Leaderboard extends Component {
  componentDidMount() {
    this.props.fetchPlayers()
  }

  renderLeaderboardData(){
    const sortedPlayerData = this.props.players.sort(function (a, b) { return b.score - a.score });
    const leaderboardData = sortedPlayerData.map((player, index) => <tr><td>{index+1}.</td>
    <td>{player.name}</td> <td>{player.score} Points</td></tr>);
    return (
    <table id='leaderboard'>
      <tr><th>Rank</th><th>Name</th><th>Score</th></tr>
        {leaderboardData}
    </table>)
  }



  render() {
    switch(this.props.boardStatus) {
      case 'Success':
        {
          return this.renderLeaderboardData();
        }
      case 'Error':
        {
          if (this.props.players.length > 0) {
            return (<>
                {this.renderLeaderboardData()}
                <div>Sorry. We had an error updating the leaderboard.</div>
              </>)
          } else {
            return <div>Sorry. We had an error loading the leaderboard.</div>;
          }
        }
      case 'Loading':
      default:
        {
          return <div>Loading...</div>
        }
    }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Leaderboard)


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
