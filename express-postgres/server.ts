import express from 'express';
import { ClientError, errorMiddleware } from './lib/index.js';
import pg from 'pg';

// only create ONE pool for your whole server.
// Note the database name at the end of the connection string.
const db = new pg.Pool({
  connectionString: 'postgres://dev:dev@localhost/pagila',
  ssl: {
    // Allow non-SSL traffic to localhost
    rejectUnauthorized: false,
  },
});

const app = express();

app.put('/api/films/:filmId', async (req, res, next) => {
  console.log('hit put endpoint');
  try {
    const filmId = req.params.filmId;
    console.log(filmId);
    const title = req.query.title;
    console.log(title);

    if (!Number.isInteger(+filmId)) {
      throw new ClientError(400, `Non-Integer cityId: ${filmId} `);
    }
    if (title === undefined) {
      throw new ClientError(400, 'title is required');
    }

    const sql = `
    update "films"
    set "title" = $1
    where "filmId" = $2
    returning *;
    `;
    const params = [title, filmId];

    const result = await db.query(sql, params);
    console.log(result.rows);

    const film = result.rows[0];

    if (!film) {
      throw new ClientError(404, `film ${filmId} not found`);
    }
    res.send('success');
  } catch (err) {
    next(err);
  }
});

app.get('/api/films', async (req, res, next) => {
  console.log('hit /api/films');
  try {
    const sql = `
      select
        "title",
        "replacementCost"
      from "films"
      order by "replacementCost" desc;
    `;
    const result = await db.query(sql);
    console.log(result.rows);
    const films = result.rows;
    res.send(films);
  } catch (err) {
    next(err);
  }
});

app.get('/api/films/:filmId', async (req, res, next) => {
  console.log('hit /api/films/:filmId hit');
  try {
    const { filmId } = req.params;
    if (filmId === undefined) {
      throw new ClientError(400, 'filmId is required');
    }
    const sql = `
      select
        "title",
        "filmId"
      from "films"
      where "filmId" = $1
    `;
    const params = [filmId];
    const result = await db.query(sql, params);
    console.log(result.rows);
    const films = result.rows[0];
    if (!films) {
      throw new ClientError(404, `film ${filmId} not found`);
    }
    res.send(films);
  } catch (err) {
    next(err);
  }
});

app.put('/api/films/:filmId', async (req, res, next) => {
  console.log('hit /api/films/:filmId');
  try {
    const { filmId } = req.params;
    if (filmId === undefined) {
      throw new ClientError(400, 'filmId is required');
    }
    const sql = `
      select
        "title",
        "filmId"
      from "films"
      where "filmId" = $1
    `;
    const params = [filmId];
    const result = await db.query(sql, params);
    console.log(result.rows);
    const films = result.rows[0];
    if (!films) {
      throw new ClientError(404, `film ${filmId} not found`);
    }
    res.send(films);
  } catch (err) {
    next(err);
  }
});

// route handlers
app.get('/api/actors', async (req, res, next) => {
  console.log('hit /api/actors');
  try {
    const sql = `
      select
        "actorId",
        "firstName",
        "lastName"
      from "actors";
    `;
    const result = await db.query(sql);
    console.log(result.rows);
    const actors = result.rows;
    res.send(actors);
  } catch (err) {
    next(err);
  }
});

app.get('/api/actors/:actorId', async (req, res, next) => {
  console.log('endpoint hit');
  try {
    const { actorId } = req.params;
    if (actorId === undefined) {
      throw new ClientError(400, 'actorId is required');
    }
    const sql = `
      select
        "actorId",
        "firstName",
        "lastName"
      from "actors"
      where "actorId" = $1
    `;
    const params = [actorId];
    const result = await db.query(sql, params);
    const actor = result.rows[0];
    if (!actor) {
      throw new ClientError(404, `actor ${actorId} not found`);
    }
    res.send(actor);
  } catch (err) {
    next(err);
  }
});

app.use(errorMiddleware);

app.listen(8080, () => {
  console.log('listening on port 8080');
});
