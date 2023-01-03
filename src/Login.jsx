import {Connect} from './Connect';
import { useAccount } from 'wagmi';
import { redirect, useNavigate } from 'react-router-dom';
import { useState,useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



// const codeMkr = () => {
//    return num = Date().getTime();
//    };


export  default function Login() {

//     const [meetName,setMeetName] = useState([]);

// const [accName,setAccName] = useState([]);

const [code,setCode] = useState([]);
//  const createMeet = () => {
    
//  }   

const navigate = useNavigate();  
const { address,isConnected} = useAccount();
console.log(address);


const redirect = () => {
    if(isConnected && code.length===7){
       navigate('event');
    }
    else if(isConnected && code.length !==7) {
        toast.error('Meet code must be 7 digits');
    }
    else{
        toast.error('Please connect your wallet first');
    }
}
    
    return(<>  
    <ToastContainer/>

    <div className='bsp'> <Connect/></div>
   
    {/* <div><p>Create a meet</p>
    <input type ='string'placeholder='Meet Name' 
    onChange={e => {setMeetName(e.target.value)}}></input>
    <input type ='string'placeholder='Owner Name' 
    onChange={e => {setAccName(e.target.value)}}></input>
    <button onClick={createMeet()}>Create</button>
    </div> */}
    <div className='logd'>
    <input className='loga' type ='number'placeholder='Enter your meet code' onChange={e => {setCode(e.target.value)}}></input>
    <button className='logb' onClick={()=>{console.log("click");redirect()}} >Enter</button>
   </div> </>
    
    
    )

};