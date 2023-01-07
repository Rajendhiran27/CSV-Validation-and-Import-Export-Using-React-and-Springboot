// import React, { useState } from "react";
import React,{useState} from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom";
import '../APP.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

export default function(props)  {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }

    
        return (
     
            <div className="maincontainer">
             <div class="container-fluid">
                 <div class="row no-gutter">
                    
                     <div class="col-md-6 d-none d-md-flex bg-image"></div>
                     
                     <div class="col-md-6 bg-light">
                         <div class="login d-flex align-items-center py-5">
                            
                             <div class="container">
                                 <div class="row">
                                     <div class="col-lg-10 col-xl-7 mx-auto">
                                         <h3 class="display-4"> login page</h3>
                                         {/* <p class="text-muted mb-4">Welcome User</p> */}
                                         <form>
                                             <div class="mb-3">
                                                 <input id="inputEmail" type="email" placeholder="Email address" required="" autofocus="" class="form-control rounded-pill border-0 shadow-sm px-4" />
                                             </div>
                                             <div class="mb-3">
                                                 <input id="inputPassword" type="password" placeholder="Password" required="" class="form-control rounded-pill border-0 shadow-sm px-4 text-primary" />
                                             </div>
                                             <div class="form-check">
                                                 <input id="customCheck1" type="checkbox" checked class="form-check-input" />
                                                 <label for="customCheck1" class="form-check-label">Remember password</label>
                                             </div>
                                             <div class="d-grid gap-2 mt-2">
                                             <button type="submit" class="btn btn-primary btn-block text-uppercase mb-2 rounded-pill shadow-sm">Sign in</button>
                                             </div>
                                             
                                             <div class="text-center d-flex justify-content-between mt-4"><p>Code by <a href="#" class="font-italic text-muted"> 
                                                     <u>Jassa</u></a></p></div>
                                         </form>
                                     </div>
                                 </div>
                             </div>
                         </div>
                     </div>
                 </div>
             </div>
           </div>
           
     )
}