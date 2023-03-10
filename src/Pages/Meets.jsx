import { useEffect, useState } from "react";
import {Connect} from '../functions/Connect';
import { useAccount } from "wagmi";
import Modal from "../functions/Modal";
import 'reactjs-popup/dist/index.css';
import Stall from "../Cards/Stall";
import Table from "../Cards/Table";
import Drooms from "../Cards/Drooms";
import { Player } from "@livepeer/react";
import axios from 'axios';
import { ToastContainer, toast, Slide } from 'react-toastify';
import StallModal from "../Cards/StallModal";
import { useParams } from 'react-router-dom';
import logo from '../../public/logo2.jpg';


 function Meets() {
  const {id} = useParams();
  const [isOpen,setOpen] = useState(false);
  const [isOpen2,setOpen2] = useState(false);
  const {address} = useAccount();
  const [isdata, setIsData] = useState([]);
  const [ channel, setChannel] = useState([]);
  const [stalls , setStalls] = useState([]);
 const [meetName,setMeetName] = useState("useraddress");
 const [stallModal,setstallModal] = useState(false);
 const [stallModalName,setstallModalName] = useState([]);
 const [name,setName] = useState([]);
   
 const useraddress = address;
  console.log(useraddress);
   const API = import.meta.env.VITE_API_URI;


  const handleDelete = async (name) => {
    try {
      const response = await axios.delete(`http://${API}/api/tables/${name}/?addr=${address}`);
  
      if (response.status === 204 || 200) {
        setOpen(false);
      } else {
        console.log("Failed to delete address");
      }
    } catch (error) {
      console.error(error);
    }
  };

  
  const handleDelete2 = async (name) => {
    try {
      const response = await axios.delete(`http://${API}/api/stalls/${name}/?addr=${address}`);
  
      if (response.status === 204 || 200) {
        setOpen2(false);
      } else {
        console.log("Failed to delete address");
      }
    } catch (error) {
      console.error(error);
    }
  };

  const runMeet = (name) => {
    if(isOpen === true) {
      toast.error("Please close your existing meet first");
    }
    setOpen(true);
    setMeetName(name);
  };

  const runMeet2 = (name) => {
    if(isOpen === true) {
      toast.error("Please close your existing meet first");
    }
    setOpen2(true);
    setMeetName(name);
    setstallModal(false);
  };


  const runModal = (name) => {
    if(stallModal === true) {
      toast.error("Please close your existing meet first");
    }
    setstallModal(true);
    setstallModalName(name);
  };

  
  const tableRender = async (name)=>{
   
    const toastId  = toast.loading("Loading...");
    const addr = useraddress;
      const response = await fetch(`http://${API}/api/tables/${name}`, {
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

  const tableRender2 = async (name)=>{
   
    const toastId  = toast.loading("Loading...");
    const addr = useraddress;
      const response = await fetch(`http://${API}/api/stalls/${name}`, {
        method: 'PUT',
        body: JSON.stringify({name,addr}),
        headers: {'Content-Type':'application/json'},
      });
    if (response.status === 200) {
      runMeet2(name);
      toast.update(toastId, { render: "Joined", type: "success", isLoading: false, autoClose: 5000})
      
     ;
    } else {
      toast.update(toastId, { render: "Some error occured", type: "error", isLoading: false, autoClose: 5000 })
      
    };

  }

 

 const synx = async() => {
 
    const {data} = await axios.get(`http://${API}/api/tables`) 

    setIsData(data.userDoc);
    
     
 }

 const channelToast = ()=> {
   toast.success("channels will be implemented soon");
 }
 const cosx = async() => {
 
  const {data} = await axios.get(`http://${API}/api/channels`) 

  setChannel(data.userDoc);
  console.log(data.userDoc);
   
}
const tanx = async() => {
 
  const {data} = await axios.get(`http://${API}/api/stalls`) 

  setStalls(data.userDoc);
  console.log(data.userDoc);
   
}

const bapx = async() => {
 
  const {data} = await axios.post(`http://${API}/api/meets/get`, {meetId:id} );

  setName(data.userDoc.meetName);
  console.log(data.userDoc);
   
}


useEffect(()=>{bapx();
               synx();
               cosx();
               tanx();},[])
 
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
<StallModal stallModal={stallModal} name={stallModalName} onOpen={(name)=>tableRender2(name)} onClose={()=>{setstallModal(false)}}/>
<Modal className="mod1" iframeData={ {
    roomUrl: `http://iframe.huddle01.com/${meetName}`,
    width: "100%",
    height: "97%",
    noBorder: true,
  }} useraddress="useraddress" isOpen={isOpen} name={meetName} onClose={(name)=>{handleDelete(name)}}key={1}/>

<Modal className="mod1" iframeData={ {
    roomUrl: `http://iframe.huddle01.com/${meetName}`,
    width: "100%",
    height: "97%",
    noBorder: true,
  }} useraddress="useraddress" isOpen={isOpen2} name={meetName} onClose={(name)=>{handleDelete2(name)}} key={2}/>

    <div className="stream">
    <div className="btn1 overflow-hidden"><img className="pb-3" src={logo} alt="V"/></div>
    
    <div className="miniNav"> <h1>{name}
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
      {stalls.map((e)=>{
        return <Stall title={e.titleName} stallName={e.stallName} host={e.host} onOpen={(name)=>runModal(name)} key={e._id}/>
      })}
    
      
    </div>
      
     
 
    <div className="w-3/12 rounded-2xl bg-black2 flex min-h-60 flex-col justify-between gap-y-5 py-5">
    <h1 className="font-semibold text-2xl left-2 ml-7">Tables</h1>
    {isdata.map((e)=>{
        return <Table tableName={e.tableName} key={e._id} onOpen={(name)=>{tableRender(name)}} />
      })}</div> 
    <div className="w-1/3 rounded-2xl bg-black2 flex min-h-60 flex-col justify-between gap-y-5 py-5">
      <h1 className="font-semibold text-2xl left-2 ml-7">Discussion Rooms</h1>
      {channel.map((e)=>{
        return <Drooms channelName={e.channelName} topicName={e.topicName}  onOpen={()=>channelToast()} key={e._id}/>
      })}
      </div>
    </div>   
 
      
       
  </>);
}

export default Meets;