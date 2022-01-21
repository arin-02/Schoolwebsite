import React from "react";
import t1 from "./t1.jpg";
import t2 from "./t2.jpg";
import t3 from "./t3.jpg";
import t4 from "./t4.jpg";
import call from "./call.png"
export default function Footer() {
  return (
    <div>
      <div className="Techers text ">
        <h1>Our Awesome teachers</h1>
      </div>
      <div>
        <p>
          Rapid learning rapid authoring tools web based training (wbt) informal
          learning virtual classroom, roi instructional designer big data
        </p>
      </div>
      <div className="teachers flex ">
        <div className="teacherone margin mx-8">
          <img src={t1} alt="image" />
          <p>Polina Kerston</p>
          <p>English Teacher</p>
        </div>
        <div className="teachertwo margin mx-8">
          <img src={t2} alt="image" />
          <p>Faadi Al Rahman</p>
          <p>Maths Teacher</p>
        </div>
        <div className="teacherthree margin mx-8">
          <img src={t3} alt="image" />
          <p>Katayama Fumiki</p>
          <p>Arts Teacher</p>
        </div>
        <div className="teacherfour margin mx-8">
          <img src={t4} alt="image" />
          <p>Chikelu Obasea</p>
          <p>Instructor</p>
        </div>
      </div>
      <div className="form bg-red-600 flex">
        <div>
          <h1>Join Us</h1>
          <h1>and stay tuned!</h1>
          <p>
            Curation active learning ecosystem learning content management
            system lxd lxp rapid learning
          </p>
        </div>
        <div className="info block">
            <div className="entry flex">
                <label>Your Name</label>
                <input>

                </input>
                
                <label>Your Email</label>
                <input>
                
                </input>
            </div>
            <div>
            <label>Message</label>
                <input>
                
                </input>
            </div>
            <div>
                <button>
                    Send a message
                </button>
            </div>
        </div>
      </div>
      <div className="footer">
          <div className="Contact Us">
              <h1>
                  Contact Us
              </h1>
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

          </div>
          <div className="Quicklinks">

          </div>
          <div>
              <div>

              </div>
              <div>

              </div>
          </div>
      </div>
    </div>
  );
}
