import Card from "./Card";
import Button from "./Button/Button";
import Students from "./Students";
import UserGreeting from "./UserGreeting.jsx";
import ProfilePic from "./ProfilePic.jsx";
import Comp from "./Comp.jsx";
import Counter from "./Counter.jsx";
import Change from "./change.jsx";
import colorPickerr from "./colorPicker.jsx";
import objectCar from "./objectCar.jsx";

// import List from "./List.jsx";

function App() {
  
   return (
      <>
         <objectCar />
         <colorPickerr />
         <Change />
         <Counter />
         <Comp />
         <ProfilePic />
         <Button />
         <Card />
         <Card />
         <Card />
         <Students name="divyanshu" age={30} isStudent={true} />
         <Students name="shweta" age={12} isStudent={false} />
         <Students name="divyansh" age={90} isStudent={false} />
         <Students />
         <UserGreeting isLoggedIn={false} username="shweta" />
     
      </>
   );
}

export default App;
