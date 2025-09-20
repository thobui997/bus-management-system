import cors from 'cors';
import express from 'express';
import httpStatus from 'http-status';
import config from '~/config/config.js';
import morgan from '~/config/morgan.js';
import { errorConverter, errorHandler } from '~/middlewares/error.js';
import ApiError from '~/utils/api-error.js';

const app = express();

if (config.env !== 'test') {
  app.use(morgan.successHandler);
  app.use(morgan.errorHandler);
}

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// send back a 404 error for any unknown api request
app.use((req, res, next) => {
  next(new ApiError(httpStatus.NOT_FOUND, 'Not found'));
});

// convert error to ApiError, if needed
app.use(errorConverter);

// handle error
app.use(errorHandler);

export default app;
