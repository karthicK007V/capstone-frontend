import axios from 'axios'

import React, { useEffect, useState } from 'react';
import AdminNavbar from '../../component/adminNavbar';

const Products = () => {
  const [product, setproduct] = useState([]);
  const [formdata, setformdata] = useState({
    name: "",
    image: "",
    category: "",
    price: ""
  })

  const HandelUpdate=(_id)=>{
    const selectproduct=product.filter((product)=>product._id===_id)[0];
    console.log(selectproduct);
    setformdata({...formdata,...selectproduct})
    // console.log(formdata);
  }

  useEffect(() => {
    const getproduct = async () => {
      const res = await axios.get("https://food-order-o8dr.onrender.com/api/getproduct");
      // console.log(res.data);
      setproduct(res.data)
    }
    getproduct()
    // console.log(formdata);
  }, [formdata])

  const handleChange=(e)=>{
    setformdata({...formdata,[e.target.name]:e.target.value})
    // console.log(formdata);
  }
  const HandelSubmit=async(e)=>{
    e.preventDefault();

   if(formdata._id){
    const res=await axios.put(`https://food-order-o8dr.onrender.com/api/updateproduct/${formdata._id}`,{
      name:formdata.name,
      image:formdata.image,
      category:formdata.category,
      price:formdata.price
})
// console.log(res);
 let products=[...product];
 let index=product.indexOf((row)=>row.id===res.data.id);
 products[index]=res.data;
 setproduct(products)
 alert("Update the Products SuccessFully")
 setformdata({
        name: "",
        image: "",
        category: "",
        price: ""
      })

   }
      


      
  
    else{

      const createproduct = async () => {
        const res = await axios.post("https://food-order-o8dr.onrender.com/api/createproduct",{...formdata});
        // console.log(res.data);
        setproduct([...product,res.data])
        alert("Product Create Successfully")
        setformdata({
          name: "",
          image: "",
          category: "",
          price: ""
        })
      
      
  
     }
     createproduct()
    }


    
    
  }


  const handeldelete=async(_id)=>{
    
   const res= await axios.delete(`https://food-order-o8dr.onrender.com/api/deleteproduct/${_id}`);
   console.log(res);
  //  console.log(_id);
  
  alert(`Confirm The delete `)
   const currentproduct=product.filter((row)=>row._id!==product._id);
   setproduct(currentproduct);
  

  }
 
  return (
    <><AdminNavbar />
    <div className='container'>
      

      <h1 >Insert Product </h1>
      <br></br>
      <div className='container m-2 fs-3'>
        {/* <h1 className=''> Product Insert</h1> */}
        <form onSubmit={(e)=>HandelSubmit(e)} >
          <div className="row mb-3">
            <label  className="col-sm-2 col-form-label"> Product Name :</label>
            <div className="col-sm-10">
              <input className="form-control form-control-lg" type="text" id="inputEmail3" name="name" value={formdata.name} onChange={(e) => handleChange(e)} required/>
            </div>
          </div>


          <div className="row mb-3">
            <label  className="col-sm-2 col-form-label"> Image URL:</label>
            <div className="col-sm-10">
              <input className="form-control form-control-lg" id="formFileLg" type="string"  name="image" value={formdata.image} onChange={(e) => handleChange(e)} required />
            </div>
          </div>
          <div className="row m-4">
            <label  className="col-sm-2 col-form-label">Product Category :</label>
            <div className="col-sm-10">
              <input type="text" className="form-control form-control-lg " id="inputPassword3" name="category" value={formdata.category} onChange={(e) => handleChange(e)} required/>
            </div>
          </div>
          <div className="row mb-3">
            <label  className="col-sm-2 col-form-label " >Product Price :</label>
            <div className="col-sm-10">
              <input type="text" className="form-control form-control-lg " id="inputPassword3" maxLength="3" name="price" value={formdata.price} onChange={(e) => handleChange(e)} required />
            </div>
          </div>



          <button type="submit" className="btn btn-primary m-3">Submit</button>
        </form>
      </div>
{/* 
      <br></br>
      <br></br> */}
      


      <h1 className='m-2'> Products Details </h1>
      <div className=''>
     
        <table className="table   table-striped container fs-3 border m-4">
          <thead className="table table-dark m-1 ">
            <tr>
              <th scope="col">No</th>
              <th scope="col">Name</th>
              <th scope="col">Image</th>
              <th scope="col">category
              </th>
              <th scope="col">Price(₹)</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>



          {
            product.map((product, i) => {
              return <tbody  key={product._id}>

                <tr >
                  <th scope="row" >{i + 1}</th>
                  <td>{product.name}</td>
                  <img src={product.image} style={{ height: "100px", width: "100px" }} alt="nice"/>
                  <td>{product.category}</td>
                  <td>{product.price}</td>
                  <td>
                    <button className='m-1 btn btn-primary' onClick={(e)=>{HandelUpdate(product._id)}}>Edit</button>
                    <br></br>
                    <button className='btn btn-danger'onClick={(e)=>{handeldelete(product._id)}}>Delete</button>
                  </td>
                </tr>


              </tbody>


            })
          }


        </table>
      </div>



    </div>
    </>
  );
}

export default Products;
