import { useEffect, useState } from "react";
import "./App.css";
import {Routes, Route} from "react-router-dom";
import Meets from "./Meets";
import Login from "./Login";

function App() {
  return (
  <>  
  <Routes>  
    
     <Route path="event" element={<Meets/>}/>
     <Route path="/" element={<Login/>}/>

  </Routes>

  
  </>

  )
 


}
export default App;
