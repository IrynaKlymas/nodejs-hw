import { isHttpError } from 'http-errors';

export const errorHandler = (err, req, res, next) => {
  req.log.error(err);

  if (isHttpError(err)) {
    return res.status(err.status).json({
      message: err.message,
    });
  }

  res.status(500).json({
    message: 'Something went wrong',
  });
};