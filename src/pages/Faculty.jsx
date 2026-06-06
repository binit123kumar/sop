import React from "react";

// Sahi Relative Path: Aapka images import structure
import durgeshPic from "../Assests/faculty/durgeshPic.jpeg";
import gulshanPic from "../Assests/faculty/gulshanPic.jpeg";
import sumitPic from "../Assests/faculty/sumitPic.jpeg";
import ritikPic from "../Assests/faculty/ritikPic.jpeg";
import priyaPic from "../Assests/faculty/priyaPic.jpeg";
import sachinPic from "../Assests/faculty/sachinPic.jpeg";
import RupeshPic from "../Assests/faculty/RupeshPic.jpeg";
import DeepnarayanPic from "../Assests/faculty/DeepnarayanPic.jpeg";

function Faculty() {
  // 1. Faculty Section Data
  const facultyList = [
    {
      name: "Sachin Pandey",
      qualification: "",
      designation: "Consultant", 
      dept: "School of Philosophy",
      contact: "sachinp781998@gmail.com",
      image: sachinPic
    },
    {
      name: "Dr. Rupesh Kumar Singh",
      qualification: "",
      designation: "Assistant professor (Guest)", 
      dept: "School of Philosophy",
      contact: "rupesh.singh649@gmail.com",
      image: RupeshPic
    },
    {
      name: "Dr. Deepnarayan Upadhyay",
      qualification: "",
      designation: "Assistant Professor (guest)", 
      dept: "School of Philosophy",
      contact: " rd.upd5294@gmail.com",
      image: sachinPic
    }
  ];

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

    // ================= NEW CUSTOM STYLES FOR BLUE FACULTY CARD =================
    facultyCard: {
      display: 'flex',
      alignItems: 'center',
      padding: '20px',
      borderRadius: '10px',
      backgroundColor: '#1e3a8a', // Deep Professional Blue
      boxShadow: '0 4px 12px rgba(30, 58, 138, 0.25)',
      transition: 'transform 0.2s',
      borderLeft: '6px solid #3b82f6'
    },
    facultyName: {
      margin: '0 0 6px 0', 
      fontWeight: '700', 
      color: '#ffffff', // White text for blue background
      fontSize: '1.3rem'
    },
    facultyInfo: {
      margin: '0', 
      color: '#bfdbfe', // Muted light blue text
      fontSize: '0.95rem',
      lineHeight: '1.5'
    },
    facultyEmail: {
      display: 'block',
      color: '#60a5fa', // Bright electric blue for visibility
      fontWeight: '600',
      marginTop: '4px'
    },

    // ================= NEW CUSTOM STYLES FOR PROFESSIONAL STAFF CARD =================
    staffCard: {
      display: 'flex',
      alignItems: 'center',
      padding: '20px',
      borderRadius: '10px',
      backgroundColor: '#f8fafc', // Modern Off-White / Light Slate
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.02)',
      border: '1px solid #e2e8f0',
      borderLeft: '6px solid #0f766e' // Sophisticated Teal Accent Line
    },
    staffName: {
      margin: '0 0 6px 0', 
      fontWeight: '700', 
      color: '#0f172a', // Dark Slate Slate
      fontSize: '1.25rem'
    },
    staffInfo: {
      margin: '0', 
      color: '#475569', // Professional grey
      fontSize: '0.95rem',
      lineHeight: '1.5'
    },
    staffEmail: {
      display: 'block',
      color: '#0f766e', // Teal color for email link
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

export default Faculty;
