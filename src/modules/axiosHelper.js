import axios from 'axios';

// eslint-disable-next-line import/no-mutable-exports
let api = axios.create({
  baseURL: 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/',
  headers: {
    Accept: 'application/json',
  },
});

api = axios.create({
  baseURL:
    'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/8o2JY5Wq5QBILFG2Pf76/',
  headers: {
    Accept: 'application/json',
  },
});

export default api;
