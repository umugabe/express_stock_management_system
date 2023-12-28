const express = require('express');
const StockRouter = require('./stock.route');

const allRoutes = express();

allRoutes.use('/stock', StockRouter);

module.exports = allRoutes;