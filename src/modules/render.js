import { setupForm, setupList } from './components';

const renderApp = async (appContainer) => {
  const markups = `
    <div class="container">
      <h1>leaderboard</h1>

      <div class="content-area">
        <div id="board">
          <div class="board-top">
            <h4>recent scores</h4>
            <button id="refresh">refresh</button>
          </div>

          <ul id="list"></ul>
        </div>

        <form id="form"></form>
      </div>
    </div>
  `;
  appContainer.innerHTML = `${markups}`;

  // setup components
  setupForm(appContainer.querySelector('#form'));
  const listContainer = appContainer.querySelector('#list');
  await setupList(listContainer);

  // refresh button
  appContainer.querySelector('#refresh').addEventListener('click', async () => {
    listContainer.innerHTML = 'Loading ...';
    await setupList(listContainer);
  });
};

export default renderApp;
