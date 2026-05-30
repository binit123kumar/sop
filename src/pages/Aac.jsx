import React from "react";
import '../Styles/Aac.css'
import one from "../Assests/AAC/RP.jpg"
import two from "../Assests/AAC/SP.jpg"
import three from "../Assests/AAC/SK.jpg"
import four from "../Assests/AAC/PS.jpg"
import five from "../Assests/AAC/PS.jpg"
import six from "../Assests/AAC/VS.jpg"
import seven from "../Assests/AAC/AU.jpg"
import eight from "../Assests/AAC/AV.jpg"

function Aac() {
  return (
    <div class="card-container-People">
      <div class="card-people">
        <h1 style={{textAlign: 'center',marginTop: "20px",textShadow: "rgba(0, 0, 0, 0.3) 2px 2px 4px"}}>
          Academic Advisory Committee
        </h1>
        <div class="card-people-item">
          <div class="card-people-img">
           <img src={one} alt="PeoplePage" />
          </div>
          <div class="card-people-text">
            <h4 style={{marginBottom: "10px"}}>Prof. Rishikant Pandey</h4>
            <p>Chairman</p>
            <p>Email: profrkpandey69@gmail.com</p>
            <p>Phone: 9838925683</p>
          </div>
        </div>
        <div class="card-people-item">
          <div class="card-people-img">
           <img src={two} alt="PeoplePage" />
          </div>
          <div class="card-people-text">
            <h4 style={{marginBottom: "10px"}}>Prof.S.P.Pandey</h4>
            <p>External Member</p>
            <p>Email: sppandey1760@gmail.com</p>
            <p>Phone: 9415683237</p>
          </div>
        </div>
        <div class="card-people-item">
          <div class="card-people-img">
            <img src={three} alt="PeoplePage" />
          </div>
          <div class="card-people-text">
            <h4 style={{marginBottom: "10px"}}>Prof. Shyamal Kishore</h4>
            <p>External Member</p>
            <p>Email: shyamalkishore11@gmail.com</p>
           
          </div>
        </div>
        <div class="card-people-item">
          <div class="card-people-img">
          
          </div>
          <div class="card-people-text">
            <h4 style={{marginBottom: "10px"}}> Prof. Purnendu Shekhar</h4>
            <p>Member</p>
            <p>Email: 262626pgps@gmail.com</p>
            
          </div>
        </div>
        <div class="card-people-item">
          <div class="card-people-img">
            <img src={eight} alt="PeoplePage" />
          </div>
          <div class="card-people-text">
            <h4 style={{marginBottom: "10px"}}>Dr. Anubhav Vashney</h4>
            <p>Member</p>
          </div>
        </div>
        <div class="card-people-item">
          <div class="card-people-img">
            <img src={five} alt="PeoplePage" />
          </div>
          <div class="card-people-text">
            <h4 style={{marginBottom: "10px"}}>Dr.Prasant Shukla</h4>
            <p>Member</p>
        
          </div>
        </div>
        <div class="card-people-item">
          <div class="card-people-img">
            <img src={six} alt="PeoplePage" />
          </div>
          <div class="card-people-text">
            <h4 style={{marginBottom: "10px"}}>Dr.Vijeta Singh</h4>
            <p>Member</p>
            <p>Email: s.vijetavns@gmail.com</p>
            <p>Phone: 7209475615</p>
          </div>
        </div>
        <div class="card-people-item">
          <div class="card-people-img">
            <img src={seven} alt="PeoplePage" />
          </div>
          <div class="card-people-text">
            <h4 style={{marginBottom: "10px"}}>Dr.Abhishek Upadhyay</h4>
            <p>Member</p>
          </div>
        </div>
        <div class="card-people-item">
          <div class="card-people-img">
            
          </div>
          <div class="card-people-text">
            <h4 style={{marginBottom: "10px"}}>Dr.Kumari Anjana</h4>
            <p>Member Secretary</p>
            <p>Email: dr.akupatns@gmail.com</p>
          </div>
        </div>
        <div class="card-people-item">
          <div class="card-people-img">
            
          </div>
          <div class="card-people-text">
            <h4 style={{marginBottom: "10px"}}>Sachin Pandey</h4>
            <p>Special Invitee Member</p>
            <p>Email: sachinp781990@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Aac;
