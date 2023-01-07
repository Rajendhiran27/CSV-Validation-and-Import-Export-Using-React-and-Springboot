// import React from "react";
// import { BrowserRouter, Switch, Route } from "react-router-dom";

// // import HomePage from "./pages/HomePage";
// import ValidatePage from "./components/ValidateCSV";

// export default function App() {
//   return (
//     <BrowserRouter>
//       <Switch>
//         <Route path="/" exact>
//           <ValidatePage />
//         </Route>
//       </Switch>
//     </BrowserRouter>
//   );
// }
// 
import "bootstrap/dist/css/bootstrap.min.css"
import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom"
import Signup from "./pages/signup"
import Signin from "./pages/signin"
import ValidateCSV from "./components/ValidateCSV"
import Admin from "./pages/admin"
import Adminpanel from "./components/adminpanel"
import Userlist from "./components/userlist"
import Update from "./components/update"
// import Login from "./pages/Login"
import './APP.css';
// import File from "./components/file"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Signin />} />
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/fileupload" element={<ValidateCSV/>}/>
        <Route path="/admin" element={<Admin/>}/>
        <Route path="/adminpanel" element={<Adminpanel/>}/>
        <Route path="/adminpanel/edit/:id" element={<Adminpanel/>}/>
        <Route path="/userlist" element={<Userlist/>}/>
        <Route path="/update" element={<Update/>}/>
        {/* <Route path="/login" element={<Login/>}/> */}
      </Routes>
    </BrowserRouter>
  )
}

export default App