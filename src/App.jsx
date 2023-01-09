import { useEffect, useState } from "react";
import "./App.css";
import {Routes, Route} from "react-router-dom";
import Meets from "./Meets";
import Login from "./Login";
import Event from "./Event";

function App() {
  return (
  <>  
  <Routes>  
    
     <Route path="event" element={<Event/>}/>
     <Route path="/" element={<Login/>}/>
     <Route path="/meet" element={<Meets/>}/>

  </Routes>
  </>

  )
 


}
export default App;
