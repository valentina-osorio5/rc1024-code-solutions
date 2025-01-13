import express from 'express';

const app = express();

app.use('/static', express.static('public'));

app.get('/static/index.html', (req, res) => {
  console.log('got /index.html');
  res.send('got /index.html');
});

app.get('/main.js', (req, res) => {
  console.log('got /main.js');
  res.send('got /main.js');
});

app.get('/notes', (req, res) => {
  console.log('got /notes');
  res.send('got /notes');
});

app.get('/styles.css', (req, res) => {
  console.log('got /styles.css');
  res.send('got /styles.css');
});

app.get('/images/pic1.jpeg', (req, res) => {
  res.send('got images');
  console.log('got images');
});

app.listen(8080, () => {
  console.log('Express server listening on port 8080');
});
