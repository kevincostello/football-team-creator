import React from "react";
import PlayerCard from "./PlayerCard";

export default function TeamList(props) {
  return (
    <div>
      <h2>Current team</h2>
      <ul>
        {props.players.map(player => {
          return (
            <li key={player.number}>
              {" "}
              <PlayerCard player={player} />{" "}
              <button
                onClick={() => {
                  props.makeStarPlayer(player.name);
                }}
              >
                Make me Star player of the week
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
