import React,{useState} from "react"
import axios from "axios"
import '../APP.css';
import { useNavigate } from "react-router-dom";
// import signup from "./signup";
export default function (props) {
  let [authMode, setAuthMode] = useState("signup")
  const navigate=useNavigate();
  const[id,setId]=useState("");
  const[emailId,setEmailId]=useState("");
  const[password,setPassword]=useState("");
  const changeAuthMode = () => {
    setAuthMode(authMode === "signup" ? "signin" : "signup")
  }
  const changeAuthMode1= () => {
    setAuthMode(authMode === "admin" ? "signin" : "admin")
  }
  async function handleSubmit(event){
    event.preventDefault();
    try{
      await axios.post("http://localhost:8080/api/login",{
        // id:id,
        emailId:emailId,
        password:password
      });
      alert("Login Successfully");
      navigate("/fileupload");
      // setId("");
      setEmailId("");
      setPassword("");
    }
    catch(err){
      alert("Login Failed");
    }
  }
   if (authMode === "signup") {
    

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
                               <form onSubmit={handleSubmit}>
                                   <div class="mb-3">
                                       <input id="inputEmail" type="email" placeholder="Email address" required="" autofocus="" onChange={(event)=>{setEmailId(event.target.value);}} class="form-control rounded-pill border-0 shadow-sm px-4" />
                                   </div>
                                   <div class="mb-3">
                                       <input id="inputPassword" type="password" placeholder="Password" required="" onChange={(event)=>{setPassword(event.target.value);}} class="form-control rounded-pill border-0 shadow-sm px-4 text-primary" />
                                   </div>
                                   <div class="form-check">
                                       <input id="customCheck1" type="checkbox" checked class="form-check-input" />
                                       <label for="customCheck1" class="form-check-label">Remember password</label>
                                   </div>
                                   <div class="d-grid gap-2 mt-2">
                                   <button type="submit" class="btn btn-primary btn-block text-uppercase mb-2 rounded-pill shadow-sm">Sign in</button>
                                   </div>
                                              <div className="text-center">
              Not registered yet?
              <span className="link-primary" onClick={changeAuthMode}>
              <a href="/signup">Sign Up</a>
              </span>
            </div>
                                   
                                   {/* <div class="text-center d-flex justify-content-between mt-4"><p>Code by <a href="#" class="font-italic text-muted"> 
                                           <u>Jassa</u></a></p></div> */}
                                                      <div className="text-center">
              Admin Login?
            <span className="link-primary" onClick={changeAuthMode1}>
              <a href="/admin">Admin Login</a>
            </span>
            </div>
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
}
