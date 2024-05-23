import { useState } from "react";
function ArrayState() {
   const [food, setFood] = useState(["apple", "banana"]);

   function handleAdd() {
      const newFood = document.getElementById("foodInput").value;
      document.getElementById("foodInput").value = "";
      setFood((f) => [...f, newFood]);
   }
   function handleRemove(index) {
      setFood(food.filter((_, i) => i !== index));
   }
 
   return (
      <div>
         <h2>List of Foods</h2>
         <ul>
            {food.map((food, index) => (
               <li key={index} onClick={() => handleRemove(index)}>
                  {food}
               </li>
            ))}
         </ul>
         <input type="text" id="foodInput" placeholder="enter food" />
         <button onClick={handleAdd}>add food</button>
      </div>
   );
}

export default ArrayState;
