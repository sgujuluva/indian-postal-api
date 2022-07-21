//lib
import { useState } from "react";
//components
import Forms from "./components/Forms";
import Result from "./components/Result";

//styles
import "./App.css";

function App() {

   const [result, setResult] = useState([]);

  return (
    <div className="container">
      <h1>Indian Postal API</h1>
      <Forms setResult={setResult} />
      <Result result={result} />
      {console.log("the resut is:", result)}
    </div>
  );
}

export default App;
