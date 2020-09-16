import React from 'react'
import css from './button.module.css'

export default function Button({handleOpenModal}) {
  const internalHandleOpenModal = () => {
    handleOpenModal()
  }

  return (
    <div className={css.buttonStyle}>
      <button style={{width:'100%', marginLeft: '-10px'}} onClick={internalHandleOpenModal} className="waves-light btn modal-trigger" data-target="modalTransaction">Nova transação</button>
    </div>
  )
}
