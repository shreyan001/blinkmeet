import {Connect} from '../functions/Connect';
import { useAccount } from 'wagmi';
import { redirect, useNavigate } from 'react-router-dom';
import { useState,useEffect } from 'react';
import { ToastContainer, toast, Slide } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import Register from '../functions/Register';
import CreateMeet from '../functions/createMeet';
import NftVerificationComponent from '../functions/CheckNft';






export  default function Login() {

  const {isConnected,address } = useAccount();
  const [code,setCode] = useState();
  const [isMOpen,setMOpen] = useState(false);
  const [meetMod,setMeetMod]= useState(false);

  

const navigate = useNavigate();
const API = import.meta.env.VITE_API_URI;

async function handleLogin() {
  const toastId  = toast.loading("Loading...")
  const response = await fetch(`http://${API}/api/login`, {
    method: 'POST',
    body: JSON.stringify({address}),
    headers: {'Content-Type':'application/json'}
  });
  const json = await response.json();
  console.log(json);
  console.log(response.data);
  if (response.status === 200) {
    toast.update(toastId, { render: "All is good", type: "success", isLoading: false })
    navigate('meet/mint/53382')
  } else {
    toast.update(toastId, { render: "Register", type: "info", isLoading: false })
    setMOpen(true);
  }
}

    

const redirect = () => {
   if(!code) {toast.error("please enter your code first")}
    else if(isConnected && code.length===5){
      handleLogin();
     console.log(`http://${API}/api/login`);
   
    }
    else if (isConnected && code.length===null){
      toast.error('please enter your code first');
    }
    else if(isConnected && code.length !==7) {
        toast.error('Meet code must be 5 digits');
    }
    else{
        toast.error('Please connect your wallet first');
    }
}
    
    return(  <>
<Register address={address} isMOpen={isMOpen} onMClose={()=>{setMOpen(false)}} />
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
  
<CreateMeet meetMod={meetMod} address={address} onClose={()=>setMeetMod(false)}/>
{isConnected && <NftVerificationComponent userAddress={address}/>}

 <div className=" relative w-11/12 m-auto bg-black4 rounded-2xl h-fit pb-4" style={{"min-height":"86vh"}}>
    <nav className=" relative flex-col mx-auto justify-between items-center w-11/12 mt-12 mb-8" >

       <div className='flex w-full mx-auto pt-1 flex-row justify-between items-center '>

         <div className=" mx-2 flex flex-row justify-center items-center h-24 w-1/8">
         <div className="h-fit w-fit  border-1 border-solid border-white "><img className=" h-14 w-auto" src='logo2.jpg' alt='logo'/></div>   
            <h1 className=' font-semibold m-0 text-lg pr-3'>BlinkMeet</h1></div>
        <div className="mx-2 flex flex-row justify-center items-center h-24 w-fit">
            <a className='hover:opacity-60 cursor-pointer colorcode font-semibold text-lg px-3'
                onClick={()=>{toast.dark("Coming Soon")}}
                       >Marketplace</a><Connect/></div>
       </div>
    </nav>

    <div className="mt-5 w-9/12 h-42 min-h-fit mx-auto text-center flex flex-col justify-between items-center">
        <h1 className='text-4xl antialiased	 w-7/12 font-bold'>Reinvent Your Virtual Socializing Experience</h1>
        <p className='w-2/3 mt-5 font-semibold text-lg  text-gray-400'>Join the Interactive Revolution and Experience a Whole New Way of Connecting and Networking with Our Platform</p>
     </div>
  
   <div className=" mx-auto mt-2 mb-5 w-1/2 flex flex-row justify-around items-center h-32">
       <div className=" w-2/5  flex flex-col justify-evenly items-start">
         <h1 className='text-semibold m-0 text-xs'>Enter Code or link</h1>
         <div className=' grid-rows-2 my-1.5 w-full h-fit'>
           <input className=' w-32 h-10 bg-black2 text-gray-200 rounded-xl' type ='number' onChange={e => {setCode(e.target.value)}}></input>
           <button className=' button1 h-10 ml-2 text-sm w-20 rounded-xl text-black1 font-semibold' onClick={()=>{redirect();}} >Join</button>
         </div>
         <p className=' text-small text-semibold text-gray-400'>Please enter your Event code given by organizer.</p>
       </div>
        
       <h1 className='text-xl text-semibold text-gray-500'>or</h1> 
       <div role="button"className=" button-x h-12 w-36 flex justify-center items-center"><h1 onClick={()=>{setMeetMod(true)}}  className='colorcode font-semibold text-center'>Create Meet</h1></div>        
     </div>
     <div className=" w-1/2 mx-auto my-2 h-fit flex flex-row justify-center items-center"><h3 className='font-semibold text-lg'>Join a Demo Meet - </h3>
       <h1 className='hover:opacity-60 colorcode text-xl font-semibold hover:underline cursor-pointer' 
       onClick={()=>{if(isConnected){handleLogin()}else{toast.error("Connect your wallet first")}}}>&nbsp; Enter-EthForAll</h1></div>
    </div>
    </>
    
    )

};