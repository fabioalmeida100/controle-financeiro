import axios from 'axios'
import dotenv from 'dotenv'

const API_URL = process.env.REACT_APP_API_URL;

const findAll = async (yearMonth) => {
  return await axios.get(`${API_URL}?period=${yearMonth}`);
}

export { findAll }