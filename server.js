const express = require('express');
const path = require('path');

const app = express();
const router = express.Router();
const PORT = process.env.PORT || 3000;
app.use(express.json());
app.use('/', express.static(path.join(__dirname, 'public'))); // do I need this with Router
app.use('/api', router);

router.get('/', (req, res, next) => {
  try {
    res.sendFile('index.html');
  }
  catch (err) {
    next(err);
  }
})


app.listen(3000, () => console.log('Listening on port ', PORT))

