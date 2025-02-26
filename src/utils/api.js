import axios from "axios";

export const totalApi = axios.create({
  baseURL: "https://covid-19-statistics.p.rapidapi.com/reports",
  headers: {
    "x-rapidapi-key": "12c2022078msh338fda3b256abf8p1a0608jsn879dddf1a854",
    "x-rapidapi-host": "covid-19-statistics.p.rapidapi.com",
  },
});

export const detailApi = axios.create({
  baseURL: "https://covid-193.p.rapidapi.com",
  headers: {
    "x-rapidapi-key": "12c2022078msh338fda3b256abf8p1a0608jsn879dddf1a854",
    "x-rapidapi-host": "covid-193.p.rapidapi.com",
  },
});
