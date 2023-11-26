const express = require('express');
const routes = express.Router();

const routersModel = [
  {
    path: '/',
    route: routes.get('/', (req, res) => {
      res.send(req.originalUrl);
    }),
  },
];

routersModel.forEach((ru) => routes.use(ru.path, ru.route));

module.exports = routes;
