import {Connect} from './Connect';
import { useAccount } from 'wagmi';
import { redirect, useNavigate } from 'react-router-dom';
import { useState,useEffect } from 'react';
import { ToastContainer, toast, Slide } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



// const codeMkr = () => {
//    return num = Date().getTime();
//    };


export  default function Login() {

  const {isConnected } = useAccount();
  const [code,setCode] = useState();

//     const [meetName,setMeetName] = useState([]);

// const [accName,setAccName] = useState([]);


//  const createMeet = () => {
    
//  }   




const navigate = useNavigate();  




const redirect = () => {
    if(isConnected && code.length===7){
       navigate('meet');
    }
    else if(isConnected && code.length !==7) {
        toast.error('Meet code must be 7 digits');
    }
    else{
        toast.error('Please connect your wallet first');
    }
}
    
    return(  <>
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
 <div className=" relative w-11/12 m-auto bg-black4 rounded-2xl h-fit pb-2" style={{"min-height":"86vh"}}>
    <nav className=" relative flex-col mx-auto justify-between items-center w-11/12 mt-12 mb-3" >

       <div className='flex w-full mx-auto pt-5 flex-row justify-between items-center '>

         <div className=" mx-2 flex flex-row justify-center items-center h-24 w-1/8">
            <img className="pt-4" src='logo.svg' alt='logo'/>
            <h1 className=' font-semibold m-0 text-lg pr-3'>SpaceMeet</h1></div>
        <div className="mx-2 flex flex-row justify-center items-center h-24 w-fit">
            <a className='hover:opacity-60 cursor-pointer colorcode font-semibold text-lg px-3'
                onClick={()=>{toast.dark("Coming Soon")}}
                       >Marketplace</a><Connect/></div>
       </div>
    </nav>

    <div className=" md:mt-12 w-9/12 h-42 min-h-fit mx-auto text-center flex flex-col justify-between items-center">
        <h1 className='text-1xl antialiased	 w-1/2 font-bold'>Virtual Events made more social</h1>
        <p className='w-2/3 mt-5 font-semibold text-lg  text-gray-400'>Virtual exhibit halls are an important feature for virtual events because they allow attendees to interact.</p>
     </div>

   <div className=" mx-auto mt-2 mb-5 w-1/2 flex flex-row justify-around items-center h-32">
       <div className=" w-2/5  flex flex-col justify-evenly items-start">
         <h1 className='text-semibold m-0 text-xs'>Enter Code or link</h1>
         <div className=' grid-rows-2 my-1.5 w-full h-fit'>
           <input className=' w-32 h-10 bg-black2 text-gray-200 rounded-xl' type ='number' onChange={e => {setCode(e.target.value)}}></input>
           <button className=' button1 h-10 ml-2 text-sm w-20 rounded-xl text-black1 font-semibold' onClick={()=>{console.log("click");redirect()}} >Join</button>
         </div>
         <p className=' text-small text-semibold text-gray-400'>Please enter your Event code given by organizer.</p>
       </div>
        
       <h1 className='text-xl text-semibold text-gray-500'>or</h1> 
     <div role="button"className=" button-x h-12 w-36 flex justify-center items-center"><h1 className='colorcode font-semibold text-center'>Create Meet</h1></div>        
     </div>
     <div className=" w-1/2 mx-auto my-2 h-fit flex flex-row justify-center items-center"><h3 className='font-semibold text-lg'>Join a Demo Meet - </h3>
       <h1 className='hover:opacity-60 colorcode text-xl font-semibold hover:underline' onClick={()=>{navigate('meet')}}>&nbsp; Enter-Code-1234567</h1></div>
    </div>
    </>
    
    )

};