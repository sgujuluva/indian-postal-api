//lib
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Form } from "react-bootstrap";
import 'bootstrap-icons/font/bootstrap-icons.css';
import { FcSearch } from "react-icons/fc";
import { useState } from "react";
//import Forms from "./components/Forms";
import Result from "./components/Result";

const [pinCode, setPinCode] = useState();
const [result, setResult] = useState([]);

let handleSubmit = (e) => {
  e.preventDefault();
  fetch(`https://api.postalpincode.in/pincode/${pinCode}`)
    .then((response) => response.json())
    .then((data) => setResult(data[0].PostOffice));
};

<h1>Indian Postal API</h1>
      <Form >
        <input type="text" onChange={(e) => setPinCode(e.target.value)} />
        <Button type="button" className="btn btn-primary" onClick = {handleSubmit}>
           < FcSearch/> 
        </Button>
        
        <Button type="button" className="btn btn-secondary">
          Close
        </Button>
      </Form>
      <div>
        <input type="radio" name="search" value="pin-search" id="pin" />
        <label htmlFor="pin">Search by Postal PIN Code</label>
        <input type="radio" name="search" value="branch-search" id="branch" />
        <label htmlFor="branch">Search by Post Office Branch Name</label>
      </div>
      <Result result={result} />


      //form
      import React from 'react'
import { Button, Form } from "react-bootstrap";

function Forms() {
  return (
    <div>
      <Form > {/* onSubmit = {handleSubmit} */}
        <input type="text" />
        <Button type="button" className="btn btn-primary">
          Search
        </Button>
        {/* < FcSearch/> */}
        <Button type="button" className="btn btn-secondary">
          Close
        </Button>
      </Form>
        </div>
  )
}

export default Forms

//result