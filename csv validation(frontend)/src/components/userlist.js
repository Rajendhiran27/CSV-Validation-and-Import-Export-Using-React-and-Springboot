import React,{useState,useEffect} from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
// import { Navigate } from 'react-router-dom';
export default function(){
    const[user,setUser]=useState([]);
    const navigate = useNavigate();
    // const router=useRouter
    onclick=()=>{
        navigate('/update');
    }
    useEffect(()=>{
    axios({
        url:"http://localhost:8080/api/register",
        method:'GET',
        headers:{
            // authorization:'token'
        }
    }).then(response=>{
        console.log("Getting User Details Successfully",response.data);
        setUser(response.data);
    })
   . catch(error =>{
        console.log("Something went Wrong",error);
    })
  },[]);
  return(
    <div className='container'>
        <h3>List of Users</h3>
        <div>
            <table border="1" cellPadding="10" className="table table-bordered table-striped">
            <thead className="thead-dark">
                <tr>
                    {/* <th>ID</th> */}
                   
                    <th>Email</th>
                    <th>Password</th>
                    <th>Confirm Password</th>
                    <th>Phone Number</th>
                    <th>User Name</th>
                    <th>User  Files</th>
                    
    
                </tr>
                </thead>
                <tbody>
                {
                    user.map(users=>(
                        <tr >
                            
                            {/* <td>{users.id}</td> */}

                            <td>{users.emailId}</td>
                            <td>{users.password}</td>
                            <td>{users.confirmPassword}</td>
                            <td>{users.phoneNumber}</td>
                            <td>{users.userName}</td>
                            <td>
                            <button className="btn btn-danger ml-2"  onClick={() => {onclick}} > UserFiles</button>
                          
                            </td>
      
                        </tr>
                        
                    ))
                }
                </tbody>
            </table>
            {/* <button  type="open" className="btn btn-primary">Click to see UserFiles</button> */}
                          
        </div>
    </div>
  )
  

}