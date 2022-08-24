import axios from 'axios';

// eslint-disable-next-line import/no-mutable-exports
let api = axios.create({
  baseURL: 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/',
  headers: {
    Accept: 'application/json',
  },
});

// const params = {
//   name: 'new',
// };

// const game = async () => {
//   try {
//     const respose = await api.post('games/', { ...params });
//     let game = respose.data.result;
//     game = game.split(' ');
//     // eslint-disable-next-line prefer-destructuring
//     game = game[3];
//     return game;
//   } catch (error) {
//     return error;
//   }
// };

// const newGame = game();

api = axios.create({
  baseURL:
    'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/8o2JY5Wq5QBILFG2Pf76/',
  headers: {
    Accept: 'application/json',
  },
});

export default api;
