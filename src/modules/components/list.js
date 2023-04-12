/* eslint-disable no-restricted-syntax */
/* eslint-disable guard-for-in */
/* eslint-disable no-console */
import Store from '../storage';

const render = async (container) => {
  let markups = '';
  await Store.getScores().then((items) => {
    for (const i in items) {
      markups += `<li>${items[i].user}: ${items[i].score}</li>`;
    }
  });

  // return/DOM-update
  // container.innerHTML = `${markups}`;
  setTimeout(() => {
    container.innerHTML = `${markups}`;
  }, 700);
};

const setupList = (parentElement) => render(parentElement);

export default setupList;
