import Number from "/src/components/Number";
import { LuTimer } from "react-icons/lu";
import React, { useState, useEffect } from "react";


const SecondCounter = ({seconds}) => {

  return (

    <>
    <div className="secondsContainer">
      <LuTimer />
      <Number numero={(seconds.toString().split([]).reverse())[5]}/>
      <Number numero={(seconds.toString().split([]).reverse())[4]}/>
      <Number numero={(seconds.toString().split([]).reverse())[3]}/>
      <Number numero={(seconds.toString().split([]).reverse())[2]}/>
      <Number numero={(seconds.toString().split([]).reverse())[1]}/>
      <Number numero={(seconds.toString().split([]).reverse())[0]}/>
    </div>
    </>

  );
};

export default SecondCounter;
