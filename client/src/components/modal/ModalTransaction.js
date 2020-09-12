import React, { useState, useEffect } from 'react'
import Modal from 'react-modal'
import moment from 'moment'
import { findOne, insertTransaction, updateTransaction } from '../../api/apiService'

Modal.setAppElement('#root');


export default function ModalTransaction({idToEdit, handleCloseModal}) {
  const DATE_NOW = new Date();
  const DATE_NOW_YYYYMMDD = 
    `${DATE_NOW.getUTCFullYear().toString()}-${(DATE_NOW.getUTCMonth()+1).toString().padStart(2, '0')}-${DATE_NOW.getUTCDate().toString().padStart(2, '0')}`;

  const [type, setType] = useState('-');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [value, setValue] = useState(0);
  const [yearMonthDay, setYearMonthDay] = useState(DATE_NOW_YYYYMMDD);
  const [yearMonth, setYearMonth] = useState(DATE_NOW_YYYYMMDD.substr(0,7));
  const [year, setYear] = useState(parseInt(DATE_NOW_YYYYMMDD.substr(0,4)));
  const [month, setMonth] = useState(parseInt(DATE_NOW_YYYYMMDD.substr(5,2)));
  const [day, setDay] = useState(parseInt(DATE_NOW_YYYYMMDD.substr(8,2)) );

  useEffect(() => {
    const findTransaction = async () => {      
      if (idToEdit != null) {
        const transaction = await findOne(idToEdit);
        const { description, value, category, type, yearMonthDay, yearMonth, year, month, day } = transaction.data;

        setDescription(description);
        setValue(value);
        setCategory(category);
        setType(type);
        setYearMonthDay(yearMonthDay);        
        setYearMonth(yearMonth);        
        setYear(year);
        setMonth(month);
        setDay(day);
      }
    }
    findTransaction();
  }, [])
  
  const handleChangeDate = (event) => {
      setYearMonthDay(event.target.value);
      setYearMonth(event.target.value.substr(0,7));
      setYear(parseInt(event.target.value.substr(0,4)));
      setMonth(parseInt(event.target.value.substr(5,2)));
      setDay(parseInt(event.target.value.substr(8,2)));  
  } 

  const handleType = (event) => {
    setType(event.target.value);
  }

  const handleDescription = (event) => {
    setDescription(event.target.value);
  }

  const handleCategory = (event) => {
    setCategory(event.target.value);
  }

  const handleValue = (event) => {
    setValue(parseFloat(event.target.value));
  }
  
  const handleSave = async (event) => {
    event.preventDefault();

    if (validations()) {
      let transaction = {
        type,
        description, 
        category,
        value, 
        yearMonthDay, 
        yearMonth,
        year,
        month,
        day
      }

      if (idToEdit != null) {
        transaction = {
          ...transaction,
          id: idToEdit
        }

        await updateTransaction(transaction);     
      } else {
        await insertTransaction(transaction);
      }

      handleCloseModal();
    }
  }

  const validations = () => {
    let isValid = true;

    if (!(moment(yearMonthDay).isValid())) {
      alert('Data informada inválida!');
      isValid = false;
    }

    return isValid;
  }

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
                  <div className="col m6">
                    <label>
                      <input name="transaction" type="radio" defaultValue='-' checked={type==='-'} onChange={handleType}/>
                      <span>Despesa</span>
                    </label>
                  </div>
                  <div className="col m6">
                    <label>
                      <input name="transaction" type="radio" defaultValue='+' checked={type==='+'} onChange={handleType}/>
                      <span>Receita</span>
                    </label>
                  </div>
                </div>

                <div className="row">
                  <label>Descrição:</label>
                  <input type="text" value={description} onChange={handleDescription}/>
                  <label>Categoria:</label>
                  <input type="text" value={category} onChange={handleCategory}/>
                  <label>Valor:</label>
                  <input type="number" value={value} onChange={handleValue}/>
                  <input type="date" onChange={handleChangeDate} value={yearMonthDay}/>
                  <button className="btn" onClick={handleSave}>Salvar</button>
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