import React from 'react'
import { ADD_TO_CART ,REMOVE_TO_CART} from '../constant'

export const addTocart = (data) => {
  console.warn("action", data)
  return( {
    type : ADD_TO_CART,
    data: data
  })
    
}



export const removeTocart = () => {
    return ({
        type : REMOVE_TO_CART,
        // data: data
        
    })
  }
  
