import React from "react";
import { CluesContext } from "../Main";

/*
   AANWIJZINGEN
   ------------
   Lijst hier de kamers, wapens en verdachten op.
*/

// const j = {color: null
//   description: ""
//   id: "1"
//   image: "/sites/default/files/2021-11/dolk.jpg"
//   title: "Dolk"
//   type: "weapon"
//   }

const Clues = () => {
  return (
    <div className="full file">
      <h2>Aanwijzingen</h2>
      <CluesContext.Consumer>
        {(clues) => (
          <div className="clues-list">
            {clues.map((clue) => (
              <div className="Clues-item">
                {clue.title} {clue.description} {clue.type}
              </div>
            ))}
          </div>
        )}
      </CluesContext.Consumer>
    </div>
  );
};

export default Clues;
