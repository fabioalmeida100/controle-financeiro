import React from 'react'
import css from './button.module.css'

export default function Button({handleOpenModal, type}) {
  const internalHandleOpenModal = () => {
    handleOpenModal(type)
  }

  return (
    <div className={css.buttonStyle}>
      <button style={{width:'100%'}} onClick={internalHandleOpenModal} className="waves-light btn modal-trigger" data-target="modalTransaction">Nova transação</button>
    </div>
  )
}
