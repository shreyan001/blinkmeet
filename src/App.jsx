import { useEffect, useState } from "react";
import "./App.css";
import {Routes, Route} from "react-router-dom";
import Meets from "./Meets";
import Login from "./Login";
import Event from "./Event";
import {createReactClient,studioProvider,LivepeerConfig} from '@livepeer/react';
import Screen from "./Stream/Screen";



const client = createReactClient ({
  provider: studioProvider({
    apiKey: import.meta.env.VITE_PUBL_KEY
  }),
});



function App() {


  return (
    <LivepeerConfig client={client}>

  
  <Routes>  
    
     <Route path="event" element={<Event/>}/>
     <Route path="/" element={<Login/>}/>
     <Route path="meet" element={<Meets/>}/>
     <Route path="config" element={<Screen/>}/>

  </Routes>
  
  </LivepeerConfig>

  )
 


}
export default App;
