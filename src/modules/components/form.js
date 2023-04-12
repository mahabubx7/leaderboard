/* eslint-disable import/extensions */
import Store from '../storage';

const setupForm = (parentElement) => {
  const markups = `
  <h4>add your score</h4>
  <input name="name" placeholder="Your name" autocomplete="off" />
  <input name="score" placeholder="Your score" autocomplete="off" />
  <button id="submit" type="submit">submit</button>
  `;

  // return/DOM-update
  parentElement.innerHTML = `${markups}`;

  // setup-necessary-functionalities
  const name = parentElement.querySelector('input[name="name"]');
  const score = parentElement.querySelector('input[name="score"]');
  const submitBtn = parentElement.querySelector('#submit');
  submitBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const item = { user: name.value, score: Number(score.value) };
    Store.addScore(item); // create
    // reset fields
    name.value = '';
    score.value = '';
  });
};

export default setupForm;
