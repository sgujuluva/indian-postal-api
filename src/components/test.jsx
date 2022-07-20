function Forms() {
  const [value, setValue] = useState();
  const [result, setResult] = useState([]);
  
 

  let handleClickPinCode = (e) => {
    e.preventDefault();
    fetch(`https://api.postalpincode.in/pincode/${value}`)
      .then((response) => response.json())
      .then((data) =>  setResult(data[0].PostOffice) );
  };

  let handleClickBranch = (e) => {
    e.preventDefault();
    fetch(`https://api.postalpincode.in/postoffice/${value}`)
      .then((response) => response.json())
      .then((data) =>   console.log(data)/* setResult(data[0].PostOffice) */ );
  };

  const handleChange = (e) => {
    setToggle({ [e.target.value]: e.target.checked });
    }; 

  return (
    <div>
      <h1>Indian Postal API</h1>
      <form>
        <input type="text" onChange={(e) => setValue(e.target.value)} />
        <button onClick={toggle.pin ? handleClickPinCode :handleClickBranch }>Search</button>
        <button /* onClick = {} */>Close</button>
        
      </form>
      <Pin onChange={handleChange } />
      <Postal onChange={handleChange }/>
      <Result result={result} />
      <ResultBranch/>
    </div>
  );
}

export default Forms;


// new code

import React, { useEffect, useState } from "react";
//components
import Postal from "./Postal";
import Pin from "./Pin";
import Result from "./Result";
import ResultBranch from "./ResultBranch";

function Forms() {
  const [value, setValue] = useState();
  const [result, setResult] = useState([]);
  const [toggle, setToggle] = useState("pin");
  const handleChange = (id) => {
    setToggle(id);
  };

  const handleSubmit = (e, value) => {
    e.preventDefault();
    setToggle(toggle);
    console.log(toggle);
    console.log(value);
    if (toggle === "pin") {
      fetch(`https://api.postalpincode.in/pincode/${value}`)
        .then((response) => response.json())
        .then((data) => {
          setResult(data[0].PostOffice);
        });
    } else {
      fetch(`https://api.postalpincode.in/postoffice/${value}`)
        .then((response) => response.json())
        .then((data) => {
          setResult(data[0].PostOffice);
        });
    }
  };

  return (
    <div>
      <h1>Indian Postal API</h1>
      <form onSubmit={(e) => handleSubmit(e, value)}>
        <input type="text" onChange={(e) => setValue(e.target.value)} />
        <button>Search</button>
        <button /* onClick = {} */>Close</button>
      </form>
      <Pin handleChange={handleChange} />
      <Postal handleChange={handleChange} />
      <Result result={result} />
      <ResultBranch />
    </div>
  );
}

export default Forms;