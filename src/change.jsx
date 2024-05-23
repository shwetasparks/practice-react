import { useState } from "react";

function Change() {
   const [name, setName] = useState("");
   const [quantity, setQuantity] = useState();
   const [comment, setComment] = useState("");
   const [payment, setPayMent] = useState("visa");
   const [shipping, setShipping] = useState();

   function handleNameChange(e) {
      setName(e.target.value);
   }

   function handleQuantityChange(e) {
      setQuantity(e.target.value);
   }

   function handleComment(e) {
      setComment(e.target.value);
   }
   function handlePayment(e) {
      setPayMent(e.target.value);
   }
   function handleShipping(e) {
      setShipping(e.target.value);
   }

   return (
      <div>
         <input onChange={handleNameChange} value={name} />
         <p>Name:{name}</p>
         <input
            type="number"
            value={quantity}
            onChange={handleQuantityChange}
         />
         <p>Quantity:{quantity}</p>
         <textarea
            value={comment}
            onChange={handleComment}
            placeholder="enter instructions"></textarea>
         <p>Comment:{comment}</p>
         <select value={payment} onChange={handlePayment}>
            {" "}
            <option value="">Select </option>
            <option value="visa">visa </option>
            <option value="mastercard">mastercard </option>{" "}
         </select>

         <label htmlFor="">Pickup</label>
         <input
            type="radio"
            value="pickup"
            checked={shipping === "pickup"}
            onChange={handleShipping}
         />
         <label htmlFor="">Pickup</label>

         <input
            type="radio"
            value="delivery"
            checked={shipping === "delivery"}
            onChange={handleShipping}
         />
         <label htmlFor="">Delivery</label>
         <p>shipping:{shipping}</p>

         <p>payment is : {payment}</p>
         <p>{}</p>
      </div>
   );
}

export default Change;
