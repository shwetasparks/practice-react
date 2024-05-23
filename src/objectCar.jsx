import { useState } from "react";
function ObjectCar() {
   const [car, setCar] = useState({
      year: 2024,
      model: "ford",
      color: "blue",
   });

   function handleYearChange(e) {
    setCar((car) => ({ ...car, year: e.target.value }));
   

   }
   function handleModelChange(e) {
    setCar(car=>({...car,model:e.target.value}))


   }
   function handleColorChange(e) {
    setCar(car=>({...car,color:e.target.value}))

   }

   return (
      <div>
         <p>
            favourite car is : {car.color} {car.model}
            {car.year}
         </p>
         <input type="number" value={car.year} onChange={handleYearChange} />
         <input type="text" value={car.color} onChange={handleColorChange} />
         <input type="text" value={car.model} onChange={handleModelChange} />
      </div>
   );
}

export default ObjectCar;
