import { Connect } from "./Connect";
import { HuddleIframe,  huddleIframeApp  } from "@huddle01/huddle01-iframe";
import { useAccount } from "wagmi";
 
const iframeConfig = {
    roomUrl: "https://iframe.huddle01.com/123",
    noBorder: false, // false by default
  };

const Event = () => {

   const {address} = useAccount(); 
   
huddleIframeApp.methods.connectWallet(address);

   return (

      <>
     
      <div className="stream">
        <div className="btn1"></div>
        <div className="miniNav"> Holiday hack meet
              <Connect/>
        </div>
      </div>

      <div className="sec2">
      <HuddleIframe config={iframeConfig} />
      </div>
     
     <div className="talkBox">
     <section className="s1">
        <p>Stalls</p>
        <div className="stl1"><img src="v.png" alt="v" /></div>
     </section>
     <section className="s2">
        <p>Open Tables</p>  
     </section>
     <section className="s3">
        <p>Discussion Rooms</p>
     </section>
     </div>
      
      
      
      </>


   );
    

}
export default Event;