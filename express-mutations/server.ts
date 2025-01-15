import express from 'express';
import pg from 'pg';
import { ClientError, errorMiddleware } from './lib/index.js';

const db = new pg.Pool({
  connectionString: 'postgres://dev:dev@localhost/pagila',
  ssl: {
    // Allow non-SSL traffic to localhost
    rejectUnauthorized: false,
  },
});

const app = express();
app.use(express.json());

app.post('/api/actors', async (req, res, next) => {
  console.log('hit post /api/actors');
  console.log(req.body);
  try {
    const { firstName, lastName } = req.body;
    console.log('firstName', firstName, 'lastName', lastName);

    if (!firstName || !lastName) {
      throw new ClientError(400, `firstName and lastName required`);
    }

    const sql = `
    insert into "actors" ("firstName","lastName")
    values ($1, $2)
    returning *;
    `;
    const params = [firstName, lastName];
    const result = await db.query(sql, params);
    const newActor = result.rows[0];
    console.log(newActor);

    res.status(201).send(newActor);
  } catch (err) {
    next(err);
  }
});

app.put('/api/actors/:actorId', async (req, res, next) => {
  console.log('hit put /api/actors/:actorId');
  console.log(req.body);
  try {
    const { firstName, lastName } = req.body;
    console.log('firstName', firstName, 'lastName', lastName);
    const { actorId } = req.params;
    console.log(actorId);

    if (!firstName || !lastName) {
      throw new ClientError(400, `firstName and lastName required`);
    }

    if (!Number.isInteger(+actorId)) {
      throw new ClientError(400, `Non-Integer actorId: ${actorId} `);
    }

    if (actorId === undefined) {
      throw new ClientError(400, 'actorId is required');
    }

    const sql = `
    update "actors"
      set "firstName" = $1,
          "lastName" = $2
    where "actorId" = $3
    returning *;
    `;
    const params = [firstName, lastName, actorId];
    const result = await db.query(sql, params);
    const actor = result.rows[0];
    console.log(actor);

    if (!actor) {
      throw new ClientError(404, `actor ${actorId} not found`);
      res.json(actor);
    }

    res.json(actor);
  } catch (err) {
    next(err);
  }
});

app.delete('/api/actors/:actorId', async (req, res, next) => {
  console.log('hit delete /api/actors/:actorId');
  try {
    const { actorId } = req.params;
    console.log(actorId);

    if (!Number.isInteger(+actorId)) {
      throw new ClientError(400, `Non-Integer actorId: ${actorId} `);
    }

    if (actorId === undefined) {
      throw new ClientError(400, 'actorId is required');
    }

    const sql = `
    delete from "actors"
    where "actorId" = $1
    returning *;
    `;
    const params = [actorId];
    const result = await db.query(sql, params);
    const actor = result.rows[0];
    console.log(actor);

    if (!actor) {
      throw new ClientError(404, `actor ${actorId} not found`);
      res.json(actor);
    }

    res.sendStatus(204);
  } catch (err) {
    next(err);
  }
});

// Endpoint for testing
app.get('/api/actors/:actorId', async (req, res, next) => {
  try {
    const { actorId } = req.params;
    if (!Number.isInteger(+actorId)) {
      throw new ClientError(400, `Non-integer actorId: ${actorId}`);
    }
    const sql = `
      select * from "actors"
      where "actorId" = $1;
    `;
    const params = [actorId];
    const result = await db.query(sql, params);
    const actor = result.rows[0];
    if (!actor) throw new ClientError(404, `actor ${actorId} not found`);
    res.json(actor);
  } catch (err) {
    next(err);
  }
});

app.use(errorMiddleware);

app.listen(8080, () => {
  console.log('listening on port 8080');
});
