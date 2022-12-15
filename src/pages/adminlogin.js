
import React, { useState } from 'react';
import { Link,  useNavigate } from 'react-router-dom';

const Adminlogin = () => {
    const navigate=useNavigate()
    const [formdata,setformdata]=useState({
      password:""

    })
    const [error,seterror]=useState()


    const HandelSubmit=(e)=>{
      e.preventDefault();
     
        // console.log(formdata);

        if(formdata.password==="admin@123"){
          navigate("/admin")

        }else{
          seterror("Your Not A Admin Only Login Admin")

        }
     
        
    }
    return (
        <div>
            {/* <h1>Admin login</h1> */}
            <section className="vh-100">
  <div className="container-fluid">
    <div className="row">
      <div className="col-sm-6 text-black">

        <div className="px-5 ms-xl-4">
          <i className="fas fa-crow fa-2x me-3 pt-5 mt-xl-4" style={{"color": "#709085"}}></i>
          <span className="h1 fw-bold mb-0">Admin Login</span>
        </div>
        <br></br>
        <br></br>
        <br></br>
        <h3><span className="badge  text-bg-danger">{error}</span></h3>



        <div className="d-flex align-items-center h-custom-2 px-5 ms-xl-4 mt-5 pt-5 pt-xl-0 mt-xl-n5">

          <form style={{"width": "23rem"}}  onSubmit={(e)=>HandelSubmit(e)}>

           

            <div className="form-outline mb-4">
            {/* <h3><span className="badge  text-bg-danger">{error}</span></h3> */}
             
           
            </div>
            <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                    <div className="form-outline flex-fill mb-0">
                      <input type="password" id="form3Example4c" className="form-control" name='password' value={formdata.password}
                       onChange={(e)=>setformdata({...formdata,password:e.target.value})} required/>
                      <label className="form-label" htmlFor="form3Example4c" >Admin Key</label>
                    </div>
                  </div>

       

            <div className="pt-1 mb-4">
              <button className="btn btn-info btn-lg btn-block" type="submit">Login</button>
            </div>

           
            <p>Only For The Admin  <Link to="/" href="#!" className="link-info">User Login</Link></p>
            <h4>Admin Key : admin@123</h4>

          </form>
        

        </div>

      </div>
      <div className="col-sm-6 px-0 d-none d-sm-block">
        <input type="image" img src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRR5HOs2maeH3xfbseXwyfpqXx5y88m8583Pg&usqp=CAU"}
          alt="Login image" className="w-100 vh-100" />
      </div>
    </div>
  </div>
</section>
        </div>
    );
}

export default Adminlogin;
