import React from "react";
import "../Styles/Institute.css";
import Carousels from "./Carousels";
import ImportantBox from "./ImportantBox";
const BoxHeading = "News & Announcement";
const BoxHeadingSecond = "Important Links";
const Image = "https://akucgs.vercel.app/assets/new.gif";
const NewsAndAnnouncement = [
  {
    id: 0,
    NewsName: "Admission 2026",
    href: 'https://adms.akubihar.ac.in/',
  },
  {
    id: 1,
    NewsName: "Philosophy Prospectus 2026",
    href: '/Prospectus for Philosophy.pdf',
  },
  {
    id: 2,
    NewsName: "Centres Notification 2026",
    href: "/Centres Notification.pdf",
  },
];

const ImportantLinks = [
  {
    id: 0,
    NewsName: "Admission Procedure 2026",
    href: "/Admission.pdf",
  },
];

function Institute() {
  return (
    <>
      <div className="Institute-tab">
        <div className="Institute-tab-one">
          <Carousels />
          <ImportantBox
            NewsAndAnnouncement={NewsAndAnnouncement}
            Image={Image}
            BoxHeading={BoxHeading}
          />
        </div>
        <div className="Institute-tab-two">
          <ImportantBox
            NewsAndAnnouncement={ImportantLinks}
            Image={Image}
            BoxHeading={BoxHeadingSecond}
          />
          <div className="Institute-tab-content" style={{marginLeft: '10px'}}>
            <h3 style={{textAlign: "justify"}}>
              The Aryabhatta Knowledge University was established by the Govt.
              of Bihar in its capital city Patna to promote the conventional as
              well as new frontiers of professional education and also to
              achieve excellence in teaching, research and extension work in
              these areas and other matters connected therewith.
            </h3>
            <br />
            <h3 style={{textAlign: "justify"}}>
              Knowledge creation and dissemination is one of the foremost
              objectives of the university. It gives me immense pleasure to 
              introduce the School of Philosophy at Aryabhatta Knowledge University, Patna. 
              Philosophy has always been regarded as the mother of all disciplines, 
              nurturing the spirit of inquiry, critical thinking, and ethical reflection. 
              In today’s fast-changing world, where science and technology are advancing
              at an unprecedented pace, the role of philosophy in guiding humanity with wisdom, 
              values, and ethical responsibility has become even more significant.
              The School of Philosophy at AKU has been established with the vision to revive 
              and strengthen philosophical traditions while engaging with contemporary issues 
              of society. Our mission is to develop a community of scholars who can blend the 
              depth of classical wisdom with the challenges of modern thought, 
              fostering dialogue across disciplines and cultures.
              Through its academic programs, research initiatives, seminars, and collaborations, 
              the School is committed to cultivating not only knowledge but also a sense of responsibility 
              and human values. I am confident that it will become a hub of intellectual exchange and 
              philosophical exploration, inspiring both students and scholars.
              I warmly welcome all learners, researchers, and faculty members to 
              contribute to this vibrant academic journey. Together, let us build a future
               where knowledge is guided by wisdom and progress is anchored in values.

            </h3>
          </div>
        </div>
      </div>
    </>
  );
}

export default Institute;
