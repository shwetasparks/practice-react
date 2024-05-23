import { useState } from "react";

function ArrayofObject() {
   const [cars, setCars] = useState([]);
   const [carYear, setCarYear] = useState(new Date().getFullYear());
   const [carMake, setCarMake] = useState("");
   const [model, setModel] = useState("");

   function handleAddCar() {
      const newCar = { year: carYear, make: carMake, model: model };
      setCars((c) => [...c, newCar]);
      //reset valus
      setCarYear(new Date().getFullYear());
      setCarMake("");
      setModel("");
   }
   function handleRemoveCar(index) {
      setCars((c) => c.filter((_, i) => i !== index));
   }
   function handleCarMake(e) {
      setCarMake(e.target.value);
   }
   function handleModelChange(e) {
      setModel(e.target.value);
   }

   function handleYearChange(e) {
      setCarYear(e.target.value);
   }

   return (
      <div>
         <h2>list of objects</h2>
         <ul>
            {cars.map((car, index) => (
               <li
                  key={index}
                  onClick={() => {
                     handleRemoveCar(index);
                  }}>
                  {car.year}
                  {car.make}
                  {car.model}
               </li>
            ))}
         </ul>
         <input type="text " value={carYear} onChange={handleYearChange} />{" "}
         <br />
         <input
            type="text"
            value={carMake}
            onChange={handleCarMake}
            placeholder="enter car make"
         />{" "}
         <br />
         <input
            type="text"
            value={model}
            onChange={handleModelChange}
            placeholder="enter car model"
         />{" "}
         <br />
         <button onClick={handleAddCar}>add car</button>
      </div>
   );
}

export default ArrayofObject;
