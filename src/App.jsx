import { useEffect, useState } from "react";
import "./App.css";
import {Routes, Route} from "react-router-dom";
import Meets from "./Meets";
import Login from "./Login";
import Event from "./Event";
import {createReactClient,studioProvider,LivepeerConfig} from '@livepeer/react';
import Screen from "./Stream/Screen";
import UAuth from '@uauth/js'

const uauth = new UAuth(
  {
    clientID: "71fc0d2b-a82c-4108-9dbb-030fe102d6d2",
    redirectUri: "http://localhost:5173",
    scope: "openid wallet"
  }
)

const client = createReactClient ({
  provider: studioProvider({
    apiKey: "b6d6af23-1051-4063-bd61-d5c49a167410"
  }),
});



function App() {

  let authX = false;
  window.login = async () => {
    try {
      const authorization = await uauth.loginWithPopup()
      authX = uauth.getAuthorizationAccount(authorization);
   
      console.log(authorization)
    } catch (error) {
      console.error(error)
    }
  }


  window.logout = async () => {
    await uauth.logout()
    console.log('Logged out with Unstoppable')
  }



  

  return (
    <LivepeerConfig client={client}>

  
  <Routes>  
    
     <Route path="event" element={<Event/>}/>
     <Route path="/" element={<Login authX={authX}/>}/>
     <Route path="meet" element={<Meets/>}/>
     <Route path="config" element={<Screen/>}/>

  </Routes>
  
  </LivepeerConfig>

  )
 


}
export default App;
