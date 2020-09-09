import axios from 'axios'

const API_URL = 'http://localhost:3001/api/transaction';

const findAll = async (yearMonth) => {
  return await axios.get(`${API_URL}?period=${yearMonth}`);
}

export { findAll }