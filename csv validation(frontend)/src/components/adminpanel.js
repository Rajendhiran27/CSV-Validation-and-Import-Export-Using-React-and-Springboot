import React,{useState,useEffect} from 'react';
// import axios from 'axios';
import { Link,  useParams,useNavigate } from "react-router-dom";

import edit from './edit';
export default function(props){
    // const[user,setUser]=useState([]);
    // const[id,setId]=useState();
    const[email,setEmail]=useState();
    const[password,setPassword]=useState();
    const[phonenumber,setPhonenumber]=useState();
    const[firstname,setFirstname]=useState();
    const[lastname,setLastname]=useState();
    
    const {id} = useParams();
    const navigate=useNavigate();


const saveDatas = (e) => {
    e.preventDefault();
    const users={id,email,password,phonenumber,firstname,lastname}
  if(id){
    edit.update(users)
    .then(response=>{
        console.log("Data Updated Succeessfully",response.data);
        navigate('/update');
    })
    .catch(error=>{
        console.log("Somthing Went Wrong",error);
    })
  }
  else{
    edit.create(users)
    .then(response=>{
        console.log("User added Successfully",response.data);
        navigate('/update');
    })
    .catch(error=>{
        console.log("Something went Wrong",error);
    })
  }
}
  useEffect(()=>{
  if(id){
    edit.get(id)
    .then(users=>{
        // setId(users.data.id);
        setEmail(users.data.email);
        setPassword(users.data.password);
        setPhonenumber(users.data.phonenumber);
        setFirstname(users.data.firstname);
        setLastname(users.data.lastname);
    })
    .catch(error=>{
        console.log("Somthing Went Wrong",error);
    })
  }

  },[])
  const handleDelete=(id)=>{
    console.log('printing id',id);
    edit.update(id)
    .then(response=>{
        console.log("Data Deleted successfully",response.data);
        init();
    })
    .catch(error=>{
        console.log("Somthing Went Wrong",error);
    })
  }


return(
    <div className="container">
        <h3>Add Data</h3>
        <hr/>
        <form>
        {/* <div className="form-group">
                <input 
                    type="text" 
                    className="form-control col-4"
                    id="id"
                    value={id}
                    onChange={(e) => setId(e.target.value)}
                    placeholder="Enter Id"
                />

            </div> */}
            <div className="form-group">
                <input 
                    type="text" 
                    className="form-control col-4"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter Email"
                />

            </div>
            <div className="form-group">
                <input 
                    type="text" 
                    className="form-control col-4"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter Password"
                />

            </div>
            <div className="form-group">
                <input 
                    type="text" 
                    className="form-control col-4"
                    id="phonenumber"
                    value={phonenumber}
                    onChange={(e) => setPhonenumber(e.target.value)}
                    placeholder="Enter PhoneNumber"
                />
            </div>
            <div className="form-group">
                <input 
                    type="text" 
                    className="form-control col-4"
                    id="firstname"
                    value={firstname}
                    onChange={(e) => setFirstname(e.target.value)}
                    placeholder="Enter FirstName"
                />
            </div>
            <div className="form-group">
                <input 
                    type="text" 
                    className="form-control col-4"
                    id="lastname"
                    value={lastname}
                    onChange={(e) => setLastname(e.target.value)}
                    placeholder="Enter LastName"
                />
            </div>
            <div >
                <button onClick={(e) => saveDatas(e)} className="btn btn-primary">Save</button>
            </div>
        </form>
        <hr/>
        <Link to="/update">Back to List</Link>
    </div>
)
  

}