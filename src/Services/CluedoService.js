import axios from "axios";

const api = process.env.REACT_APP_BASE_URL;

export const getClues = () => {
  axios
    .get(process.env.REACT_APP_BASE_URL + process.env.REACT_APP_URL_CLUES, {
      auth: {
        username: process.env.REACT_APP_USERNAME,
        password: process.env.REACT_APP_PASSWORD,
      },
    })
    .then((response) => {
      return response;
    })
    .catch((error) => console.log(error));
};
