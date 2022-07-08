import React from 'react'

function Pin(props) {
  return (
    <div>
      <input onChange={props.handleChange} value = "pin" type="radio" name="search" id="pin-search" />
      <label htmlFor="pin-search">Search by Postal PIN Code</label>
      </div>
  )
}

export default Pin