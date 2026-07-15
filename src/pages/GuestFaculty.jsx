import React from "react";

// Sahi Relative Path: Aapka images import structure
import RupeshPic from "../Assests/faculty/RupeshPic.jpeg";
import DeepnarayanPic from "../Assests/faculty/DeepnarayanPic.jpeg";

function GuestFaculty() {
  // 1. Faculty Section Data
  const facultyList = [
    {
      name: "Dr. Rupesh Kumar Singh",
      qualification: "M.A, PhD",
      designation: "Assistant professor (Guest)", 
      dept: "School of Philosophy",
      contact: "rupesh.singh649@gmail.com",
      image: RupeshPic
    },
    {
      name: "Dr. Deepnarayan Upadhyay",
      qualification: "M.A, PhD",
      designation: "Assistant Professor (guest)", 
      dept: "School of Philosophy",
      contact: "rd.upd5294@gmail.com",
      image: DeepnarayanPic // Yahan pehle sachinPic tha, ab error fix karne ke liye DeepnarayanPic kar diya hai
    }
  ];

  // --- Inline Styles ---
  const styles = {
    mainContainer: {
      padding: "20px",
      backgroundColor: "#f4f6f9",
      minHeight: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "flex-start",
      fontFamily: "Arial, sans-serif"
    },
    containerBox: {
      backgroundColor: '#ffffff', 
      boxShadow: '0 10px 25px rgba(0, 0, 0, 0.08)', 
      marginTop: '50px',
      borderRadius: '12px',
      padding: '32px',
      width: '100%',
      maxWidth: '850px'
    },
    titleSection: {
      textAlign: 'center',
      marginBottom: '32px',
      borderBottom: '2px dashed #e2e8f0',
      paddingBottom: '16px'
    },
    titleText: {
      margin: '0',
      fontSize: '2.2rem',
      color: '#1a202c',
      fontWeight: '800',
      textTransform: 'uppercase',
      letterSpacing: '1px'
    },
    sectionHeading: {
      fontSize: '1.4rem',
      color: '#2d3748',
      paddingBottom: '8px',
      marginBottom: '16px',
      marginTop: '32px',
      fontWeight: '700',
      display: 'flex',
      alignItems: 'center',
      gap: '8px'
    },
    listGroup: {
      display: 'flex',
      flexDirection: 'column',
      gap: '16px'
    },
    imageWrapper: {
      marginRight: '24px'
    },
    avatar: {
      height: '85px', 
      width: '85px', 
      objectFit: 'cover',
      borderRadius: '50%',
      border: '3px solid rgba(255,255,255,0.2)'
    },
    blockSpan: {
      display: 'block',
      marginBottom: '2px'
    },

    // ================= BLUE FACULTY CARD STYLES =================
    facultyCard: {
      display: 'flex',
      alignItems: 'center',
      padding: '20px',
      borderRadius: '10px',
      backgroundColor: '#1e3a8a', 
      boxShadow: '0 4px 12px rgba(30, 58, 138, 0.25)',
      transition: 'transform 0.2s',
      borderLeft: '6px solid #3b82f6'
    },
    facultyName: {
      margin: '0 0 6px 0', 
      fontWeight: '700', 
      color: '#ffffff', 
      fontSize: '1.3rem'
    },
    facultyInfo: {
      margin: '0', 
      color: '#bfdbfe', 
      fontSize: '0.95rem',
      lineHeight: '1.5'
    },
    facultyEmail: {
      display: 'block',
      color: '#60a5fa', 
      fontWeight: '600',
      marginTop: '4px'
    }

  };

  return (
    <div style={styles.mainContainer}>
      <div style={styles.containerBox}>
        
        {/* Main Page Heading */}
        <div style={styles.titleSection}>
          <h2 style={styles.titleText}>ASSISTANT PROFESSOR (GUEST FACULTY)</h2>
        </div>

        {/* ================= FACULTY SECTION (BLUE THEME) ================= */}
        <h3 style={styles.sectionHeading}>
          <span style={{color: '#1e3a8a'}}>🔹</span> Faculty Members
        </h3>
        <div style={styles.listGroup}>
          {facultyList.map((faculty, index) => (
            <div key={index} style={styles.facultyCard}>
              <div style={styles.imageWrapper}>
                <img 
                  src={faculty.image} 
                  alt={faculty.name} 
                  style={{...styles.avatar, borderColor: '#3b82f6'}}
                  onError={(e) => {
                    e.target.src = "https://via.placeholder.com/85/1e3a8a/ffffff?text=Faculty";
                  }}
                />
              </div>
              <div>
                <h5 style={styles.facultyName}>{faculty.name}</h5>
                <p style={styles.facultyInfo}>
                  {faculty.qualification && (
                    <span style={styles.blockSpan}>
                      <strong>Qualification:</strong> {faculty.qualification}
                    </span>
                  )}
                  <span style={styles.blockSpan}>
                    <strong>Designation:</strong> {faculty.designation}
                  </span>
                  <span style={styles.blockSpan}>
                    <strong>Department:</strong> {faculty.dept}
                  </span>
                  <span style={styles.facultyEmail}>
                    <strong>Contact / Email:</strong> {faculty.contact}
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

export default GuestFaculty;