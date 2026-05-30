import React from "react";
import '../Styles/Aim.css';

function AimAndObjective() {
  return (
    <div className="AimdBox">
      <h1 style={{ textAlign: "center" }}>Aim And Objective</h1>
      
      <p className="AimIntro">
        The mission of the proposed School of Philosophy is to cultivate a transformative educational
        environment that fosters critical thinking, ethical reflection, interdisciplinary dialogue, and
        cultural-rootedness. Anchored in the principles of the National Education Policy (NEP) 2020, 
        the School aims to:
      </p>

      <ul className="AimList">
        <li>
          <strong>(i) Promote Philosophical Inquiry:</strong> Encourage students to engage with fundamental questions about existence, knowledge, ethics, and human purpose through the study of Indian and Western philosophical traditions.
        </li>
        <li>
          <strong>(ii) Preserve and Revitalize Indian Intellectual Heritage:</strong> Reintroduce classical Indian philosophical systems—such as Nyaya, Vedanta, Mimamsa, Buddhism, and Jainism—into contemporary discourse and global academic platforms.
        </li>
        <li>
          <strong>(iii) Foster Moral and Ethical Development:</strong> Prepare students to become responsible, morally grounded individuals who can contribute meaningfully to society, education, governance, and leadership. 
        </li>
        <li>
          <strong>(iv) Enable Interdisciplinary Integration:</strong> Collaborate with sciences, technology, social sciences, arts, and management studies to address contemporary challenges from a philosophical standpoint.
        </li>
        <li>
          <strong>(v) Encourage Research and Innovation in Philosophy:</strong> Build a strong research culture that addresses both classical philosophical issues and contemporary problems such as climate ethics, AI ethics, political justice, and mental health.
        </li>
        <li>
          <strong>(vi) Promote Inclusive and Accessible Education:</strong> Ensure that philosophical education is inclusive, multilingual, and accessible to diverse socio-economic groups.
        </li>
        <li>
          <strong>(vii) Empower Global Citizenship through Indian Wisdom:</strong> Equip students with a global outlook shaped by India's timeless philosophical insights, helping them serve as cultural ambassadors and thought leaders.
        </li>
      </ul>

      <p className="AimConclusion">
        The School of Philosophy will thus be a center of excellence where tradition meets innovation, producing graduates who are not only academically sound but also socially responsible and spiritually aware.
      </p>
    </div>
  );
}

export default AimAndObjective;

