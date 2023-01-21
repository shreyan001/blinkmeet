import { Connect } from "./Connect";
import { huddleIframeApp, HuddleIframe } from "@huddle01/huddle01-iframe";
import { useAccount } from "wagmi";
import { useState,useEffect } from "react";
import Modal from "./Modal";
import Screen from "./Stream/Screen";
import { useLivepeerProvider } from "@livepeer/react";
 
const iframeConfig1 = {
  roomUrl: "https://iframe.huddle01.com/test-room",
  height: "600px",
  width: "80%",
};
//   const iframeConfig1 = {
//    roomUrl: "https://iframe.huddle01.com/123",
//    noBorder: false, // false by default
//  };
//  const iframeConfig2 = {
//    roomUrl: "https://iframe.huddle01.com/123",
//    noBorder: false, // false by default
//  };
//  const iframeConfig3 = {
//    roomUrl: "https://iframe.huddle01.com/123",
//    noBorder: false, // false by default
//  };

 



const Event = () => {

 
   const {address} = useAccount(); 
   
huddleIframeApp.methods.connectWallet(address);
const parts = huddleIframeApp.infoMethods.getParticipants();

useEffect(() => {
  huddleIframeApp.on("peer-join", (data) =>
    console.log({ iframeData: data })
  );
  huddleIframeApp.on("peer-left", (data) =>
    console.log({ iframeData: data })
  );
}, []);
 
   return (

      <>
     
      <Screen/>
      
      </>


   );



    

}
export default Event;