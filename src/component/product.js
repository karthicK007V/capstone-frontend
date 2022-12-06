import React from 'react'
import { useContext } from 'react';
import { Cart } from '../context/context';
function Product({product}) {
  const {cart,setcart} = useContext(Cart)
  // console.log(cart);
  return (
    <div>
        {/* <h1>{product}</h1> */}
        <div className='container m-3 '>
        <div className="card " style={{width: '28rem'}}>
  <img src={product.image} className="card-img-top" alt="..." style={{height:"200px",width:"auto"}}/>
  <div className="card-body">
    <h3 className="card-title">{product.name}</h3>
    <h3 className="card-text">Price : ₹ {product.price}</h3>
    {cart.includes(product)?  <button className='btn btn-danger btn-lg ' onClick={()=>{setcart(cart.filter(e=>e.name!==product.name))}}
                    >Remove From Cart</button>:
                      <button className='btn btn-danger btn-lg ' onClick={()=>{setcart([product,...cart])}}
                    >Add To Cart</button>}
    {/* <button className='btn btn-danger btn-lg ' onClick={()=>{setcart(cart.filter(e=>e.name!==product.name))}}
                    >Remove From Cart</button>:
                      <button className='btn btn-danger btn-lg ' onClick={()=>{setcart([product,...cart])}}
                    >Add To Cart</button> */}
  </div>
</div>
</div>
      
    </div>
  )
}

export default Product
