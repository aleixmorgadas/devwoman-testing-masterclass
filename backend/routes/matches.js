import express from 'express';
const router = express.Router();

import { ObjectId } from 'mongodb';
import { getScore } from './scores.js';


export const matchesRouter = (db) => {
  const matchesCollection = db.collection('matches');

  router.get('/', async function(req, res, next) {
    const matches = await matchesCollection.find({}).toArray();
    res.json(matches);
  });
  
  router.post('/', async function(req, res, next) {
    const match = {
      player1: req.body.player1,
      player2: req.body.player2
    }
    await matchesCollection.insertOne(match);
    res.json(match);
  });

  router.get('/:matchId', async function(req, res, next) {
    const match = await matchesCollection.findOne({_id: new ObjectId(req.params.matchId)});
    res.json(match);
  });

  router.patch('/:matchId/scores/:player', async function(req, res) {
    const match = await matchesCollection.findOne({_id: new ObjectId(req.params.matchId)});
    const player = req.params.player;
    if (match.score == null) {
      match.score = {
        player1: player == 'player1' ? 1 : 0,
        player2: player == 'player2' ? 1 : 0
      }
    } else {
      if (player == 'player1') {
        match.score.player1 += 1;
      } else {
        match.score.player2 += 1;
      }
    }
    match.score.result = getScore(match.score.player1, match.score.player2);
    await matchesCollection.updateOne({_id: new ObjectId(req.params.matchId)}, { $set: match });
    res.json(match);
  });

  router.delete('/:matchId', async function(req, res, next) {
    await matchesCollection.deleteOne({_id: req.params.matchId});
    res.status(204).end();
  });

  return router;
}
