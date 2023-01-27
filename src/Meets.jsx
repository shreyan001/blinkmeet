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
   
  <div className="sec2 my-5">

 <div className="streamb"><Player
      title="stream"
      playbackId="8dd55f8l5jsiyhd8"
      
      showPipButton
      objectFit="cover"
      priority
    /></div> 

  </div>
 
 
  
 <div className="w-11/12 min-h-fit flex flex-row justify-around items-start my-12 mx-auto">
    <div className="w-3/12 rounded-2xl bg-black2 flex min-h-60 flex-col justify-between gap-y-5 py-5">
      <h1 className="font-semibold text-2xl left-2 ml-7">Stalls</h1>
      <Stall/><Stall/>
    </div>



    <div className="w-3/12 rounded-2xl bg-black2 flex min-h-60 flex-col justify-between gap-y-5 py-5">
    <h1 className="font-semibold text-2xl left-2 ml-7">Tables</h1>
      <Table/><Table/></div> 
    <div className="w-1/3 rounded-2xl bg-black2 flex min-h-60 flex-col justify-between gap-y-5 py-5">
      <h1 className="font-semibold text-2xl left-2 ml-7">Discussion Rooms</h1>
      <Drooms/><Drooms/><Drooms/></div>
    </div>   

      
       
  </>);
}

export default Meets;