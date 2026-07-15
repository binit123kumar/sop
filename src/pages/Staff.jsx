import React from "react";

// Sahi Relative Path: Aapka images import structure
import durgeshPic from "../Assests/faculty/durgeshPic.jpeg";
import gulshanPic from "../Assests/faculty/gulshanPic.jpeg";
import sumitPic from "../Assests/faculty/sumitPic.jpeg";
import ritikPic from "../Assests/faculty/ritikPic.jpeg";
import priyaPic from "../Assests/faculty/priyaPic.jpeg";

function Staff() {
  // 2. Staff Section Data
  const staffList = [
    {
      name: "Durgesh Singh Rajput",
      qualification: "", 
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


    // ================= PROFESSIONAL STAFF CARD STYLES =================
    staffCard: {
      display: 'flex',
      alignItems: 'center',
      padding: '20px',
      borderRadius: '10px',
      backgroundColor: '#f8fafc', 
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.02)',
      border: '1px solid #e2e8f0',
      borderLeft: '6px solid #0f766e' 
    },
    staffName: {
      margin: '0 0 6px 0', 
      fontWeight: '700', 
      color: '#0f172a', 
      fontSize: '1.25rem'
    },
    staffInfo: {
      margin: '0', 
      color: '#475569', 
      fontSize: '0.95rem',
      lineHeight: '1.5'
    },
    staffEmail: {
      display: 'block',
      color: '#0f766e', 
      fontWeight: '600',
      marginTop: '4px'
    }
  };

  return (
    <div style={styles.mainContainer}>
      <div style={styles.containerBox}>
        
        {/* Main Page Heading */}
        <div style={styles.titleSection}>
          <h2 style={styles.titleText}>Department Directory</h2>
        </div>


        {/* ================= STAFF SECTION (TEAL/OFF-WHITE THEME) ================= */}
        <h3 style={styles.sectionHeading}>
          <span style={{color: '#0f766e'}}>🔸</span> Staff & Support
        </h3>
        <div style={styles.listGroup}>
          {staffList.map((staff, index) => (
            <div key={index} style={styles.staffCard}>
              <div style={styles.imageWrapper}>
                <img 
                  src={staff.image} 
                  alt={staff.name} 
                  style={{...styles.avatar, borderColor: '#cbd5e1'}}
                  onError={(e) => {
                    e.target.src = "https://via.placeholder.com/85/e2e8f0/0f766e?text=Staff";
                  }}
                />
              </div>
              <div>
                <h5 style={styles.staffName}>{staff.name}</h5>
                <p style={styles.staffInfo}>
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
                  <span style={styles.staffEmail}>
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

export default Staff;