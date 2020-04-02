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
    ]
  };

  render() {
    console.log(this.state.players);
    return (
      <div className="App">
        <h1>Team Creator App</h1>
        <TeamList players={this.state.players} />
        <PlayerAdder addNewPlayer={this.addNewPlayer} />
      </div>
    );
  }
  addNewPlayer = newPlayer => {
    console.log("newPlayer: ", newPlayer);
    this.setState(currentState => {
      const updatedPlayers = currentState.players.map(player => {
        if (player.number === newPlayer.number) {
          player = currentState.newPlayer;
        }
        return player;
      });
      return { players: updatedPlayers };
    });
  };
}

export default App;
