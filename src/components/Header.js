import React from 'react'
function Header(props) {
    // console.warn("props ",props)
  return (
    <>
    <div className='add-to-cart'>
    </div>
    <span className='cart-count'>{props.data.length}</span>
    <img src={process.env.PUBLIC_URL +'/cart.png'} style= {{width : "79px", position : "absolute" ,right: "1%", top: "1%"}}  alt="Empty"/>
    <div>
    
    </div>
    </>
  )
}

export default Header;
