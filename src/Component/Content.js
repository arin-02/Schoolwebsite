import React from "react";
import call from './call.png'
export default function Content() {

  return (
  <div className="flex justify-between"> 
        <div className="first flex">
            <ul className="flex decoration-none gap-x-6">
                <li>HOME</li>
                
                <li>
                CLASSES

                </li>
                <li>TEACHERS</li>
                <li>EVENTS</li>
                
                <li>CONTACTS</li>
            </ul>
        </div>
        <div className="second  flex gap-x-8">

        <div className="one w-8">
        <img src={call} alt="image " />
        </div>
        <div className="two w-8">
        <img src={call} alt="image" />
        </div>
        <div className="three w-8">
        <img src={call} alt="image" />
        </div>
        </div>
  </div>
  )
}
