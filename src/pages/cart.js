import React, { useState, useEffect } from 'react';
import Navbar from '../component/navbar';
import { Cart } from '../context/context';

import { useContext } from 'react';
import { AiFillDelete } from 'react-icons/ai';
import {  useNavigate } from 'react-router-dom';


import useRazorpay from "react-razorpay";




const Carts = () => {
    const Razorpay = useRazorpay();
    const navigate=useNavigate();


    const { cart, setcart } = useContext(Cart)
    const [total, settotal] = useState();
    useEffect(() => {
        settotal(cart.reduce((acc, cuu) => acc + cuu.price, 0))

    }, [cart])
    
    
    const checkout=()=>{
        const options = {
            key: "rzp_test_5Pc7XAWwFwhOM8",
            amount:total*100+10000,
            currency: "INR",
            name: "FOOD COURT",
            description: "Test Transaction",
            // image: "https://example.com/your_logo",
          
            handler: (res) => {
              console.log(res);
              alert(`${res.razorpay_payment_id}`)
              navigate("/cart/checkout")
            },
            prefill: {
              name: "karthick",
              email: "karthi.16v@gmail.com",
              contact: "9994729177",
            },
            notes: {
              address: "Razorpay Corporate Office",
            },
            theme: {
              color: "#3399cc",
            },
          };
      
          const rzpay = new Razorpay(options);
          rzpay.open();
       
       

    }

    


  
   
   
    return (
        <div>
            <Navbar />
            <h2>Shopping Cart</h2>
            
            
            <div className='container'>
                <div className='row'>
                    <div className='col-md-6 m-1 border '>
                    
                        <div>
                            {
                                cart.map((product) => {
                                    return <div key={product._id}>
                                      
                                        <main className="page m-2">
                                            <section className="shopping-cart dark">
                                                <div className="container">
                                                    <div className="block-heading">

                                                    </div>
                                                    <div className="content">
                                                        <div className="row">
                                                            <div className="">
                                                                <div className="items">
                                                                    <div className="product">
                                                                        <div className="row">
                                                                            <div className="col-md-5">
                                                                                <img className="img-fluid mx-auto d-block image" src={product.image} alt="My Awesome " style={{height:"100px"}}  />
                                                                            </div>
                                                                            <div className="col-md-5">
                                                                                <div className="info">
                                                                                    <div className="row">
                                                                                        <div className="col-md-5 product-name">
                                                                                            <div className="product-name">

                                                                                                <div className="product-info">
                                                                                                    <h4> <span className="value">{product.name}</span></h4>
                                                                                                    <h4>Price: <span className="value">{product.price}₹</span></h4>


                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                        <div className="col-md-2 quantity m-5 " >
                                                                                       
                                                                                            <button className='btn btn-danger ' onClick={() => { setcart(cart.filter(e => e.name !== product.name)) }}
                                                                                            ><AiFillDelete /></button>
                                                                                           
                                                                                        </div>
                                                                                       
                                                                                    
                                                                                        

                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>

                                                                </div>
                                                            </div>

                                                        </div>
                                                    </div>
                                                </div>
                                                <hr className="border border-dark w-100vh h-2px m-2"></hr>
                                            </section>
                                        </main>
                                        



                                    </div>

                                })
                            }
                            
                        </div>
                     

                    </div>
                    <div className='col-md-4 m-1 border'>
                        
                        
                             <div className="col-md-12 col-lg-4">
                            <div className="summary">
                                <h3 className='fs-1'>Summary</h3>
                                <div className="summary-item fs-2"><span className="text">Subtotal</span><span className="price">:₹ {total}</span></div>
                                <br></br>
                                
                                <div className="summary-item fs-2"><span className="text">Discount</span><span className="price">:₹ 50</span></div>
                                <br></br>
                                
                                <div className="summary-item fs-2"><span className="text">Shipping</span><span className="price">:₹ 150</span></div>
                                <br></br>
                                
                                <div className="summary-item fs-1"><span className="text">Total</span><span className="price"> :₹ {100+total}</span></div>
                                <br></br>
                                
                                <br></br>
                                
                              {/* <Link to="/cart/checkout">   */}
                              <button type="button fs-2" className="btn btn-primary btn-lg btn-block" onClick={(e)=>checkout()}>Checkout</button>
                              {/* </Link> */}
                            </div>
                        </div>
                    </div>
                </div>
               
            </div>




        </div>
    );
}

export default Carts;
