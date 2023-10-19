import Number from "/src/components/Number";
import { LuTimer } from "react-icons/lu";

const SecondCounter = ({ seconds }) => {
  return (
    <div className="secondsContainer">
      <LuTimer />
      <Number />
      <Number />
      <Number />
      <Number />
      <Number />
      <Number numColor="#1ea124;" numero={seconds} />
    </div>
  );
};

export default SecondCounter;
