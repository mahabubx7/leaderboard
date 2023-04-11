import { setupForm, setupList } from './components';

function renderApp(appContainer) {
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
  setupList(appContainer.querySelector('#list'));
}

export default renderApp;
