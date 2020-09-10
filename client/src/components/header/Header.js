import React from 'react'
import css from './header.module.css'
import { formatNumber } from '../../helper/formatHelpers'

export default function Header({ amoutLancamentoValue, revenueValue, expenseValue, balanceValue }) {
  return (
    <div className={`row ${css.header}`}>
      <div className="col m3"><div className={css.displayInline}>Lançamentos: </div>{ formatNumber(amoutLancamentoValue) }</div>
      <div className="col m3"><div className={css.displayInline}>Receitas: </div>{ formatNumber(revenueValue) }</div>
      <div className="col m3"><div className={css.displayInline}>Despesas: </div>{ formatNumber(expenseValue) }</div>
      <div className="col m3"><div className={css.displayInline}>Saldo: </div>{ formatNumber(balanceValue) }</div>
    </div>
  )
}
