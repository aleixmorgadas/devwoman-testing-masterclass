import './style.css'

fetch(`http://localhost:3000/matches`, {
  method: 'GET'
}).then(async response => {
  const matches = await response.json();
  const view = matches
    .map(match => renderMatch(match))
    .reduce((acc, current) => acc + current, '');

  const temp = document.createElement('div');
  temp.innerHTML = view;
  const matchesDiv = document.querySelector('#matches');
  while (temp.firstChild) {
    matchesDiv.appendChild(temp.firstChild);
  }
})

document.querySelector('#app').innerHTML = `
  <div>
    <div id="matches" class="grid">
      <div>ID</div>
      <div>Player 1</div>
      <div>Player 2</div>
    </div>
  </div>
`

const renderMatch = (match) => {
  return `<div>${match._id}</div>
    <div>${match.player1}</div>
    <div>${match.player2}</div>
  `
};