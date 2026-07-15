import React from "react";
import '../Styles/Aac.css';
import one from "../Assests/AAC/RP.jpg";
import two from "../Assests/AAC/SP.jpg";
import three from "../Assests/AAC/SK.jpg";
import five from "../Assests/AAC/PS.jpg";
import six from "../Assests/AAC/VS.jpg";
import seven from "../Assests/AAC/AU.jpg";
import eight from "../Assests/AAC/AV.jpg";
import female from "../Assests/AAC/female_images.jpg";
import male from "../Assests/AAC/male_images.jpg";

function Aac() {
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
            <img src={three} alt="Prof. Shyamal Kishore" />
          </div>
          <div className="card-people-text">
            <h4 style={{marginBottom: "10px"}}>Prof. Shyamal Kishore</h4>
            <p><b>Professor &  Principal</b></p>
            <p>Department of Philosophy </p>
            <p>Rameshwar Mahavidyalay Muzaffarpur, BRABU, Bihar</p>
            
            <p>Email: shyamalkishore11@gmail.com</p>
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
        <div className="card-people-item">
          <div className="card-people-img">
            <img src={five} alt="Dr. Prasant Shukla" />
          </div>
          <div className="card-people-text">
            <h4 style={{marginBottom: "10px"}}>Dr.Prasant Shukla</h4>
            <p><b>Professor</b></p>
            <p>Department of Philosophy </p>
            <p>Lucknow University, Lucknow</p>
            <p>Email: prashant.philosophy@yahoo.com</p>
          </div>
        </div>
        <div className="card-people-item">
          <div className="card-people-img">
            <img src={eight} alt="Dr. Anubhav Vashney" />
          </div>
          <div className="card-people-text">
            <h4 style={{marginBottom: "10px"}}>Dr. Anubhav Vashney</h4>
            <p><b>Associate Professor & Head</b></p>
            <p>Department of Philosophy </p>
            <p>University of Rajasthan, Jaipur</p>
            
          </div>
        </div>
        <div className="card-people-item">
          <div className="card-people-img">
            <img src={six} alt="Dr. Vijeta Singh" />
          </div>
          <div className="card-people-text">
            <h4 style={{marginBottom: "10px"}}>Dr.Vijeta Singh</h4>
            <p><b>Associate Professor & Head</b></p>
            <p>Dept. of Philosophy </p>
            <p>Patna University, Patna</p>
           
            <p>Email: s.vijetavns@gmail.com</p>
            <p>Phone: 7209475615</p>
          </div>
        </div>
        <div className="card-people-item">
          <div className="card-people-img">
            <img src={seven} alt="Dr. Abhishek Upadhyay" />
          </div>
          <div className="card-people-text">
            <h4 style={{marginBottom: "10px"}}>Dr.Abhishek Upadhyay</h4>
            <p>
              <b>Associate Professor</b>
            </p>
            <p>Department of Philosophy</p>
            <p> University of Delhi, New Delhi</p>
            
          </div>
        </div>
        <div className="card-people-item">
          <div className="card-people-img">
            <img src={female} alt="Dr.Kumari Anjana" />
          </div>
          <div className="card-people-text">
            <h4 style={{marginBottom: "10px"}}>Dr.Kumari Anjana</h4>
            <p><b>Deputy Registrar</b></p>
            <p>Aryabhatta Knowledge University</p>
           
            <p>Email: dr.akupatns@gmail.com</p>
          </div>
        </div>
        <div className="card-people-item">
          <div className="card-people-img">
            <img src={male} alt="Dr. Sachin Pandey" />
          </div>
          <div className="card-people-text">
            <h4 style={{marginBottom: "10px"}}>Dr. Sachin Pandey</h4>
            <p><b>Consultant</b></p>
            <p>School of Philosophy </p>
            <p>Aryabhatta Knowledge University</p>
           
            <p>Email: sachinp781990@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Aac;