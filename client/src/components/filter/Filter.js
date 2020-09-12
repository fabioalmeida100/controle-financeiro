import React from 'react'

export default function Filter({handleFilter}) {
  return (
    <div>
       <input type="text" placeholder="Digite a descrição da transação" onChange={handleFilter}/>
    </div>
  )
}
