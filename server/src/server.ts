import express from 'express';

const app = express();

app.get('/users', (request, response) => {
  response.json([
    'Heliton',
    'Diego',
    'Paula'
  ]);
});

app.listen(3333, () => {
  console.log('🚀 Server started on port 3333');
});
