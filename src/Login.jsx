import {Connect} from './Connect';
import { useAccount } from 'wagmi';
import { redirect, useNavigate } from 'react-router-dom';
import { useState,useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const [code,setCode] = useState([]);
export  default function Login() {

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
// if(isConnected){
//     navigate('event');
//    }
    return(<>  
    <ToastContainer/>
    <Connect/>
    <input type ='number'placeholder='Enter your meet code' onChange={e => {setCode(e.target.value)}}></input>
    <button onClick={()=>{console.log("click");redirect()}} >Enter</button>
    </>
    
    
    )

};