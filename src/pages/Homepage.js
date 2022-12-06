import React,{useState,useEffect,useContext} from 'react';
// import Pizza from '../component/pizza';
import Navbar from '../component/navbar';
// import product from "../pizzadata"
import Product from '../component/product';
import { Cart } from '../context/context';

import axios from 'axios'


const Homepage = () => {

    const {cart} = useContext(Cart)
    
    const [product,setproduct]=useState([])

  

    useEffect(() => {
        const getproduct=async ()=>{
            const res= await axios.get("https://food-order-o8dr.onrender.com/api/getproduct");
            // console.log(res.data);
           setproduct(res.data)
          
         }
          getproduct()
    
    }, [])
   
   
     

 
    



return (
    <div>
         <Navbar cart={cart} />
        <div className='row'>
            {
                product.map((prod) => {
                    return <div className='col-md-4' key={prod._id}>
                        <div>
                            <Product product={prod}    />
                        </div>
                    </div>
                })
            }
        </div>
    </div>
);

}

export default Homepage;
