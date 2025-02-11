import createError from 'http-errors';
import express from 'express';
import logger from 'morgan';
import { MongoClient } from 'mongodb';

import { matchesRouter } from './routes/matches.js';

const app = express();

const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);
var db;

async function startDb() {
  await client.connect();
  db = client.db('tennis');
  console.log('db connected');
}

await startDb().then();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/matches', matchesRouter(db));

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.json({err});
});

export default app;
