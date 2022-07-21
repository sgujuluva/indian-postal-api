
import React from 'react'

function Result({result}) {

  return (
    <div>
      { result && result.map(item => <div>{item.Name}</div>)} 
    </div>
  )
}

export default Result

/* result?.map(item => <div>{item.Name}</div>) */