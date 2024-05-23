import { useState } from "react";

function Comp() {
   let [namez, setNamez] = useState("your name");
   const [age, setAge] = useState(0);
   const [inc, setInc] = useState(1);
   const [employed,setEmployed]=useState(false)

   let updateName = () => {
      setNamez("shweta");
   };
   const updateAge = () => {
      setAge(10);
   };
   const incrementAge = () => {
    if(inc<18){
        setInc(inc + 1);
    }
    else{
        setInc('you are an adult')
    }
    
   };
   const toggleEmploy=()=>{
    setEmployed(!employed)
   }




   return (
      <div>
         <p>name:{namez}</p>
         <button onClick={updateName}>set name</button>
         <p>age: {age}</p>
         <button onClick={updateAge}>set age</button>

         <p>age: {inc}</p>
         <button onClick={incrementAge}>increase age</button>
         <p>is employed:{employed ? "yes,that's good" : "No,try again"}</p>
         <button onClick={toggleEmploy}>employed</button>
      </div>
   );
}

export default Comp;
