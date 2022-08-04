import React from 'react'

function Home(props) {
    // console.warn("props ",props)
  return (
    <>
    <div>
     <h1>Home Component</h1>
    </div>
    <div className='cart-wrapper'>
    <div className='img-wrapper item'>
    <img src='https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg' style={{width:'100px'}} alt="Empty"/>
    </div>
    <div className='text-wrapper item'>
        <span>
            Nature-pic
        </span>
        <span>
            price: $100.00
        </span>
    </div>
    <div className='btn-wrapper item'>
        <button  onClick={()=>props.addToCartHandler({price:1000,name:'naturepic'})} style={{'cursor':'pointer'}} >
            Add To cart
        </button>
        <button onClick={()=>props.removeToCartHandler()} className = "remove-cart"style={{'cursor':'pointer'}}>
            Remove To cart
        </button>
    </div>
    </div>
    </>
  )
}

export default Home
