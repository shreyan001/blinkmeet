import './Cards.css'
import { useState,useEffect } from 'react';
import axios from 'axios';

export default function Stall({title,onOpen,host,stallName}){

    const API = import.meta.env.VITE_API_URI;
    const [isData, setData] = useState([]);

    const cosx = async() => {
      const {data} = await axios.post(`http://${API}/api/hosts`, {address:host} )
      console.log([data.userDoc])
      return data.userDoc; // return the value from cosx function
    };
    
    const synx2 = async(name) => { 
      const {data} = await axios.get(`http://${API}/api/stalls/${name}`) 
      console.log({data})
      let data2 = data;
    
      if (data2) {
        const {data} = await axios.post(`http://${API}/api/users`, {addr:data2} )
        console.log(data,name);
        if (isData.length === 0 || JSON.stringify(isData[isData.length - 1]) !== JSON.stringify(data)) {
            setData(isData => [...isData, ...data]); // update the isData state by appending the new data to the previous state
        }// update the isData state by appending the new data to the previous state
        console.log(isData) 
      }
    }; 
    
    useEffect(() => {
      async function fetchData() {
        try {
          const cosxResult = await cosx();
          setData([cosxResult]); // set the initial value of isData as an array with cosxResult
          await synx2(stallName);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      }
      fetchData();
    }, [stallName]);

    useEffect(() => {
        const intervalId = setInterval(() => {
        synx2(stallName); 
    
        }, 10000);
    
        return () => clearInterval(intervalId);
      }, [isData]);
       
   

  
    return (
        <div className="stall1"><div className="head1"><h3>{title}</h3><h2>Stall</h2></div>
          <div className="arrange1 stallclip">  {isData.map((i,index)=>{return <div key={index} className="profles">
                <div className="image-clip"><img src={i.image} alt={i.name}/></div>
                <div className="nameit">{i.name}</div>
                <span>{i.title}</span>
            </div>})}</div>{console.log(isData)}
            <div className="head1 botm"><p className="mem">+{isData.length - 1} Members </p><button onClick={()=>onOpen(stallName)} className="button12">Join</button></div></div>
         
    )
                    
 
} 