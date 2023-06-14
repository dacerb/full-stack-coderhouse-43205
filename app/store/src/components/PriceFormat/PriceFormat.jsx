import React from 'react'

const PriceFormat = ({value}) => {
  return (

        <span>{
          value.toLocaleString("en", {
              style: "currency",
              currency: "USD"
          })
      }</span>
 
  )
}

export default PriceFormat