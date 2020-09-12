import React from 'react'
import css from './transaction.module.css'
import { formatNumber } from '../../helper/formatHelpers'
import Action from '../action/Action'

export default function Transaction({allTransactions, handleActionEdit, handleActionDelete }) {

  return (
    <div className="row">
      {
        allTransactions.map(transaction => {
          return (
            <div key={transaction.id} className={`${css.item} valign-wrapper`} style={transaction.type === '-' ? {background: '#ff00005e'} : {background: '#0080008c'}}>
              <div className={`col m1`}><strong>{transaction.day}</strong></div>
              <div className={`col m7`}>
                <div className={`row ${css.mt10}`}>
                  <strong>
                    {transaction.category}
                  </strong>
                  {transaction.description}
                </div>                
              </div>
              <div className={`col m2`}>{`R$ ${formatNumber(transaction.value)}`}</div>
              <div className={`col m1`}><Action type="edit" id={transaction.id} handleActionClick={handleActionEdit}/></div>
              <div className={`col m1`}><Action type="delete" id={transaction.id} handleActionClick={handleActionDelete} /></div>
            </div>
          )
        })
      }
    </div>
  )
}
