import React, { useContext } from "react";
import { CluesContext } from "../Main";

/*
   HET HUIS
   --------
   Bouw het huis en gebruik onSelectRoom bij klikken op een kamer.
*/

export const Mansion = ({ onSelectRoom }) => {

  const clues = useContext(CluesContext);

  return (
    <div className="full file">
      <div className="clues-list">
        {clues.map((clue) => {
          if (clue.type == "room") {
            return <div className="clues-item">
              <div>
                <span>{clue.title}</span>
              </div>
              <img
                onClick={() => onSelectRoom(clue)}
                src={process.env.REACT_APP_BASE_URL + clue.image}
                alt={clue.title}
                style={{cursor: "pointer"}}
              />
            </div>
          }

        })}
      </div>
    </div>
  );
};