import React, { useContext } from "react";
import { CluesContext } from "../Main";
import "./Clues.css";

const Clues = () => {
  const clues = useContext(CluesContext);

  return (
    <div className="full file">
      <h2>Aanwijzingen</h2>
      <div className="clues-list">
        {clues.map((clue) => (
          <div className="clues-item">
            <div>
              <span>{clue.title}</span>
              <span>{clue.type}</span>
            </div>
            <img
              src={process.env.REACT_APP_BASE_URL + clue.image}
              alt={clue.title}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Clues;
