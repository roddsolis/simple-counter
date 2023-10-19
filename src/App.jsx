import SecondCounter from "./components/SecondCounter";
import React, { useState } from "react";

const App = () => {


  


  const [counter, setCounter] = useState( "A" );



  return (
    <>
      <SecondCounter seconds={counter} />
    </>
  );
};

export default App;
