import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios"


const Login = () => {
  const navigate=useNavigate()
  const [formdata,setformdata]=useState({
    email:"",
    password:""
  })

  const [error,seterror]=useState()

  const HandelSubmit=async(e)=>{
    e.preventDefault();
    // console.log(formdata);
    try {
    


      const res= await axios.post("https://food-order-o8dr.onrender.com/api/signin",{...formdata});
      // console.log(res);
      const message=res.data.message;
      if(res.data.token){
       
     
       navigate("/home")
   
      }else{
     
        seterror(message)
      }
      
    } catch (error) {
      console.log(error);
      
    }
  



  }
  
    return (
        <>
        <section className="vh-100">
  <div className="container-fluid">
    <div className="row">
      <div className="col-sm-6 text-black">

        <div className="px-5 ms-xl-4">
          <i className="fas fa-crow fa-2x me-3 pt-5 mt-xl-4" style={{"color": "#709085"}}></i>
          <span className="h1 fw-bold mb-0">FOOD COURT</span>
        </div>
        <br></br>
        <br></br>
        <br></br>
        <h3><span className="badge  text-bg-danger">{error}</span></h3>


        <div className="d-flex align-items-center h-custom-2 px-5 ms-xl-4 mt-5 pt-5 pt-xl-0 mt-xl-n5">

          <form style={{"width": "23rem"}} onSubmit={(e)=>HandelSubmit(e)}>

            <h3 className="fw-normal mb-3 pb-3" >Log in</h3>

            <div className="form-outline mb-4">
              <input type="email" id="form2Example18" className="form-control form-control-lg"  name="email"
                  value={formdata.email}
                  onChange={(e)=>setformdata({...formdata,email:e.target.value})}  required/>
              <label className="form-label"  >Email </label>
            </div>

            <div className="form-outline mb-4">
              <input type="password" id="form2Example28" className="form-control form-control-lg" name="password"
                   value={formdata.password}
                   onChange={(e)=>setformdata({...formdata,password:e.target.value})} required />
              <label className="form-label"  >Password</label>
            </div>

            <div className="pt-1 mb-4">
              <button className="btn btn-info btn-lg btn-block" type="submit">Login</button>
            </div>

           
            <p>Don't have an account? <Link to="/signin" href="#!" className="link-info">Register here</Link></p>

          </form>

        </div>

      </div>
      <div className="col-sm-6 px-0 d-none d-sm-block">
        <input type="image" img src={"https://media.istockphoto.com/id/1271787791/photo/login-and-password-cyber-security-concept-data-protection-and-secured-internet-access.jpg?b=1&s=170667a&w=0&k=20&c=Avq7ejzgxbLml4napHVXC0Ao_ZA5YUUqv7NUBU6ndN8="}
          alt="Login image" className="w-100 vh-100" />
      </div>
    </div>
  </div>
</section>
    
        </>
    );
}

export default Login;
