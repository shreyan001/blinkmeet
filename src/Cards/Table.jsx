import Users from "../Users";
import './Cards.css'
export default function Table(){
    let x = 4 - Users.length;

    const loaddef = ()=>{
    
        for (; x; ) {
          return <div className="joindef"><div className="joindef1"><h3>+</h3><h4>Join</h4></div></div>
          }
    }
    return (
        <div className="table1">
          <div className="arrange2">  {Users.map((i)=>{return <div className="profles1">
                <img src={i.url} alt={i.name}/>
                <div className="nameit">{i.name}</div>
            </div>})}{loaddef()}</div>
           </div>
    )
                    
 
} 