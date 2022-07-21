//lib
import { useState } from "react";
//components
import Forms from "./components/Forms";
import Pin from "./components/Pin";
import Postal from "./components/Postal";
import Result from "./components/Result";
import ResultBranch from "./components/ResultBranch";

//styles
import "./App.css";

function App() {
  
  const [value, setValue] = useState();
  const [result, setResult] = useState([]);

  const handleChange = () => {
 
  };

  
  return (
    <div>
      <h1>Indian Postal API</h1>
     <Forms setResult = {setResult}/>
      <Pin handleChange={handleChange} />
      <Postal handleChange={handleChange} />
      <Result  result={result}  />
      <ResultBranch />
    </div>
  );
}

export default App;
