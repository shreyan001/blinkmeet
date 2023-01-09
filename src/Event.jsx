import { Connect } from "./Connect";
import { huddleIframeApp, HuddleIframe } from "@huddle01/huddle01-iframe";
import { useAccount } from "wagmi";
import { useState,useEffect } from "react";
import Modal from "./Modal";
 
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

      <><Modal/>
       
      <div className="stream">
        <div className="btn1"><img src="V.png" alt="V"/></div>
        
        <div className="miniNav"> <h1>Holiday hack meet
             </h1> <Connect/>
        </div>
      </div>

      <div className="sec2">
    
      <HuddleIframe config={iframeConfig1} />
      <br/>
      {
   console.log(parts)}
      {console.log(HuddleIframe)}
      </div>
     
     <div className="talkBox">
     <section className="s1">
     <p>Stalls</p>
        <div className="stl1"> <img onClick={()=>{isVisible(1)}} src="stall.svg" alt="stall"/></div>
     </section>
     <section className="s2">
        <p>Open Tables</p> 
        <div className="stl1"> <img  src="tabl1.svg" alt="tabl1"/></div>
        <div className="stl1"> <img  src="tabl2.svg" alt="tabl2"/></div> 
     </section>
     <section className="s3">
        <p>Discussion Rooms</p>
        <div className="stl1"> <img src="Group 27.svg" alt="grp2"/></div> 
     </section>
     </div>
      
      
      
      </>


   );



    

}
export default Event;