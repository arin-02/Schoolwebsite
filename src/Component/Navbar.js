import React from 'react';
import projectimg from './projectimg.jpg'
import call from './call.png'
function Navbar() {
  return <div>
  <div className="start flex  mt-12 font-medium" style={{gap:"30%"}}>
  <div className="left text-xl flex">
      <div className="imgg w-16">
      <img src={projectimg} alt="image" />
      </div>
      <div className="schooltext">
        SCHOOL
      </div>
      </div>
      <div className="right flex gap-x-40 text-base">
      <div className="callus flex gap-x-4">
      <div className="callicon w-6 mt-2">
      <img src={call} alt="image" />
      </div>
      <div className="calliconright">
        <div className="calltext">
        CALL US
        </div>
        <div className="callnumber font-light text-base">
        +91 8822747438
        </div>
      </div>
      </div>


      <div className="business flex gap-x-4">
      <div className="busicon w-6 mt-2">
      <img src={call} alt="image" />
      </div>
      <div className="busiconright">
        <div className="bustext">
        CALL US
        </div>
        <div className="busnum  font-light text-base">
        +91 8822747438
        </div>
      </div>
      </div>


      <div className="location flex  gap-x-4">

      <div className="locicon w-6 mt-2">
      <img src={call} alt="image" />
      </div>
      <div className="lociconright">
        <div className="loctext">
        CALL US
        </div>
        <div className="locnum  font-light text-base">
        +91 8822747438
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
