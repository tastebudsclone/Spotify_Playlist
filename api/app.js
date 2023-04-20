require("dotenv").config();

const express = require('express');
const logger = require('morgan');
const helmet = require('helmet');
const createError = require('http-errors');

const app = express();

app.use(logger('dev'));
app.use(helmet());

// Error Handling //
app.use((req, res, next) => next(createError(404, "Route not found")));

app.use((error, req, res, next) => {
  if (!error.status) {
    error = createError(500, error)
  }

  const data = {
    message: error.message
  }

  res.status(error.status)
    .json(data)
})

const port = process.env.PORT || 3001;
app.listen(port, () => console.info(`App running at ${port}`));