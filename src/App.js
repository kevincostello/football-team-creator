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
        <form action="">
          New Player Form
          <label htmlFor="">
            Player Name
            <input type="text" onChange={this.addNewPlayer} />
          </label>
          <label htmlFor="">
            Player Number
            <input type="number" />
          </label>
          <button>Submit</button>
        </form>
      </div>
    );
  }
  addNewPlayer = event => {
    const { value } = event.target;
    console.log(value);
    this.setState({ newPlayer: { name: value } });
  };
}

export default App;
