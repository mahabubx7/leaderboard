/* eslint-disable import/extensions */
import renderApp from './render.js';
import Store from './storage.js';

const setupApp = (element) => {
  renderApp(element); // render first-initial DOM
  // fetch scores if not fetched yet.
  if (!localStorage.getItem('scores')) Store.getScores();
};

export default setupApp;
