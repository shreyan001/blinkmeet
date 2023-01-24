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
    <div className="btn1"><img src="logo.svg " alt="V"/></div>
    
    <div className="miniNav"> <h1>Holiday hack meet
         </h1> <Connect/>
    </div>
  </div>
   
  <div className="sec2 my-10">

 <div className="streamb"><Player
      title="stream"
      playbackId="8dd55f8l5jsiyhd8"
      
      showPipButton
      objectFit="cover"
      priority
    /></div> 

  </div>
 
 <div className="talkBox">
 <section className="s1">
 <h1>Stalls</h1>
 <div className="flexMap"> 
    <div className="stl1" onClick={()=>{setOpen(true)}}> <img  src="stall.svg" alt="stall"/></div> 
    <Stall/>
 </div>
 </section>
 <section className="s2">
  <h1>Open Tables</h1>
   <div className="flexMap"> <Table/>
    <div className="stl1"> <img  src="tabl1.svg" alt="tabl1"/></div>
    <div className="stl1"> <img  src="tabl2.svg" alt="tabl2"/></div> </div>
 </section>
 <section className="s3">
    <h1>Discussion Rooms</h1>
    <div className="flexMap"> 
    <Drooms/>
    <div className="stl1"> <img src="Group 27.svg" alt="grp2"/>
    </div> </div>
 </section>
 </div>
  
 <div className="w-11/12 min-h-fit flex flex-row justify-around items-start my-5 mx-auto">
    <div className="w-3/12 rounded-xl bg-black2 flex min-h-60 flex-col justify-between items-center py-3">
      <h1 className="font-semibold text-xl absolute left-2">Stalls</h1>
    </div>
    <div className="w-3/12 rounded-xl bg-black2 flex h-60 flex-col justify-between items-center py-3"></div> 
    <div className="w-1/3 rounded-xl bg-black2 flex h-60 flex-col justify-between items-center py-3"></div>
    </div>   

      
       
  </>);
}

export default Meets;