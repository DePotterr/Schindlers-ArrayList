import React from "react";
import { useSettings } from "../context/useSettings";
import Button from "../Button";
import axios from "axios";

const CluedoStart = ({ onStart }) => {
  const { settings } = useSettings();

  const startGame = () => {
    axios
      .get(settings.baseURL + settings.url.new, {
        auth: {
          username: process.env.REACT_APP_USERNAME,
          password: process.env.REACT_APP_PASSWORD,
        },
      })
      .then((data) => {
        onStart(data);
      }).catch(error => {
        console.log(error)
      });
  };

  return (
    <div className={"file full"}>
      <h2>Cluedo</h2>
      <Button onClick={startGame} value="Start een nieuw spel" />
    </div>
  );
};

export default CluedoStart;
