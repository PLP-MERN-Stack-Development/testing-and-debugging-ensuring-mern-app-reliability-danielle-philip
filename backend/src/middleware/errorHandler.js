export const errorHandler = (err, req, res, next) => {
  console.error('Error:', err && err.message ? err.message : err);
  const status = err && err.status ? err.status : 500;
  res.status(status).json({ message: err.message || 'Server Error' });
};
