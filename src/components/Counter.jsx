import { useState } from "react";

export default function Counter({ontotal}){
  const [counter, setCounter] = useState(1);

  const handleCount = ()=>{
    setCounter(counter+1);
    ontotal();
  }
  return(
    <button onClick={handleCount}>Counter : {counter}</button>
  )
};

