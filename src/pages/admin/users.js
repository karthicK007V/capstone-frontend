import axios from 'axios';
import React,{useState,useEffect} from 'react';
import AdminNavbar from '../../component/adminNavbar';

const Users = () => {
const[user,setuser]=useState([])
useEffect(()=>{
    const userdata=async()=>{
        const res=await axios.get("https://food-order-o8dr.onrender.com/api/getuser");
        
        setuser(res.data)
    }
    userdata()
},[])

    return (
        <div>
            <AdminNavbar/>
          
            <table className="table   table-striped container fs-3 border">
  <thead className='table-dark'>
    <tr>
      <th scope="col">No</th>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col">ID</th>
    </tr>
  </thead>
  

    {
        user.map((user,i)=>(
        
                <tbody  key={user._id}>
                <tr>
      <th scope="row">{i+1}</th>
      <td>{user.name}</td>
      <td>{user.email}</td>
      <td>{user._id}</td>
    </tr>

                </tbody>

         
        ))
    }



   
  
  
</table>
            
        </div>
    );
}

export default Users;
