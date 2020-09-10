import React, { useState, useEffect } from 'react';
import css from './app.module.css';
import Header from './components/header/Header';
import Controls from './components/controls/Controls';
import Transaction from './components/transactions/Transaction';
import PaginatorMonth from './components/paginator-month/PaginatorMonth';
import { findAll } from '../src/api/apiService'

export default function App() {
  const [allTransactions, setAllTransactions] = useState([]);
  const [amoutLancamentoValue, setAmoutLancamentoValue] = useState(0);
  const [revenueValue, setRevenueValue] = useState(0);
  const [expenseValue, setExpenseValue] = useState(0);
  const [balanceValue, setBalanceValue] = useState(0);
  
  useEffect(() => {
    const getTransactions = async () => {
      const transactions = await findAll('2019-10');
      setAllTransactions(transactions.data.sort((a, b) => a.day - b.day))
    }

    getTransactions();
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

  return <div className="container">
    <div className={`center ${css.mt10} ${css.fontTitle} `}>
        Controle Financeiro
    </div>
    <div className={`row center ${css.mt10}`}>
      <PaginatorMonth />
    </div>
    <div className={`row ${css.mt10}`}>
        <Header 
          amoutLancamentoValue={amoutLancamentoValue}
          revenueValue={revenueValue}
          expenseValue={expenseValue}
          balanceValue={balanceValue} />
    </div>
    <div className={`row ${css.mt10}`}>
        <Controls />
    </div>
    <div className={`row ${css.mt10}`}>
        <Transaction allTransactions={allTransactions}/>

    </div>
  </div>;
}
