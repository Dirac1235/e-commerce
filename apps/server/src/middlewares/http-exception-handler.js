export function httpExceptionHandler(err, req, res, next) {
  let message;
  let details;
  let statusCode = err.statusCode;
  console.log("err.message");
  try {
    statusCode = err.statusCode;
    details = JSON.parse(err.message);
    message = details?.message;
  } catch (error) {
    message = err.message;
  }
  console.error({ message });
  res.status(statusCode).json({
    error: true,
    statusCode: statusCode,
    message: message,
    details: details,
    timestamp: new Date().toISOString(),
    path: req.url,
  });
}
