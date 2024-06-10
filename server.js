const express = require('express');
const Redis = require('ioredis');
const redis = new Redis();
const compression = require('compression');

const app = express();
app.use(compression());

const cacheMiddleware = async (req, res, next) => {
  const key = `response:${req.originalUrl}`;
  const cachedResponse = await redis.get(key);

  if (cachedResponse) {
    res.send(JSON.parse(cachedResponse));
  } else {
    res.sendResponse = res.send;
    res.send = (body) => {
      if (!containsSensitiveData(body)) {
        redis.set(key, JSON.stringify(body));
      }
      res.sendResponse(body);
    };
    next();
  }
};

const containsSensitiveData = (body) => {
  // Implement logic to check for sensitive data
  // Example: return body.includes('password') || body.includes('secret');
  return false; // Replace with actual implementation
};

app.use(cacheMiddleware);

app.get('/api/books', async (req, res) => {
  // Simulating a database call
  const books = [{ title: 'Book 1' }, { title: 'Book 2' }];
  res.json(books);
});

app.listen(3000, () => console.log('Server is running on port 3000'));
