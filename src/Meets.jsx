import { huddleIframeApp, HuddleIframe } from "@huddle01/huddle01-iframe";
import { useEffect, useState } from "react";
import {Connect} from './Connect';
import { useAccount } from "wagmi";
import Modal from "./Modal";
import 'reactjs-popup/dist/index.css';
import Stall from "./Cards/Stall";
import Table from "./Cards/Table";
import Drooms from "./Cards/Drooms";
import { Player } from "@livepeer/react";


 function Meets() {
  
  
  const [isOpen,setOpen] = useState(false);
  const {address} = useAccount();

  console.log(address);

  const iframeConfig = {
    roomUrl: "https://iframe.huddle01.com/test-room",
    width: "90%",
    noBorder: true
  };

  const iframeConfig1 = {
    roomUrl: "https://iframe.huddle01.com/101",
    width: "100%",
    height: "97%",
    noBorder: true,
  };

  const iframeConfig2 = {
    roomUrl: "https://iframe.huddle01.com/211",
    width: "80%",
  };
  const iframeConfig3 = {
    roomUrl: "https://iframe.huddle01.com/131",
    width: "80%",
  };

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
    <Modal className="mod1" iframeData={iframeConfig1} address="address" isOpen={isOpen} onClose={()=>{setOpen(false)}}/>
    <div className="stream">
    <div className="btn1"><img src="V.png" alt="V"/></div>
    
    <div className="miniNav"> <h1>Holiday hack meet
         </h1> <Connect/>
    </div>
  </div>
   
  <div className="sec2">

 <div className="streamb"><Player
      title="stream"
      playbackId="8dd55f8l5jsiyhd8"
      poster="cross.svg"
      showPipButton
      objectFit="cover"
      priority
    /></div> 

  </div>
 
 <div className="talkBox">
 <section className="s1">
 <p>Stalls</p>
 <div className="flexMap"> 
    <div className="stl1" onClick={()=>{setOpen(true)}}> <img  src="stall.svg" alt="stall"/></div> 
    <Stall/>
 </div>
 </section>
 <section className="s2">
    <p>Open Tables</p> 
   <div className="flexMap"> <Table/>
    <div className="stl1"> <img  src="tabl1.svg" alt="tabl1"/></div>
    <div className="stl1"> <img  src="tabl2.svg" alt="tabl2"/></div> </div>
 </section>
 <section className="s3">
    <p>Discussion Rooms</p>
    <div className="flexMap"> 
    <Drooms/>
    <div className="stl1"> <img src="Group 27.svg" alt="grp2"/>
    </div> </div>
    
    
 </section>
 </div>
  
  

      
       
  </>);
}

export default Meets;