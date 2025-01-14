import express from 'express';

const app = express();

app.use((req, res, next) => {
  console.log(
    'The date is,',
    new Date(),
    'req.method + req.path',
    req.method,
    req.path
  );
  next();
});

app.get('/', function (req, res) {
  res.send('GET request to /');
});

app.get('/notes', function (req, res) {
  res.send('GET request to /notes');
});

app.post('/notes/:noteId', function (req, res) {
  res.send('POST request to /notes/', req.params);
});

app.listen(8080, () => {
  console.log('Express server listening on port 8080');
});
