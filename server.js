const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const cors = require('cors')
const logger = require('morgan');

require('dotenv').config();
require('./config/database');


const app = express();

app.use(logger('dev'));
app.use(express.json());

app.use(cors({ origin: process.env.CLIENT_ORIGIN || `http://localhost:3000` }))

app.use(require('./config/checkToken'))

const port = process.env.PORT || 3001;

app.use('/api/users', require('./routes/api/users'))
app.use('/api/posts', require('./routes/api/posts'))
app.use('/api/thread', require('./routes/api/thread'))

app.use('/api/comment', require('./routes/api/comment'))

app.listen(port, function() {
  console.log(`Express app running on port ${port}`);
});