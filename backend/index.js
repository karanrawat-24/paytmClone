const express = require('express');
const mainRoute = require('./routes');
const cors = require('cors');

const JWT_SECRET = require('./config');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/v1', mainRoute);

app.listen(PORT, () => {
  console.log(`server is started at port no ${PORT}`);
});
