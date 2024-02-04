export const errorHandler = (statusCode, message) => {
  // we use this function we don't have an error, but when we create an error
  const error = new Error();

  error.statusCode = statusCode;
  error.message = message;

  return error;
};
