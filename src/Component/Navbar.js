import React from 'react';
import projectimg from './projectimg.png'
import loc from './loc.png'
import clock from './clock.png'
import call from './call.png'
function Navbar() {
  return <div>
  <div className="start flex  mt-12 font-medium" style={{gap:"30%"}}>
  <div className="left text-xl flex">
      <div className="imgg w-16">
      <img src={projectimg} alt="image" />
      </div>
      <div className="schooltext" style={{color:"#ff5707"}}>
        SCHOOL
      </div>
      </div>
      <div className="right flex gap-x-20 text-lg" style={{color:"#54595F"}}>
      <div className="callus flex gap-x-4">
      <div className="callicon w-6 mt-2">
      <img src={call} alt="image" />
      </div>
      <div className="calliconright">
        <div className="calltext">
        CALL US
        </div>
        <div className="callnumber font-light text-lg">
        +91 8822747438
        </div>
      </div>
      </div>


      <div className="business flex gap-x-4">
      <div className="busicon w-8 "  >
      <img  src={clock} alt="image" />
      </div>
      <div className="busiconright">
        <div className="bustext">
        Business Hours
        </div>
        <div className="busnum  font-light text-lg">
        MON-FRI  8AM-5PM
        </div>
      </div>
      </div>


      <div className="location flex  gap-x-4">

      <div className="locicon w-8 mt-2">
      <img src={loc} alt="image" />
      </div>
      <div className="lociconright">
        <div className="loctext">
        Location
        </div>
        <div className="locnum  font-light text-base">
        Sec-17 , Chandigarh
        </div>
      </div>


      </div>

      </div>

  </div>
  <br/>
  
  <hr/>

</div>;
}

export default Navbar;
