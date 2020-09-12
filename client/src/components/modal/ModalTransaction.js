import React, { useState, useEffect } from 'react'
import Modal from 'react-modal'

Modal.setAppElement('#root');

export default function ModalTransaction({handleCloseModal}) {
  
  return (
    <div>
      <Modal
          isOpen={true}
          style={customStyles}     
        >           
          <div className="row">
            <div className="col m10" style={{fontSize: '1.5em', fontWeight: '400'}}>
              Edição de lançamento
            </div>
            <div className="col m2">
              <a className="btn red" onClick={handleCloseModal} style={{cursor:'pointer'}}>X</a>
            </div>
          </div>
          <div className="row" style={{width: '300px'}}>
            <form>
                <div className="row">
                  <label>
                    <input name="transaction" type="radio" checked />
                    <span>Despesa</span>
                  </label>
                  <label>
                    <input name="transaction" type="radio" />
                    <span>Receita</span>
                  </label>
                </div>

                <div className="row">
                  <label>Descrição:</label>
                  <input type="text"/>
                  <label>Categoria:</label>
                  <input type="text"/>
                  <label>Valor:</label>
                  <input type="number"/>
                  <input type="date"/>
                  <button className="btn">Salvar</button>
                </div>
            </form>
          </div>
        </Modal>
    </div>    
  )
}

const customStyles = {
  content : {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    with: '100px'
  }
};