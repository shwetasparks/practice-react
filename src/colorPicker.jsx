import { useState } from "react";

function ColorPickerr() {
   const [color, setColor] = useState("#ffffff");

   function handleColorChange(e) {
      setColor(e.target.value);
   }

   return (
      <div className="color-picker">
         <h1>color picker</h1>
         <div className="color-display" style={{ backgroundColor: color }}>
            <p>selected color: {color}</p>
         </div>
         <label>select a color:</label>
         <p>So the color code you are using is : {color}</p>
         <input type="color" value={color} onChange={handleColorChange} />
      </div>
   );
}

export default ColorPickerr;
