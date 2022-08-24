import './style.css';
import getAllScores from './modules/api.js';

const ul = document.getElementById('ul');
const refresh = document.getElementById('refresh');

getAllScores();

refresh.addEventListener('click', () => {
  ul.innerHTML = '';
  getAllScores();
});
