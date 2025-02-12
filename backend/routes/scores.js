export function getScore(player1Score, player2Score) {
    let result = "";
    if (player1Score < 0 || player2Score < 0) {
      throw new Error();
    }

    if (player1Score === player2Score)
    {
      // tie score
      switch (player1Score)
      {
        case 0:
          result += "Love-All";
          break;
        case 1:
          result += "Fifteen-All";
          break;
        case 2:
          result += "Thirty-All";
          break;
        default:
          result += "Deuce";
          break;
      }
    }
    else if (player1Score >= 4 || player2Score >= 4)
    {
      // end-game score
      if (player1Score - player2Score === 1) {
        result += "Advantage " + "player1";
      } else if (player1Score - player2Score === -1) {
        result += "Advantage " + "player2";
      } else if (player1Score - player2Score >= 2) {
        result += "Win for " + "player1";
      } else {
        result += "Win for " + "player2";
      }
    }
    else
    {
      // regular score
      switch (player1Score) {
        case 0:
          result += "Love";
          break;
        case 1:
          result += "Fifteen";
          break;
        case 2:
          result += "Thirty";
          break;
        default:
          result += "Forty";
          break;
      }
      result += "-";
      switch (player2Score) {
        case 0:
          result += "Love";
          break;
        case 1:
          result += "Fifteen";
          break;
        case 2:
          result += "Thirty";
          break;
        default:
          result += "Forty";
          break;
      }
    }

    return result;
}

export function calculateScore(match, playerScoring) {
  if (match.score == null) {
    match.score = {
      player1: playerScoring == 'player1' ? 1 : 0,
      player2: playerScoring == 'player2' ? 1 : 0
    }
  } else {
    if (match.score.finished) {
      return match;
    }
    if (playerScoring == 'player1') {
      match.score.player1 += 1;
    } else {
      match.score.player2 += 1;
    }
  }
  match.score.result = getScore(match.score.player1, match.score.player2);
  if(match.score.result.includes('Win')) {
    match.score.finished = true;
  }
  return match;
}