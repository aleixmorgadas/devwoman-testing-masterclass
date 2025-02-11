import express from 'express';
const router = express.Router();


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

  router.delete('/:matchId', async function(req, res, next) {
    await matchesCollection.deleteOne({_id: req.params.matchId});
    res.status(204).end();
  });

  return router;
}
