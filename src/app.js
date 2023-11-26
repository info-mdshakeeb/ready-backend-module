const express = require('express');
const cors = require('cors');
const globalErrorHandler = require('./middlewares/globalErrorHandler');
const routes = require('./routers');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send("this is test server -> welcome shakeeb's server");
});
// app routers
app.use('/api/v1/', routes);

// error handler :
app.use(globalErrorHandler);
// no router found :
app.use((req, res) =>
  res.status(404).json({
    success: false,
    message: 'internal server error',
    errorMessages: {
      path: req.originalUrl,
      message: 'Api not Found',
    },
  }),
);

module.exports = app;
