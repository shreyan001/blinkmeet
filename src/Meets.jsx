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
import Users from "./Users";
import axios from 'axios';
import { ToastContainer, toast, Slide } from 'react-toastify';

 function Meets() {
  
  
  const [isOpen,setOpen] = useState(false);
  const {address} = useAccount();
  const [isdata, setIsData] = useState([]);
 const [meetName,setMeetName] = useState("address");

  console.log(address);
   const API = import.meta.env.VITE_API_URI;

 const iframeConfig = {
    roomUrl: "https://iframe.huddle01.com/test-room",
    width: "90%",
    noBorder: true
  };


  const handleDelete = async (name) => {
    
    axios.delete(`https://${API}/api/tables/${name}`, {
      data: {
        addr: address
      }
    })
    .then(res => {
      setOpen(false); 
      if(res.status===200){setOpen(false);
    }})
    .catch(error => {
      console.error(error);
    });
   
  }

  const runMeet = (name) => {
    if(isOpen === true) {
      toast.error("Please close your existing meet first");
    }
    setOpen(true);
    setMeetName(name);
  };

  
  const tableRender = async (name)=>{
    const toastId  = toast.loading("Loading...");
    const addr = address;
      const response = await fetch(`https://${API}/api/tables/${name}`, {
        method: 'PUT',
        body: JSON.stringify({name,addr}),
        headers: {'Content-Type':'application/json'},
      });
    if (response.status === 200) {
      runMeet(name);
      toast.update(toastId, { render: "Joined", type: "success", isLoading: false, autoClose: 5000})
      
     ;
    } else {
      toast.update(toastId, { render: "Some error occured", type: "error", isLoading: false, autoClose: 5000 })
      
    };

  }

 

 const synx = async() => {
  console.log(import.meta.env.API_API_URI)
    const {data} = await axios.get(`https://${API}/api/tables`) 

    setIsData(data.userDoc);
  
   
 }
    
useEffect(()=>{synx();},[])
 
  return (
    <>
    
<ToastContainer
transition={Slide}
position="top-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="dark"
/>
<Modal className="mod1" iframeData={ {
    roomUrl: `https://iframe.huddle01.com/${meetName}`,
    width: "100%",
    height: "97%",
    noBorder: true,
  }} address="address" isOpen={isOpen} name={meetName} onClose={(name)=>{handleDelete(name)}}/>
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
  
    
      
    </div>
      
     
 
    <div className="w-3/12 rounded-2xl bg-black2 flex min-h-60 flex-col justify-between gap-y-5 py-5">
    <h1 className="font-semibold text-2xl left-2 ml-7">Tables</h1>
    {isdata.map((e)=>{
        return <Table tableName={e.tableName} onOpen={(name)=>{tableRender(name)}} />
      })}</div> 
    <div className="w-1/3 rounded-2xl bg-black2 flex min-h-60 flex-col justify-between gap-y-5 py-5">
      <h1 className="font-semibold text-2xl left-2 ml-7">Discussion Rooms</h1>
      </div>
    </div>   
 
      
       
  </>);
}

export default Meets;