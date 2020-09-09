import React, { useState, useEffect } from 'react';
import css from './app.module.css';
import Header from './components/header/Header';
import Controls from './components/controls/Controls';
import Transaction from './components/transactions/Transaction';
import PaginatorMonth from './components/paginator-month/PaginatorMonth';
import { findAll } from '../src/api/apiService'

export default function App() {
  const [allTransactions, setAllTransactions] = useState([]);

  useEffect(() => {
    const getTransactions = async () => {
      const transactions = await findAll('2019-10');
      setAllTransactions(transactions.data.sort((a, b) => a.day - b.day))
    }

    getTransactions();
  }, [])

  return <div className="container">
    <div className={`center ${css.mt10} ${css.fontTitle} `}>
        Controle Financeiro
    </div>
    <div className={`row center ${css.mt10}`}>
      <PaginatorMonth />
    </div>
    <div className={`row ${css.mt10}`}>
        <Header />
    </div>
    <div className={`row ${css.mt10}`}>
        <Controls />
    </div>
    <div className={`row ${css.mt10}`}>
        <Transaction allTransactions={allTransactions}/>

    </div>
  </div>;
}
