import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import edit from './edit';
export default function(props){
    const[user,setUser]=useState([]);
    const init=()=>{
        edit.getAll()
        .then(response=>{
            console.log('Getting Files Successfully',response.data);
            setUser(response.data);
        })
        .catch(error=>{
            console.log("Somthing Went Wrong",error);
        })
    }
    useEffect(() => {
        init();
      }, []);
      const handleDelete=(id)=>{
        console.log('printing id',id);
        edit.remove(id)
        .then(response=>{
            console.log("Data Deleted successfully",response.data);
            init();
        })
        .catch(error=>{
            console.log("Somthing Went Wrong",error);
        })
      }
      return(

                <div className='container'>
                    <h3>List of Datas</h3>
                    <div>
                    <Link to="/adminpanel" className="btn btn-primary mb-2">Add Data</Link>
                        <table className="table table-bordered table-striped">
                        <thead className="thead-dark">
                            <tr>
                                {/* <th>ID</th> */}
                                {/* <th>ID</th> */}
                               
                                <th>Email</th>
                                <th>Password</th>
                                <th>Phone Number</th>
                                <th>Last Name</th>
                                <th>First Name</th>
                
                            </tr>
                            </thead>
                            <tbody>
                            {
                                user.map(users=>(
                                    <tr key={users.id}>
                                        
                                        {/* <td>{users.id}</td> */}
            
                                        <td>{users.email}</td>
                                        <td>{users.password}</td>
                                        <td>{users.phonenumber}</td>
                                        <td>{users.lastname}</td>
                                        <td>{users.firstname}</td>
                                        <td>
                                        <Link className="btn btn-info" to={`/adminpanel/edit/${users.id}`}>Update</Link>
                                        <button className="btn btn-danger ml-2" onClick={() => {
                                handleDelete(users.id);
                              }}>Delete</button>
                                        </td>
                  
                                    </tr>
                                ))
                            }
                            </tbody>
                        </table>
                    </div>
                </div>
              )
      
}