import React from "react";

export default function PlayerCard(props) {
  console.log("props:", props);
  return (
    <div>
      <h3>Player name: {props.player.name}</h3>
      <h3>Player number: {props.player.number}</h3>
    </div>
  );
}
