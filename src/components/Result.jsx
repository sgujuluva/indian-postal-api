
import React from 'react'

function Result({result}) {
  return (
    <div>
       {result.map((item,i) => {
         return (
         <div key={i}>
            {item.Name}
         </div>
        )
       })} 
    </div>
  )
}

export default Result