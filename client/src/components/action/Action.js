import React from 'react'

export default function Action({id, type, handleActionClick}) {
  const onInternalClick = () => {
    handleActionClick(id);
  }
  return (
    <div>
      <i className="small material-icons"
        onClick={onInternalClick}
        style={{ cursor: 'pointer' }}
      >{type}</i>
    </div>
  )
}
