import api from './axiosHelper.js';

const ul = document.getElementById('ul');
const submit = document.getElementById('submit');
const nameInput = document.getElementById('scoreName');
const scoreInput = document.getElementById('scoreScore');

const addScore = async (user) => {
  try {
    const newGame = await api.post('scores/', { ...user });
    return newGame.data.result;
  } catch (error) {
    return error;
  }
};

submit.addEventListener('click', (e) => {
  e.preventDefault();
  const user = {
    user: nameInput.value,
    score: scoreInput.value,
  };
  addScore(user);
});

const getAllScores = async () => {
  try {
    const result = await api.get('scores/');
    result.data.result.forEach((user) => {
      const li = document.createElement('li');
      li.classList.add('score');

      const p = document.createElement('p');
      p.classList.add('scoreText');
      p.innerText = `${user.user}: ${user.score}`;

      li.append(p);
      ul.append(li);
    });

    return ul;
  } catch (error) {
    return error;
  }
};

export default getAllScores;
