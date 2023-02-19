import { useEffect, useState } from "react";
import "./App.css";
import {Routes, Route} from "react-router-dom";
import Meets from "./Pages/Meets";
import Login from "./Pages/Login";
import Event from "./Pages/Event";
import {createReactClient,studioProvider,LivepeerConfig} from '@livepeer/react';
import Screen from "./Stream/Screen";
import MobileWarning from "./functions/checkRes";



const client = createReactClient ({
  provider: studioProvider({
    apiKey: import.meta.env.VITE_PUBL_KEY
  }),
});



function App() {

  const [showPopup,setShowPopup] = useState(false);

  useEffect(() => {
    const screenWidth = window.innerWidth;
    if (screenWidth < 1024) {
      setShowPopup(true);
    }
  }, []);
  
  return (

    <LivepeerConfig client={client}>
  
  <MobileWarning showPopup={showPopup} closePopup={()=>{setShowPopup(false)}}/>
  <Routes>  
    
     <Route path="event" element={<Event/>}/>
     <Route path="/" element={<Login/>}/>
     <Route path="/meet/:id" element={<Meets/>}/>
     <Route exact path="/meet" element={<Meets/>}/>
     <Route path="config" element={<Screen/>}/>

  </Routes>
  
  </LivepeerConfig>

  )
 


}
export default App;
