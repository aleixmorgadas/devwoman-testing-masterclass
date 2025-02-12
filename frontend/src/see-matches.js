function score(id, player) {
  return async () => {
    const response = await fetch(`http://localhost:3000/matches/${id}/scores/${player}`, {
      method: 'PATCH'
    });
    const match = await response.json();
    document.getElementById('score').innerHTML = match.score.result;
  }
}

async function loadMatch() {
  const params = new URLSearchParams(window.location.search);
  const id = params.get('id');
  
  const response = await fetch(`http://localhost:3000/matches/${id}`, {
    method: 'GET'
  });
  const match = await response.json();

  document.querySelector('#app').innerHTML = `
  <div>
    <div class="match-info">
      <div class="player-info"><b>Player 1:</b> ${match.player1}</div>
      <div class="player-info"><b>Player 2:</b> ${match.player2}</div>
    </div>
    <div class="match-score">
      <div><button id="scoring-player1">Score's player 1</button></div>
      <div class="score" id="score">${match?.score?.result || 'To start'}</div>
      <div><button id="scoring-player2">Score's player 2</button></div>
    </div>
  </div>
  `
  document.getElementById('scoring-player1').addEventListener('click', score(match._id, 'player1'));
  document.getElementById('scoring-player2').addEventListener('click', score(match._id, 'player2'));
}

loadMatch();
