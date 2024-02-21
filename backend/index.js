const express = require('express');
const mainRoute = require('./routes');
const app = express();

app.use('/api/v1', mainRoute);

app.listen(PORT, () => {
  console.log(`server is started at port no ${PORT}`);
});
