import React, { useEffect, useState } from 'react';
import { Cart } from '../context/context';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../component/navbar';

const Checkout = () => {
    const [total, settotal] = useState();
    const { cart, setcart } = useContext(Cart)
    const empty=()=>{
        setcart([])
    }
 
    useEffect(() => {
        settotal(cart.reduce((acc, cuu) => acc + cuu.price, 0))

    }, [cart])

    return (
        <>
        <Navbar/>
            <div className='container fs-4 border'>

                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">No</th>
                            <th scope="col">Name</th>
                            <th scope="col">Image</th>
                            <th scope="col">Price</th>
                        </tr>
                    </thead>
                    {
                        cart.map((product, i) => {
                            return <tbody key={product._id}>
                                <tr>
                                    <th scope="row">{i + 1}</th>
                                    <td>{product.name}</td>
                                    <td><img src={product.image} style={{ height: '100px' }} alt="nice"/></td>
                                    <td>{product.price}</td>
                                </tr>

                            </tbody>

                        })
                    }

                </table>
            </div>
            {cart.length>=1?(  <div>

<h2>Total value :  {total} ₹</h2>
<h2>Total Item : {cart.length}</h2>

<h2> <span className="badge text-bg-success m-3">Your Order SuccessFully Booking</span></h2>
<Link to="/home" refresh="true">  <button type="button" className=" btn-lg btn btn-info"  onClick={empty} >Continous Shopping -></button></Link>

</div>):(<></>)}
          
        </>
    );
}

export default Checkout;
