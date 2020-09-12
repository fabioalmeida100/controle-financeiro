import axios from 'axios'
import dotenv from 'dotenv'

const API_URL = process.env.REACT_APP_API_URL;

const findAll = async (yearMonth) => {
  return await axios.get(`${API_URL}?period=${yearMonth}`);
}

const findOne = async (id) => {
  return await axios.get(`${API_URL}/${id}`)
}

const insertTransaction = async (transaction) => {
  console.log(transaction);
  const response = await axios.post(API_URL, transaction);
  return response.data;
}

const updateTransaction = async (transaction) => {
  const response = await axios.put(`${API_URL}/${transaction.id}`, transaction);
  return response.data;
}

const deleteOne = async (id) => {
  return await axios.delete(`${API_URL}/${id}`);
}

export { findAll, findOne, insertTransaction, updateTransaction, deleteOne }