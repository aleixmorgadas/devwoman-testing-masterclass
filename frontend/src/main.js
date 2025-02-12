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
    <div id="matches" class="matches">
      <div class="row header">
        <div>ID</div>
        <div>Player 1</div>
        <div>Player 2</div>
        <div>Actions</div>
      </div>
    </div>
  </div>
`

const renderMatch = (match) => {
  return `<div class="row">
      <div>${match._id}</div>
      <div>${match.player1}</div>
      <div>${match.player2}</div>
      <div><a href="/matches?id=${match._id}">See match</a></div>
    </div>  
    `
};