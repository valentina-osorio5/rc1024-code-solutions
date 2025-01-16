import express from 'express';
import pg from 'pg';
import { ClientError, errorMiddleware } from './lib';

type Grade = {
  gradeId?: number;
  name: string;
  course: string;
  score: number; // A number between 0 and 100
};

const db = new pg.Pool({
  connectionString: 'postgres://dev:dev@localhost/studentGradeTable',
  ssl: {
    // Allow non-SSL traffic to localhost
    rejectUnauthorized: false,
  },
});

const app = express();
app.use(express.json());

app.get('/api/grades', async (req, res, next) => {
  console.log('hit /api/grades');
  try {
    const sql = `
    select *
    from "grades"
    `;
    const result = await db.query(sql);
    console.log(result.rows);
    res.json(result.rows);
  } catch (err) {
    next(err);
  }
});

app.get('/api/grades/:gradeId', async (req, res, next) => {
  console.log('hit /api/grades/:gradeId');
  try {
    const { gradeId } = req.params;
    console.log(gradeId);

    if (!Number.isInteger(+gradeId)) {
      throw new ClientError(400, `Non-integer gradeId: ${gradeId}`);
    }

    const sql = `
    select "gradeId","name","course","score"

    from "grades"
    where "gradeId" = $1
    `;

    const params = [gradeId];
    const result = await db.query(sql, params);
    console.log(result.rows);
    const grade = result.rows[0];
    if (!grade) {
      throw new ClientError(400, `grade ${gradeId} not found`);
    }

    res.json(grade);
  } catch (err) {
    next(err);
  }
});

app.post('/api/grades', async (req, res, next) => {
  console.log('hit post /api/grades');
  console.log(req.body);
  try {
    const { name, course, score } = req.body;
    console.log('name', name, 'course', course, 'score', score);

    if (!name || !course || !score) {
      throw new ClientError(400, `name, course and score are required`);
    }

    if (!Number.isInteger(+score) && score > 0 && score <= 100) {
      // score of 1000 did not throw an error, the above needs to be edited
      // How to throw an error to not allow duplicates?

      throw new ClientError(400, `Non-Integer score: ${score} `);
    }

    const sql = `
    insert into "grades" ("name","course", "score")
    values ($1, $2, $3)
    returning *;
    `;
    const params = [name, course, score];
    const result = await db.query(sql, params);
    const newGrade = result.rows[0];
    console.log(newGrade);

    res.status(200).send(newGrade);
  } catch (err) {
    next(err);
  }
});

app.put('/api/grades/:gradeId', async (req, res, next) => {
  console.log('hit put /api/grades/:gradeId');
  console.log(req.body);
  try {
    const { name, course, score } = req.body;
    console.log('name', name, 'course', course, 'score', score);
    const { gradeId } = req.params;
    console.log(gradeId);

    if (!name || !course || !score) {
      throw new ClientError(400, `name, course and score are required`);
    }

    if (!Number.isInteger(+gradeId)) {
      throw new ClientError(400, `Non-Integer gradeId: ${gradeId} `);
    }
    // do we need to throw this error for score as well? can we combine them?

    if (gradeId === undefined) {
      throw new ClientError(400, 'gradeId is required');
    }

    const sql = `
    update "grades"
      set "name" = $1,
          "course" = $2,
          "score" = $3
    where "gradeId" = $4
    returning *;
    `;

    const params = [name, course, score, gradeId];
    const result = await db.query(sql, params);
    const grade = result.rows[0];
    console.log(grade);

    if (!grade) {
      throw new ClientError(404, `grade ${gradeId} not found`);
      res.json(grade);
    }

    res.json(grade); //
  } catch (err) {
    next(err);
  }
});

// this is not finding any of the proven gradeIds 404 not found/ gradeId undefined?

app.delete('/api/grades/:gradeId', async (req, res, next) => {
  console.log('hit delete /api/grades/:gradeId');
  try {
    const { gradeId } = req.params;
    console.log(gradeId);

    if (!Number.isInteger(+gradeId)) {
      throw new ClientError(400, `Non-Integer gradeId: ${gradeId} `);
    }

    if (gradeId === undefined) {
      throw new ClientError(400, 'gradeId is required');
    }

    const sql = `
    delete from "grades"
    where "gradeId" = $1;
    `;
    const params = [gradeId];
    const result = await db.query(sql, params);
    const grade = result.rows[0];
    console.log(grade);

    if (!grade) {
      throw new ClientError(404, `gradeId ${gradeId} not found`);
      res.json(grade);
    }

    res.sendStatus(204);
  } catch (err) {
    next(err);
  }
});

app.use(errorMiddleware);

app.listen(8080, () => {
  console.log('Listening on port 8080');
});
