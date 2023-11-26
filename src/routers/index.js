const express = require('express');
const routes = express.Router();

const routersModel = [{ path: '/', route: '' }];

routersModel.forEach((ru) => routes.use(ru.path, ru.route));

module.exports = routes;
