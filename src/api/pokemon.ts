import axios from "../config/axios.config";

export default class AuthAPI {
  static getPokemon(name: string) {
    return axios.get(`/pokemon/${name}`);
  }
}
