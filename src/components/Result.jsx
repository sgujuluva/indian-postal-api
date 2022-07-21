
import React from 'react'

function Result({result}) {

  return (
    <div>
      { result && result.map(item => <div><li>{item.Name}</li></div>)} 
    </div>
  )
}

export default Result



/* result && result.map */
/* sortcut to write &&  */
/* result?.map(item => <div>{item.Name}</div>) */