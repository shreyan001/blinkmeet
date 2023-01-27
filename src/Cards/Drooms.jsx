import Users from "../Users";
import './Cards.css'
export default function Drooms(){
  
    return (
        <div className="stall4"><div className="head4"><div className="Dhead1"><h3>SpaceMeet</h3><h2>Advantages of decentralized meet</h2></div><button className="button123">Join</button></div>
          <div className="arrange4">  {Users.map((i)=>{return <div className="profles4">
                <img src={i.url} alt={i.name}/>
                <div className="nameit4">{i.name}</div>
                <span>{i.role}</span>
            </div>})}</div>
            </div>
    )
                    
 
} 