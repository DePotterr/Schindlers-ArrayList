import React, { useContext } from "react";
import { CluesContext } from "../Main";

const GameOver = ({outcome}) => {

  console.log(outcome)
  const clues = useContext(CluesContext);

  return (
    <div className="full file">
      <h2>GAME OVER</h2>
      <h3>{outcome.message}</h3>
      <h4>Jouw antwoord: </h4>
      <div className="accusation">
        <span>{clues[outcome.accusation.room - 1].title}</span><br/>
        <span>{clues[outcome.accusation.weapon - 1].title}</span><br/>
        <span>{clues[outcome.accusation.suspect - 1].title}</span><br/>
      </div>
      <h4>Juiste antwoord: </h4>
      <div className="solution">
        <span>{clues[outcome.solution.room - 1].title}</span><br/>
        <span>{clues[outcome.solution.weapon - 1].title}</span><br/>
        <span>{clues[outcome.solution.suspect - 1].title}</span>
      </div>
    </div>
  );
};

export default GameOver;
