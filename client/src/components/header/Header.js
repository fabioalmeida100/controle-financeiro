import React from 'react'
import css from './header.module.css'

export default function Header({ amoutLancamentoValue, revenueValue, expenseValue, balanceValue }) {
  return (
    <div className={`row ${css.header}`}>
      <div className="col m3"><div className={css.displayInline}>Lançamentos: </div>{ amoutLancamentoValue }</div>
      <div className="col m3"><div className={css.displayInline}>Receitas: </div>{ revenueValue }</div>
      <div className="col m3"><div className={css.displayInline}>Despesas: </div>{ expenseValue }</div>
      <div className="col m3"><div className={css.displayInline}>Saldo: </div>{ balanceValue }</div>
    </div>
  )
}
