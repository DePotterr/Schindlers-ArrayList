import React, { useContext } from "react";
import { CluesContext } from "../Main";
import { useSettings } from "../context/useSettings";
import axios from "axios";
import Button from "../Button";

export const MakeSuggestionForm = ({
  gameKey,
  selectedRoom,
  addSuggestion,
  onSuggestion,
}) => {
  const { settings } = useSettings();

  const clues = useContext(CluesContext);

  const formSubmit = (event) => {
    event.preventDefault();
    const weapon = event.target.weapon.value;
    const suspect = event.target.suspect.value;
    const room = event.target.selectedRoom.value;
    const weaponName = clues[weapon - 1].title;
    const suspectName = clues[suspect - 1].title;
    const roomName = clues[room - 1].title;
    addSuggestion({ roomName, weaponName, suspectName });
    axios
      .post(
        settings.baseURL + settings.url.suggest + "?key=" + gameKey,
        { room: room, weapon: weapon, suspect: suspect },
        {
          auth: {
            username: process.env.REACT_APP_USERNAME,
            password: process.env.REACT_APP_PASSWORD,
          },
        }
      )
      .then((data) => {
        onSuggestion();
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <h2>Maak een suggestie</h2>
      <form onSubmit={(event) => formSubmit(event)}>
        <label>Choose your weapon</label>
        <select name="weapon">
          {clues.map((clue) => {
            if (clue.type === "weapon") {
              return <option value={clue.id}>{clue.title}</option>;
            }
          })}
        </select>
        <label>Choose your suspect</label>
        <select name="suspect">
          {clues.map((clue) => {
            if (clue.type === "suspect") {
              return <option value={clue.id}>{clue.title}</option>;
            }
          })}
        </select>
        <label>{selectedRoom.title}</label>
        <img
          src={process.env.REACT_APP_BASE_URL + selectedRoom.image}
          alt={selectedRoom.title}
        />
        <input
          name="selectedRoom"
          type="hidden"
          value={selectedRoom.id}
        ></input>
        <Button type="submit" value="Maak suggestie!" />
      </form>
    </>
  );
};
