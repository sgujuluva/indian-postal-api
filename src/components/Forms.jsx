//lib
import { useState } from "react";

function Forms({ setResult }) {
  const [value, setValue] = useState("");

  console.log(value);

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch(
      e.target.search.value === "pin"
        ? `https://api.postalpincode.in/pincode/${value}`
        : `https://api.postalpincode.in/postoffice/${value}`
    )
      .then((response) => response.json())
      .then((data) => setResult(data[0].PostOffice));
  };

  return (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <div className="input-search">
        <input  type="text" onChange={(e) => setValue(e.target.value)} />
        <button>Search</button>
        </div>
        <div className="radio">
        <input  value="pin" type="radio" name="search" id="pin-search" />
        <label htmlFor="pin-search">Search by Postal PIN Code</label>
        <input  value="branch" type="radio" name="search" id="postal-search" />
        <label htmlFor="postal-search">Search by Post Office Branch Name</label>
        </div>
       
      </form>
    </div>
  );
}

export default Forms;
