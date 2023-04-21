require("dotenv").config();

const express = require('express');
const logger = require('morgan');
const helmet = require('helmet');
const createError = require('http-errors');
const mongoose = require('mongoose')


require('./config/db.config');
const app = express();

app.use(logger('dev'));
app.use(helmet());

app.use(express.json())
app.use('/api/v1', require('./config/routes.config'));

// Error Handling //
app.use((req, res, next) => next(createError(404, "Route not found")));

app.use((error, req, res, next) => {
  if (error instanceof mongoose.Error.ValidationError) {
    error = createError(400, error)
  } else if (error instanceof mongoose.Error.CastError && error.path === '_id') {
    const resourceName = error.model().constructor.modelName;
    error = createError(404, `${resourceName} not found`)
  } else if (!error.status) {
    error = createError(500, error)
  } else if (error.message.includes("E11000")) {
    Object.keys(error.keyValue).forEach((key) => error.keyValue[key] = 'Already exist');
    error = createError(409, { errors: error.keyValue })
  }
  console.error(error);

  const data = {
    message: error.message
  }

  if (error.errors) {
    const errors = Object.keys(error.errors)
      .reduce((errors, errorKey) => {
        errors[errorKey] = error.errors[errorKey]?.message || error.errors[errorKey];
        return errors;
      }, {})
      data.errors = errors;
  }

  res.status(error.status)
    .json(data)
})

const port = process.env.PORT || 3001;
app.listen(port, () => console.info(`App running at ${port}`));