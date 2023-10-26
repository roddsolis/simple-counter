import SecondCounter from "./components/SecondCounter";
import React, { useState, useEffect } from "react";

const App = () => {

  const [counter, setCounter] = useState(0); 

  useEffect(() => {
    setInterval(() => {
      setCounter( num => num + 1)
    } , 1000);
 
  },[])
  
  return (
    <>
      <SecondCounter seconds={counter} />
    </>
  );
};

export default App;
