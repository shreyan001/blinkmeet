import './Cards.css'
import { useState, useEffect } from 'react';
import axios from 'axios';


export default function Drooms({channelName,topicName,onOpen}){
    const topic = topicName;
    const API = import.meta.env.VITE_API_URI;
    const [isData, setData] = useState([]);
    const synx2 = async(name) => {
        const {data} = await axios.get(`http://${API}/api/channels/${name}`) 
        console.log({data})
        let data2 = data;
       if (data2) {
         
      const {data} = await axios.post(`http://${API}/api/users`, {addr:data2} )
      console.log(data,name);
      setData(data);
      }}; 
    
      useEffect(() => {
        synx2(channelName); 
    }, []);

    return (
        <div className="stall4"><div className="head4"><div className="Dhead1"><h3>Discussion</h3><h2>{topicName}</h2></div><button onClick={onOpen} className="button123">Join</button></div>
          <div className="arrange4">  {isData.map((i,index)=>{return <div key={index} className="profles4">
                <img src={i.url} alt={i.name}/>
                <div className="nameit4">{i.name}</div>
                <div className="nameit4">Host</div>
            </div>})}</div>
            </div>
    )
                    
 
} 