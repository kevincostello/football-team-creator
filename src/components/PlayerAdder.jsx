import React, { Component } from "react";

export class PlayerAdder extends Component {
  state = {
    newPlayer: {
      name: "",
      number: "",
      age: "",
      preferredPosition: ""
    }
  };
  render() {
    return (
      <form action="" onSubmit={this.handleSubmit}>
        <h2>Add new player:</h2>
        <label htmlFor="">
          Player Name
          <input
            type="text"
            onChange={this.handleChange}
            name="name"
            value={this.state.newPlayer.name}
          />
        </label>
        <label htmlFor="">
          Player Number
          <input
            type="number"
            min="1"
            max="11"
            onChange={this.handleChange}
            name="number"
            value={this.state.newPlayer.number}
          />
        </label>
        <button>Submit</button>
      </form>
    );
  }

  handleChange = event => {
    const { value, name } = event.target;
    this.setState(currentState => {
      const newPlayer = { ...currentState.newPlayer, [name]: value };
      newPlayer.number = Number(newPlayer.number);
      return { newPlayer };
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.addNewPlayer(this.state.newPlayer);
    this.setState({
      newPlayer: {
        name: "",
        number: "",
        age: "",
        preferredPosition: ""
      }
    });
  };
}

export default PlayerAdder;
