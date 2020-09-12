import React, { useState, useEffect } from 'react';
import css from './app.module.css';
import Header from './components/header/Header';
import Filter from './components/filter/Filter';
import Transaction from './components/transactions/Transaction';
import PaginatorMonth from './components/paginator-month/PaginatorMonth';
import { findAll, deleteOne } from '../src/api/apiService'
import Button from './components/button/Button';
import ModalTransaction from './components/modal/ModalTransaction';

const NOVO = 'NOVO';
const EDITAR = 'EDITAR';

export default function App() {
  const [yearMonthSelected, setYearMonthSelected] = useState("2019-01")
  const [allTransactions, setAllTransactions] = useState([]);
  const [amoutLancamentoValue, setAmoutLancamentoValue] = useState(0);
  const [revenueValue, setRevenueValue] = useState(0);
  const [expenseValue, setExpenseValue] = useState(0);
  const [balanceValue, setBalanceValue] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  
  useEffect(() => {
    const getTransactions = async () => {
      const transactions = await findAll(yearMonthSelected);
      setAllTransactions(transactions.data.sort((a, b) => a.day - b.day))
    } 

    getTransactions();
    loadTotalizer(); 
  }, [yearMonthSelected])

    
  useEffect(() => {
    loadTotalizer(); 
  }, [allTransactions])


  const loadTotalizer = async () => {
    setAmoutLancamentoValue(allTransactions.length);
    let revenueValue = 0;
    let expenseValue = 0;
    allTransactions.forEach(item => {
      if (item.type == '+')
        revenueValue += item.value
      else
        expenseValue += item.value;
    })
    setRevenueValue(revenueValue);
    setExpenseValue(expenseValue);
    setBalanceValue(revenueValue - expenseValue);
  }

  const handleOnChageYearMonth = async (event) => {
    setYearMonthSelected(event.target.value)
  }

  const handleFilter = async (event) => {
    const searchTerm = event.target.value.toLowerCase();
    const transactions = await findAll(yearMonthSelected);
    const newAllTransactions = transactions.data.filter((item) => {
      return item.description.toLowerCase().includes(searchTerm);
    })

    setAllTransactions(newAllTransactions);
  }

  const handleActionDelete = async (id) => {
    const deleteReturn = await deleteOne(id); 
    
    if (deleteReturn) {
      const newAllTransactions = Object.assign([], allTransactions);
      const deletedIndex = allTransactions.findIndex(
        (transaction) => transaction.id === id
      );    
      newAllTransactions.splice(deletedIndex, 1);
      setAllTransactions(newAllTransactions);
    }    
  }

  const handleOpenModal = async (type) => {
    setModalOpen(true);
  }

  const handleCloseModal = () => {
    setModalOpen(false)
  }
  
  const handleActionInsert = async (id) => {
    handleOpenModal();
  }  

  const handleActionEdit = async (id) => {
    handleOpenModal();
  }

  return <div className="container">
    <div className={`center ${css.mt10} ${css.fontTitle} `}>
        Controle Financeiro
    </div>
    <div className={`row center ${css.mt10}`}>
      <PaginatorMonth handleOnChageYearMonth={ handleOnChageYearMonth } yearMonthList={[]} />
    </div>
    <div className={`row ${css.mt10}`}>
        <Header 
          amoutLancamentoValue={amoutLancamentoValue}
          revenueValue={revenueValue}
          expenseValue={expenseValue}
          balanceValue={balanceValue} />
    </div>
    <div className={`row ${css.mt10}`}>
        <div className="col m3">
          <Button handleOpenModal={handleActionInsert} type={NOVO}/>
        </div>
        <div className="col m9">
          <Filter handleFilter={handleFilter}/>
        </div>
    </div>
    <div className={`row ${css.mt10}`}>
        <Transaction allTransactions={allTransactions} handleActionDelete={handleActionDelete} handleActionEdit={handleActionEdit}/>
    </div>
    
    {modalOpen && <ModalTransaction handleCloseModal={handleCloseModal}/>}

  </div>;
}
