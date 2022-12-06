
import './App.css';
import  "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Homepage from './pages/Homepage';
// import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Carts from './pages/cart';
import Login from './pages/login';
import Signup from './pages/signup';
import Admin from './pages/admin';
import Adminlogin from './pages/adminlogin';
import Products from './pages/admin/products';
import Users from './pages/admin/users';
import Checkout from './pages/checkout';

function App() {
 
  return (
    <div className="App">
     
      <BrowserRouter>
     
     
      <Routes>
      <Route path='/home' element={<Homepage />}/>
      <Route path="/cart" element={<Carts />}/>
      <Route path="/" element={<Login/>}/>
      <Route path="/signin" element={<Signup/>}/>
      <Route path="/admin" element={<Admin/>}/>
      <Route path="/adminlogin" element={<Adminlogin/>}/>
      <Route path="/productlist" element={<Products/>}/>
      <Route path="/users" element={<Users/>}/>
      <Route path="/cart/checkout" element={<Checkout/>}/>
   
      </Routes>

      </BrowserRouter>
     

 {/* <Homepage/>
 <Cart/> */}
     
    </div>
  );
}

export default App;
