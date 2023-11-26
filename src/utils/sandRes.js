const sandRes = (res, info) => {
  let success = info.success || true;
  let message = info.message || 'success';
  let statusCode = info.statusCode;
  let meta = info.meta ? info.meta : null;
  let data = info.data;

  res.status(statusCode).json({ success, message, data, meta });
};

module.exports = sandRes;
