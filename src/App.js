import React from "react";
import "./App.css";
import TeamList from "./components/TeamList";
import PlayerAdder from "./components/PlayerAdder";

class App extends React.Component {
  state = {
    players: [
      { name: "", number: 1 },
      { name: "", number: 2 },
      { name: "", number: 3 },
      { name: "", number: 5 },
      { name: "", number: 6 },
      { name: "", number: 7 },
      { name: "Fred", number: 8, age: 24, preferredPosition: "Midfielder" },
      { name: "", number: 9 },
      {
        name: "Alan Shearer",
        number: 10,
        age: 48,
        preferredPosition: "Forward"
      },
      { name: "", number: 11 }
    ],
    starPlayer: "Fred"
  };

  componentDidMount() {
    console.log("mounted");
    const playersJSON = localStorage.getItem("players");
    const starplayerJSON = localStorage.getItem("starPlayer");
    if (localStorage.players) {
      const players = JSON.parse(playersJSON);
      const starPlayer = JSON.parse(starplayerJSON);
      this.setState({ players, starPlayer });
    }
  }
  render() {
    console.log(this.state.players);
    return (
      <div className="App">
        <h1>Team Creator App</h1>
        <p>Star Player: {this.state.starPlayer}</p>
        <TeamList
          players={this.state.players}
          makeStarPlayer={this.makeStarPlayer}
        />
        <button onClick={this.saveCurrentTeam}>Save current team</button>
        <PlayerAdder addNewPlayer={this.addNewPlayer} />
      </div>
    );
  }

  addNewPlayer = newPlayer => {
    console.log("newPlayer: ", newPlayer);
    this.setState(currentState => {
      const updatedPlayers = currentState.players.map(player => {
        if (player.number === newPlayer.number) {
          player = newPlayer;
        }
        return player;
      });
      return { players: updatedPlayers };
    });
  };

  makeStarPlayer = selectedPlayer => {
    this.setState({ starPlayer: selectedPlayer });
  };

  saveCurrentTeam = event => {
    console.log("saved");
    localStorage.setItem("players", JSON.stringify(this.state.players));
    localStorage.setItem("starPlayer", JSON.stringify(this.state.starPlayer));
  };
}

export default App;
