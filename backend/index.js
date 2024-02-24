const express = require('express');
const cors = require('cors');
const mainRouter = require('./routes');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/v1', mainRouter);

app.listen(3500, () => {
  console.log('server is started at port no 3000');
});
