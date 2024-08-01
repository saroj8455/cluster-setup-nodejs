import express from 'express';

const port = 3000;
const app = express();

app.get('/heavy', (req, res) => {
  let total = 0;
  for (let index = 0; index < 50_000_000; index++) {
    total++;
  }
  const format = Intl.NumberFormat('en-US');
  total = format.format(total);
  res.jsonp({
    message: 'Heavy computation done',
    total,
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
  console.log(`Worker pid=${process.pid}`);
});
