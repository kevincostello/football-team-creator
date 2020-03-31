import React from "react";
import logo from "./logo.svg";
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
    console.log("this.state", this.state.newPlayer);
    return (
      <div className="App">
        <h1>Team Creator App</h1>
        <TeamList players={this.state.players} />
        <form action="" onSubmit={this.submitNewPlayer}>
          New Player Form
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
    console.log(name, value);
    // this.setState({ newPlayer: { [name]: value } });
    this.setState(currentState => {
      return { newPlayer: { ...currentState.newPlayer, [name]: value } };
    });
  };

  submitNewPlayer = event => {
    event.preventDefault();
    console.log("newPlayer", this.state.newPlayer);
    console.log("players: ", this.state.players);
    this.setState(currentState => {
      currentState.players.filter(player => {
        console.log(
          "player number:",
          player.number,
          currentState.newPlayer.number
        );
      });
    });
  };
}

export default App;
