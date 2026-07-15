import React from "react";
import '../Styles/Aac.css';
import one from "../Assests/AAC/RP.jpg";
import two from "../Assests/AAC/SP.jpg";
import male from "../Assests/AAC/male_images.jpg";

function VisitingFaculty() {
  return (
    <div className="card-container-People">
      <div className="card-people">
        <h1 style={{textAlign: 'center', marginTop: "20px", textShadow: "rgba(0, 0, 0, 0.3) 2px 2px 4px"}}>
          Board of Studies
        </h1>
        <div className="card-people-item">
          <div className="card-people-img">
            <img src={one} alt="Prof. Rishikant Pandey" />
          </div>
          <div className="card-people-text">
            <h4 style={{marginBottom: "10px"}}>Prof. Rishikant Pandey</h4>
          <p><b>Professor & Former Head </b></p>
            <p>Department of Philosophy </p>
            <p>University of Allahabad, Prayagraj
            </p>
            
            <p>Email: profrkpandey69@gmail.com</p>
            <p>Phone: 9838925683</p>
          </div>
        </div>
        <div className="card-people-item">
          <div className="card-people-img">
            <img src={two} alt="Prof. S.P. Pandey" />
          </div>
          <div className="card-people-text">
            <h4 style={{marginBottom: "10px"}}>Prof. S.P.Pandey</h4>
            <p><b>Retd. Professor & Former Head </b></p>
            <p>Department of Philosophy and Religion </p>
            <p>Banaras Hindu University, Varanshi</p>
            
            <p>Email: sppandey1760@gmail.com</p>
            <p>Phone: 9415683237</p>
          </div>
        </div>
        <div className="card-people-item">
          <div className="card-people-img">
            <img src={male} alt="Prof. Purnendu Shekhar" />
          </div>
          <div className="card-people-text">
            <h4 style={{marginBottom: "10px"}}> Prof. Purnendu Shekhar</h4>
            <p><b>Professor & Head</b></p>
            <p>Department of Philosophy, </p>
            <p>TMBU, Bhagalpur, Bihar</p>            
            <p>Email: 262626pgps@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VisitingFaculty;