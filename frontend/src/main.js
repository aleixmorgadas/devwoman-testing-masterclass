function fetchMatches() {
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
  });  
}

document.getElementById('app').innerHTML = `
  <div>
    <div class="create-match">
      <label for="player1">Player1</label>
      <input type="text" id="player1"/>

      <label for="player2">Player2</label>
      <input type="text" id="player2"/>

      <button id="create-match-button">Create new match</button>
    </div>
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

document.getElementById('create-match-button').addEventListener('click', async () => {
  const player1Name = document.getElementById('player1').value;
  const player2Name = document.getElementById('player2').value;
  
  await fetch(`http://localhost:3000/matches`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify({
      player1: player1Name,
      player2: player2Name
    }),
  });
  location.reload();
});

const renderMatch = (match) => {
  return `<div class="row">
      <div>${match._id}</div>
      <div>${match.player1}</div>
      <div>${match.player2}</div>
      <div><a href="/matches?id=${match._id}">See match</a></div>
    </div>  
    `
};

fetchMatches();