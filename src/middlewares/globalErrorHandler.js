/* eslint-disable no-unused-vars */

const ApiErrors = require('../Errors/ApiErrors');

const globalErrorHandler = async (error, req, res, next) => {
  let statusCode = 500;
  let message = 'internal server Error';
  let errorMessages = '';

  if (error instanceof ApiErrors) {
    statusCode = error?.status;
    errorMessages = { path: req.originalUrl, message: error?.message };
  } else if (error instanceof Error) {
    errorMessages = { path: req.originalUrl, message: error?.message };
  }

  res.status(statusCode).json({
    success: false,
    message,
    errorMessages,
    stake: error.stake,
  });
};
module.exports = globalErrorHandler;
