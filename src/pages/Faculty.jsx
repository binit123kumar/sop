import React from "react";

// Sahi Relative Path: Aapka images import structure
import durgeshPic from "../Assests/faculty/durgeshPic.jpeg";
import gulshanPic from "../Assests/faculty/gulshanPic.jpeg";
import sumitPic from "../Assests/faculty/sumitPic.jpeg";
import ritikPic from "../Assests/faculty/ritikPic.jpeg";
import priyaPic from "../Assests/faculty/priyaPic.jpeg";
import sachinPic from "../Assests/faculty/sachinPic.jpeg";

function Faculty() {
  // Staff Data List jo aapke format ko fully support karegi
  const staffList = [
    {
      name: "Sachin Pandey",
      qualification: "",
      designation: "Consultant",
      dept: "School of Philosophy",
      contact: "sachinp781998@gmail.com",
      image: sachinPic
    },
    {
      name: "Durgesh Singh Rajput",
      qualification: "", // Agar qualification ho toh fill kar sakte hain
      designation: "Assistant",
      dept: "School of Philosophy",
      contact: "durgeshsinghrajput621@gmail.com",
      image: durgeshPic
    },
    {
      name: "Gulshan Kumar",
      qualification: "",
      designation: "Assistant",
      dept: "School of Philosophy",
      contact: "gulshan.vanu@gmail.com",
      image: gulshanPic
    },
    {
      name: "Sumit Kumar",
      qualification: "",
      designation: "Assistant",
      dept: "School of Philosophy",
      contact: "Sumitroy973839@gmail.com",
      image: sumitPic
    },
    {
      name: "Ritik Kumar",
      qualification: "",
      designation: "Assistant",
      dept: "School of Philosophy",
      contact: "babuaan.pk@gmail.com",
      image: ritikPic
    },
    {
      name: "Priya Sharma",
      qualification: "",
      designation: "Assistant",
      dept: "School of Philosophy",
      contact: "priyasharma05012001@gmail.com",
      image: priyaPic
    }
  ];

  // --- Page4 Format Inline Styles Objects ---
  const styles = {
    mainContainer: {
      padding: "20px",
      backgroundColor: "#f9f9f9",
      minHeight: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "flex-start",
      fontFamily: "Arial, sans-serif"
    },
    containerBox: {
      backgroundColor: '#f0f0f0', 
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.4)', 
      marginTop: '50px',
      borderRadius: '8px',
      padding: '24px',
      width: '100%',
      maxWidth: '850px'
    },
    titleSection: {
      textAlign: 'center',
      marginBottom: '24px'
    },
    titleText: {
      margin: '0',
      fontSize: '1.75rem',
      color: '#333',
      fontWeight: 'bold'
    },
    listGroup: {
      display: 'flex',
      flexDirection: 'column',
      gap: '12px'
    },
    cardItem: {
      display: 'flex',
      alignItems: 'center',
      padding: '16px',
      border: '1px solid #dee2e6',
      borderRadius: '6px',
      backgroundColor: '#fff',
      boxShadow: '0 0.125rem 0.25rem rgba(0, 0, 0, 0.075)'
    },
    imageWrapper: {
      marginRight: '24px'
    },
    avatar: {
      height: '80px', 
      width: '80px', 
      objectFit: 'cover',
      borderRadius: '50%',
      border: '1px solid #dee2e6'
    },
    nameText: {
      marginBottom: '4px', 
      fontWeight: 'bold', 
      color: '#222',
      fontSize: '1.2rem',
      marginTop: '0'
    },
    infoText: {
      marginBottom: '0', 
      color: '#6c757d', 
      fontSize: '0.95rem',
      lineHeight: '1.5'
    },
    blockSpan: {
      display: 'block'
    },
    emailSpan: {
      display: 'block',
      color: '#0d6efd', // Professional Bootstrap Blue look
      fontWeight: '500'
    }
  };

  return (
    <div style={styles.mainContainer}>
      <div style={styles.containerBox}>
        
        {/* Page Heading */}
        <div style={styles.titleSection}>
          <h2 style={styles.titleText}>Staff List</h2>
        </div>

        {/* Vertical List View */}
        <div style={styles.listGroup}>
          {staffList.map((staff, index) => (
            <div key={index} style={styles.cardItem}>
              
              {/* Profile Image Avatar */}
              <div style={styles.imageWrapper}>
                <img 
                  src={staff.image} 
                  alt={staff.name} 
                  style={styles.avatar}
                  onError={(e) => {
                    // Agar kisi wajah se image path resolve na ho toh automatic fallback break nahi hone dega
                    e.target.src = "https://via.placeholder.com/80?text=PSE";
                  }}
                />
              </div>
              
              {/* Staff Information Content */}
              <div>
                <h5 style={styles.nameText}>
                  {staff.name}
                </h5>
                
                <p style={styles.infoText}>
                  {staff.qualification && (
                    <span style={styles.blockSpan}>
                      <strong>Qualification:</strong> {staff.qualification}
                    </span>
                  )}
                  <span style={styles.blockSpan}>
                    <strong>Designation:</strong> {staff.designation}
                  </span>
                  <span style={styles.blockSpan}>
                    <strong>Department:</strong> {staff.dept}
                  </span>
                  <span style={styles.emailSpan}>
                    <strong>Contact / Email:</strong> {staff.contact}
                  </span>
                </p>
              </div>

            </div>
          ))}
        </div>

      </div>
    </div>
  );
}

export default Faculty;