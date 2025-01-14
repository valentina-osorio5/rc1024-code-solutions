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

app.get('/api/countries', async (req, res, next) => {
  console.log('hit /api/countries');
  try {
    const sql = `
    select "c"."countryId",
    "co"."name" as "country",
    count(*) as "cities"
    from "cities" as "c"
    join "countries" as "co" using ("countryId")
    group by "c"."countryId", "co"."name"
    `;
    const result = await db.query(sql);
    console.log(result.rows);
    res.json([{ countryId: Number, name: String, cities: Number }]);
  } catch (err) {
    next(err);
  }
});

app.get('/api/cities/:cityId', async (req, res, next) => {
  console.log('hit /api/cities/:cityId');
  try {
    const { cityId } = req.params;
    console.log(cityId);
    if (!Number.isInteger(+cityId)) {
      throw new ClientError(400, `Non-integer cityId: ${cityId}`);
    }
    const sql = `
    select "c"."cityId",
    "co"."name" as "country",
    "c"."name" as "city"
    from "cities" as "c"
    join "countries" as "co" using ("countryId")
    where "cityId" = $1
    `;
    const params = [cityId];
    const result = await db.query(sql, params);
    console.log(result.rows);
    const city = result.rows[0];
    if (!city) {
      throw new ClientError(404, `city ${cityId} not found`);
    }
    res.json({ cityId: Number, country: String, city: String });
  } catch (err) {
    next(err);
  }
});

app.use(errorMiddleware);

app.listen(8080, () => {
  console.log('listening on port 8080');
});
