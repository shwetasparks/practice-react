import { useState } from "react";
function Counter() {
    const [count,setCount]=useState(0);

    const counter=()=>{
        setCount(count+1)
    }

    const decreaseCount=()=>{
        if(count>0){
            setCount(count - 1);

        }
        else setCount("not possible")
        
    }

  return (
    <div>
        <p><input type="text" value={count}/></p>
        <button onClick={counter}>Click to Count</button>
        <button onClick={decreaseCount}>Decrease</button>


    </div>
  )
}

export default Counter;
