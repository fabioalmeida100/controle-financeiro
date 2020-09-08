const mongoose = require('mongoose');
const ObjectId = mongoose.Types.ObjectId;
const TransactionModel = require('../models/TransactionModel');

const transactions = TransactionModel;

const findAll = async (req, res) => {
  const period = req.query.period;

  try {
    var condition = period;    
  
    const data = await transactions.find({ yearMonth: condition });
    res.status(200).send(data);    
  } catch (error) {
    res
      .status(500)
      .send({ message: error.message || 'Erro ao listar todos os documentos' });
  }
};

const create = async (req, res) => {
  const { description, value, category, year, month, day, yearMonth, yearMonthDay, type} = req.body;

  const transaction = new TransactionModel({
    description,
    value: parseFloat(value),
    category,
    year: parseInt(year),
    month: parseInt(month),
    day: parseInt(day),
    yearMonth,
    yearMonthDay,
    type
  });

  try {
    const data = await transaction.save();
    if (data)
      res.send({ message: 'Inserção com sucesso' });
      
  } catch (error) {
    res
      .status(500)
      .send({ message: error.message || 'Algum erro ocorreu ao salvar' });    
  }
};

const findOne = async (req, res) => {
  const id = req.params.id;

  try {
    const data = await transactions.findById({ _id: id });
  
    if (!data) {
      res.status(404).send('Registro não encontrado');
    } else {
      res.send(data);
    }    
  } catch (error) {
    res.status(500).send({ message: 'Erro ao buscar: ' + id });    
  }
};

const update = async (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: 'Dados para atualizacao vazio',
    });
  }

  const id = req.params.id;

  try {   
    const data = await transactions.findByIdAndUpdate({ _id: id }, req.body, {
      new: true,
    });

    if (!data) {
      res.status(404).send('Registro não encotrado');
    } else {
      res.send(data);
    }
  } catch (error) {
    res.status(500).send({ message: 'Erro ao atualizar o registro: ' + id });    
  }
};

const remove = async (req, res) => {
  const id = req.params.id;

  try {    
    const data = await transactions.findByIdAndRemove({ _id: id });

    if (!data) {
      res.status(404).send('Registro não encotrado');
    } else {
      res.send('Registro excluído com sucesso');
    }
  } catch (error) {
    res
      .status(500)
      .send({ message: 'Não foi possivel deletar o registro: ' + id });    
  }
};

module.exports = { findAll, create, findOne, update, remove };
