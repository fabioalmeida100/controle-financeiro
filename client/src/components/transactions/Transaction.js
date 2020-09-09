import React from 'react'
import css from './transaction.module.css'
import { formatNumber } from '../../helper/formatHelpers'

export default function Transaction({allTransactions}) {
  return (
    <div className="row">
      {
        allTransactions.map(transaction => {
          return (
            <div className={`${css.item} valign-wrapper`} style={transaction.type === '-' ? {background: '#ff00005e'} : {background: '#0080008c'}}>
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
              <div className={`col m1`}><i class="small material-icons">create</i></div>
              <div className={`col m1`}><i class="small material-icons">delete</i></div>
            </div>
          )
        })
      }
    </div>
  )
}
