const setupForm = (parentElement) => {
  const markups = `
  <h4>add your score</h4>
  <input name="name" placeholder="Your name" />
  <input name="score" placeholder="Your score" />
  <button id="submit" type="submit">submit</button>
  `;

  // return/DOM-update
  parentElement.innerHTML = `${markups}`;
};

export default setupForm;
