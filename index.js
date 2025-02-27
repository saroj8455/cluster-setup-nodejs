import express from 'express';
import { rateLimit } from 'express-rate-limit';

const port = 3000;
const app = express();

const limiter = rateLimit({
  windowMs: 5 * 60 * 1000, // 5 minutes
  max: 5, // limit each IP to 5 requests per windowMs
  message: {
    error: 'Too many requests, please try again after 15 minutes',
    status: false,
  },
});

app.use(limiter);

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

app.get('/api/v1', (req, res) => {
  return res.status(200).jsonp({
    id: 1,
    tech: 'nodejs',
    description:
      'Rate limiting is a strategy for limiting network traffic. It puts a cap on how often someone can repeat an action within a certain timeframe – for instance, trying to log in to an account. Rate limiting can help stop certain kinds of malicious bot activity. It can also reduce strain on web servers. However, rate limiting is not a complete solution for managing bot activity.',
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
  console.log(`Worker pid=${process.pid}`);
});
