import { Connect } from "./Connect";
import { HuddleIframe,  huddleIframeApp  } from "@huddle01/huddle01-iframe";
import { useAccount } from "wagmi";
import { useState } from "react";
import Modal from "./Modal";
 
const iframeConfig = {
    roomUrl: "https://iframe.huddle01.com/123",
    noBorder: false, // false by default
  };
  const iframeConfig1 = {
   roomUrl: "https://iframe.huddle01.com/test-room",
   noBorder: false, // false by default
 };
 const iframeConfig2 = {
   roomUrl: "https://iframe.huddle01.com/222",
   noBorder: false, // false by default
 };
 const iframeConfig3 = {
   roomUrl: "https://iframe.huddle01.com/121",
   noBorder: false, // false by default
 };

 

const Event = () => {

 const [vis1, setVis1]  = useState("hidden");
 const [vis2, setVis2]  = useState("hidden");
 const [vis3, setVis3]  = useState("hidden");

 console.log(vis2);
   const {address} = useAccount(); 
   
huddleIframeApp.methods.connectWallet(address);

 const isVisible = (x) => {
   if(x===1){
     setVis1("visible");
   }
   else if(x===2){
      setVis2("visible");
    }
    else if(x===3){
      setVis3("visible");
    }
   
 }
   return (

      <>
     <Modal props={iframeConfig1}  visibility= {vis1}/>
     <Modal props={iframeConfig2} visibility= {vis2} />
     <Modal props={iframeConfig3} visibility= {vis3} />
      <div className="stream">
        <div className="btn1"><img src="V.png" alt="V"/></div>
        
        <div className="miniNav"> <h1>Holiday hack meet
             </h1> <Connect/>
        </div>
      </div>

      <div className="sec2">
      <HuddleIframe config={iframeConfig} />
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