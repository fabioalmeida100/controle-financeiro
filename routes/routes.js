const express = require('express');
const { findAll, create, findOne, update, remove } = require('../services/transactionService')
const transactionRouter = express.Router();

transactionRouter.get('/', findAll);
transactionRouter.post('/', create);
transactionRouter.get('/:id', findOne);
transactionRouter.put('/:id', update);
transactionRouter.delete('/:id', remove);

module.exports = transactionRouter;
