import axios from "axios";

const signup = (username, password) => {
  return axios
    .post("https://berlin-craft.herokuapp.com/api/auth/signup", {
      username,
      password,
    })
    .then((response) => {
      return response.data;
    })
    .catch((err) => {
      return err.response.data;
    });
};

const login = (username, password) => {
  return axios
    .post("https://berlin-craft.herokuapp.com/api/auth/login", {
      username,
      password,
    })
    .then((response) => {
      return response.data;
    })
    .catch((err) => {
      return err.response.data;
    });
};

const logout = () => {
  return axios
    .delete("https://berlin-craft.herokuapp.com/api/auth/logout")
    .then((response) => {
      return response.data;
    })
    .catch((err) => {
      return err.response.data;
    });
};

export { signup, login, logout };
