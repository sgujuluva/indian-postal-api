import React from 'react'

function Postal(props) {
  return (
    <div>
      <input onChange={props.handleChange} value = "branch" type="radio" name="search" id="postal-search" />
      <label htmlFor="postal-search">Search by Post Office Branch Name</label>
      </div>
  )
}

export default Postal