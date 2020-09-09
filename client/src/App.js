import React from 'react';
import css from './app.module.css';
import Header from './components/header/Header';
import Controls from './components/controls/Controls';
import Transaction from './components/transactions/Transaction';
import PaginatorMonth from './components/paginator-month/PaginatorMonth';

export default function App() {
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
        <Transaction />
    </div>
  </div>;
}
