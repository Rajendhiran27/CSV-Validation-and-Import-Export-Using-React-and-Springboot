import React, { useState } from "react";
import CSVFileValidator from "csv-file-validator";
// import { CSVLink } from "react-csv";
// import { Container, Row, Col, Form, Button, ProgressBar } from "react-bootstrap"
import axios from 'axios';

let requiredError = (headerName, rowNumber, columnNumber) => {
  return `<div class="red">${headerName} is required in the <strong>${rowNumber} row</strong> / <strong>${columnNumber} column</strong></div>`;
};
let validateError = (headerName, rowNumber, columnNumber) => {
  return `<div class="red">${headerName} is not valid in the <strong>${rowNumber} row</strong> / <strong>${columnNumber} column</strong></div>`;
};
let uniqueError = (headerName) => {
  return `<div class="red">${headerName} is not unique</div>`;
};
let isEmailValid = function (email) {
  let reqExp = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/;
  return reqExp.test(email);
};
let isPasswordValid = function (password) {
  return password.length >= 4;
};
let isPhoneNumberValid=function(phonenumber){
  return phonenumber.length >=1;
}
let CSVConfig = {
  headers: [
    {
      name: "id",
      inputName: "id",
      required: true,
    },
    {
      name: "firstname",
      inputName: "firstname",
      required: true,
      requiredError
    },
    { name: "lastname", inputName: "lastname", required: true, requiredError },
    {
      name: "email",
      inputName: "email",
      required: true,
      requiredError,
      unique: true,
      uniqueError,
      validate: isEmailValid,
      validateError
    },
    {
      name: "password",
      inputName: "password",
      required: true,
      requiredError,
      validate: isPasswordValid,
      validateError
    },
    {
      name: "phonenumber",
      inputName: "phonenumber",
      required: true,
      requiredError,
      validate:isPhoneNumberValid,
      validateError
    }
  ]
};

export default function ValidateCSV() {
  

let [csvData, setCsvData] = useState("");
const [file, setFile] = useState();
const[uploaded,setUploaded]=useState(null);
let handleChange = (e) => {
  setFile(e.target.files[0]);{
  CSVFileValidator(e.target.files[0], CSVConfig).then((csvData) => {
    csvData.inValidMessages.forEach((message) => {
      document
        .getElementById("invalidMessages")
        .insertAdjacentHTML("beforeend", message);
    });

    setCsvData(csvData.data);
  });
};
};

console.log({ csvData });
function handleSubmit(event) {
  
  event.preventDefault()
  const url = 'http://localhost:8080/api/csv/upload';
  const formData = new FormData();
  formData.append('file', file);
  // formData.append('fileName', file.name);
  const config = {
    headers: {
      'content-type': 'multipart/form-data',
    },
  };
  axios.post(url, formData,config)
      // console.log(data.loaded,data.total);
    //  console.log(Math.round((data.loaded/data.total)*100));
  
  .then((response) => {
    
    console.log(response.data);
  })
  .then(response=>{
    alert("Upload Successfully");
  })
  .catch(error=>{
    alert("Somthing Went Wrong or Unique data Found");
  })
  // function handleChange(event) {
//   setFile(event.target.files[0])
// }

}
return (
  <div className="validate-csv">
    <form onSubmit={handleSubmit}>
    <div className="input-box">
      <input type="file" accept=".csv" id="file" onChange={handleChange} />
      {/* {uploaded &&(<div className="progress mt-2">
        <div className="progress-bar" role='progressbar' aria-valuenow={uploaded} aria-valuemin='0' aria-valuemax='100' style={{width:`${uploaded}%`}} >{`${uploaded}%`}
          
        </div>
      </div>)} */}
      {/* {uploaded && <ProgressBar now={uploaded} label={`${uploaded}%`} />} */}

      <button type="submit" className="btn btn-primary mt-2">Upload</button>

    </div>
    <div id="invalidMessages" />
    </form>
    {/* <CSVLink
      className="download"
      headers={headerCsvDownloadConfig}
      data={csvData}
      filename="demo.csv"
      target="_blank"
    >
      Download
    </CSVLink> */}
  </div>
);


}
