import React, {useContext} from "react";
import { useSettings } from "../context/useSettings";
import axios from "axios";
import { CluesContext } from "../Main";
import Button from "../Button";

export const MakeArrestForm = ({ gameKey, onArrest }) => {
  const { settings } = useSettings();

  const clues = useContext(CluesContext);

  const formSubmit = (event) => {
    event.preventDefault();
    const weapon = event.target.weapon.value;
    const suspect = event.target.suspect.value;
    const room = event.target.room.value;
    axios
      .post(
        settings.baseURL + settings.url.accuse + "?key=" + gameKey,
        { room: room, weapon: weapon, suspect: suspect },
        {
          auth: {
            username: process.env.REACT_APP_USERNAME,
            password: process.env.REACT_APP_PASSWORD,
          },
        }
      )
      .then((data) => {
        onArrest(data.data);
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <h2>Maak een arrestatie</h2>
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
        <label>Choose room</label>
        <select name="room">
          {clues.map((clue) => {
            if (clue.type === "room") {
              return <option value={clue.id}>{clue.title}</option>;
            }
          })}
        </select>
        <Button type="submit" value="Arresteer!" />
      </form>
    </>
  );
};
