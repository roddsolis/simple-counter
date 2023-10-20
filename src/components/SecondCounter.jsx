import Number from "/src/components/Number";
import { LuTimer } from "react-icons/lu";

const SecondCounter = ({ seconds }) => {


  console.log(seconds)

  return (
    <div className="secondsContainer">
      <LuTimer numero={seconds}/>
      <Number numero={seconds}/>
      <Number numero={seconds}/>
      <Number numero={seconds}/>
      <Number numero={seconds}/>
      <Number numero={seconds} />
      <Number numColor="#1ea124;" numero={seconds} />
    </div>
  );
};

export default SecondCounter;
