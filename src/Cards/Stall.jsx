import Users from "../Users";
import './Cards.css'
export default function Stall({titles,onOpen}){

    console.log(titles,1);
  
    return (
        <div className="stall1"><div className="head1"><h3>{titles.title}</h3><h2>Stall</h2></div>
          <div className="arrange1">  {Users.map((i)=>{return <div className="profles">
                <img src={i.url} alt={i.name}/>
                <div className="nameit">{i.name}</div>
                <span>{i.role}</span>
            </div>})}</div>
            <div className="head1 botm"><p className="mem">+{Users.length - 1} Members </p><button onClick={onOpen} className="button12">Join</button></div></div>
         
    )
                    
 
} 