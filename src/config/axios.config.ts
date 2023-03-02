import axios from "axios";

const fetchClient = () => {
  const baseURL = "https://pokeapi.co/api/v2";
  const defaultOptions = {
    baseURL,
    method: "get",
    headers: {
      "Content-Type": "application/json",
    },
  };

  const instance = axios.create(defaultOptions);

  return instance;
};

export default fetchClient();
