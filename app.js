const express = require('express');
const app = express();
const bookRouter = express.Router();
const port = process.env.PORT || 3000;

bookRouter.route('/books')
  .get((req, res) => {
    const response = { Hello: 'World' };
    res.json(response);
  });
  
app.use('/api', bookRouter);

app.get('/', (req, res) => {
  res.send('Welcome To Node');
});

app.listen(port, () => {
  console.log(`Running on Port: ${port}`);
});
