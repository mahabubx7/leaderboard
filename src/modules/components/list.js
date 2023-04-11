const setupList = (parentElement) => {
  const markups = `
  <li>name: 100</li>
  <li>name: 100</li>
  <li>name: 100</li>
  <li>name: 100</li>
  <li>name: 100</li>
  <li>name: 100</li>
  <li>name: 100</li>
  <li>name: 100</li>
  `;

  // return/DOM-update
  parentElement.innerHTML = `${markups}`;
};

export default setupList;
