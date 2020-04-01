import React from "react";
import "./App.css";
import TeamList from "./components/TeamList";

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
    newPlayer: {
      name: "",
      number: "",
      age: "",
      preferredPosition: ""
    }
  };

  render() {
    return (
      <div className="App">
        <h1>Team Creator App</h1>
        <TeamList players={this.state.players} />
        <h2>Add new player:</h2>
        <form action="" onSubmit={this.submitNewPlayer}>
          <label htmlFor="">
            Player Name
            <input type="text" onChange={this.addNewPlayer} name="name" />
          </label>
          <label htmlFor="">
            Player Number
            <input
              type="number"
              min="1"
              max="11"
              onChange={this.addNewPlayer}
              name="number"
            />
          </label>
          <button>Submit</button>
        </form>
      </div>
    );
  }
  addNewPlayer = event => {
    const { value, name } = event.target;
    this.setState(currentState => {
      const newPlayer = { ...currentState.newPlayer, [name]: value };
      newPlayer.number = Number(newPlayer.number);
      return { newPlayer };
    });
  };

  submitNewPlayer = event => {
    event.preventDefault();
    this.setState(currentState => {
      const updatedPlayers = currentState.players.map(player => {
        if (player.number === currentState.newPlayer.number) {
          player = currentState.newPlayer;
        }
        return player;
      });
      return { players: updatedPlayers };
    });
  };
}

export default App;
