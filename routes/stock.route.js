const express = require('express');
const StockRouter = express.Router();
const {create, update, remove, list, findbyId, findbyEmail} = require('../controllers/stock.controllers');

StockRouter.post('/add', create);
StockRouter.get('/list', list);
StockRouter.put('/put', update);
StockRouter.delete('/delete', remove);
StockRouter.get('/findById', findbyId);
StockRouter.get('/findbyEmail', findbyEmail);


module.exports = StockRouter;