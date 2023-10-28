import SecondCounter from "./components/SecondCounter";
import React, { useState, useEffect, useRef } from "react";

const App = () => {

  
    const [counter, setCounter] = useState(0);
    const timer = useRef(null);
  
    useEffect(() => {
      timer.current = setInterval(() => {
        setCounter((prevCounter) => prevCounter + 1);
      }, 1000);
  
      return () => {
        clearInterval(timer.current);
      };
    }, []);


  
  return (
    <>
      <SecondCounter seconds={counter} />
      
    </>
  );
};

export default App;
