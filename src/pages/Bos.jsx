import React from "react";
import '../Styles/Aac.css';
import female from "../Assests/AAC/female_images.jpg";
import male from "../Assests/AAC/male_images.jpg";

function Bos() {
  return (
    <div className="card-container-People">
      <div className="card-people">
        <h1 style={{textAlign: 'center', marginTop: "20px", textShadow: "rgba(0, 0, 0, 0.3) 2px 2px 4px"}}>
          Academic Advisory Committee
        </h1>
        <div className="card-people-item">
          <div className="card-people-img">
            <img src={male} alt="Prof. (Dr.) Sharad Kumar Yadav" />
          </div>
          <div className="card-people-text">
            <p><b>Chairman</b></p>
            <h4 style={{marginBottom: "10px"}}>Prof. (Dr.) Sharad Kumar Yadav</h4>
            
            <p>Vice-Chancellor, Aryabhatta Knowledge University, Patna</p>
            
          </div>
        </div>
        <div className="card-people-item">
          <div className="card-people-img">
            <img src={male} alt="Prof. R.C. Sinha" />
          </div>
          <div className="card-people-text">
            <p> <b>Member</b> </p>
            <h4 style={{marginBottom: "10px"}}>Prof R.C. Sinha</h4>
            <p>Retd. Professor & Head, Patna University</p> 
            <p>Former Chairman ICPR, MoE, New Delhi</p>
            
            <p>Email: rcsinha22@gmail.com</p>
            <p>Phone: 9334306254</p>
          </div>
        </div>
        <div className="card-people-item">
          <div className="card-people-img">
            <img src={female} alt="Prof. Abha Singh" />
          </div>
          <div className="card-people-text">
            <p> <b>Member</b> </p>
            <h4 style={{marginBottom: "10px"}}>Prof. Abha Singh</h4>
            <p>Professor & Head, P G Department of Philosophy(Retd.), Patliputra University, Patna</p> 
            <p>Formerly Pro Vice Chancellor, B N Mandal University, Madhepura</p>
            <p>Formerly Visiting Professor as ICCR Chair to M.G. Institute, Mauritius</p>
            
            <p>Email: abhasingh126@gmail.com</p>
            <p>Phone: 9430247183, 9162123093</p>
          </div>
        </div>
        <div className="card-people-item">
          <div className="card-people-img">
            <img src={male} alt="Dr. Punam Singh" />
          </div>
          <div className="card-people-text">
            <p> <b>Member</b> </p>
            <h4 style={{marginBottom: "10px"}}> Dr. Punam Singh</h4>
            <p>University Professor (Retired) </p>
            <p>Former Head, Department of Philosophy, Patna University, Patna, Bihar</p>
            
            <p>Email: punamsingh209@gmail.com</p>
            <p>Phone: 9471938688</p>
          </div>
        </div>
        <div className="card-people-item">
          <div className="card-people-img">
            <img src={male} alt="Prof. N. P. Tiwary" />
          </div>
          <div className="card-people-text">
            <p> <b>Member</b> </p>
            <h4 style={{marginBottom: "10px"}}>Prof. N. P. Tiwary</h4>
            <p>Retd. Prof., Philosophy, Patna University</p>
            
            <p>Email: nptiwary.pu@gmail.com</p>
            <p>Phone: 9939205267</p>
          </div>
        </div>
        <div className="card-people-item">
          <div className="card-people-img">
            <img src={male} alt="Prof. Rajesh Kumar Singh" />
          </div>
          <div className="card-people-text">
            <p> <b>Member</b> </p>
            <h4 style={{marginBottom: "10px"}}>Prof. Rajesh Kumar Singh</h4>
            <p>Prof & Head, PG Dept. of Philosophy</p>
            
            <p>Email: rks2951961@gmail.com</p>
            <p>Phone: 9430060611</p>
          </div>
        </div>
        <div className="card-people-item">
          <div className="card-people-img">
            <img src={female} alt="Prof. Veena Kumari" />
          </div>
          <div className="card-people-text">
            <p> <b>Member</b> </p>
            <h4 style={{marginBottom: "10px"}}>Prof. Veena Kumari</h4>
            <p>J.D. Women's College, Patliputra University</p>
            
            <p>Email: veenamrit24@gmail.com</p>
            <p>Phone: 9431623983</p>
          </div>
        </div>
        <div className="card-people-item">
          <div className="card-people-img">
            <img src={female} alt="Dr. Shyamal Kishor" />
          </div>
          <div className="card-people-text">
            <p> <b>Member</b> </p>
            <h4 style={{marginBottom: "10px"}}>Dr. Shyamal Kishor </h4>
            <p>Associate Professor and Head, PG Dept of Philosophy</p>
            <p>T P S College, Patliputra University, Patna 800001</p>
            
            <p>Email: shyamalkishore11@gmail.com</p>
            <p>Phone: 9934664788</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Bos;