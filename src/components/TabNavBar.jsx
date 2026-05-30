import React from 'react';
import TabsWithDropdowns from './TabsWithDropdown';
import '../Styles/Tab.css';
import Institute from './Institute';
import Contact from '../pages/Contact';
import Msc from '../Assests/CourseCurriculumofCRS.pdf'

const TabNavBar = () => {
  const tabs = [
    {
      label: 'About Department',
      content: <Institute/>,
      dropdownOptions: [
        { label: 'About Us', link: '/about' },
        { label: 'Aim And Objective', link: '/AimAndObjective' }
      ]
    },
    {
      label: 'Academic Program',
      dropdownOptions: [
        { label: 'M.A in Philosophy', link: Msc },
       // { label: 'Phd. in Philosophy', link: Msc },
      ]
    },
    {
      label: 'Faculty/Staff',
      dropdownOptions: [
        { label: 'Faculty/Staff' , link: '/Faculty' },
        { label: 'Academic Advisory Committee', link: '/Aac' },
      ]
    },
   
    {
      label: 'Activities',
      dropdownOptions: [
        { label: 'Events', link: '/Event' },
      ]
    },
//    {
//      label: 'eResources',
//     dropdownOptions: [
//      { label: 'UGC', link: 'https://www.ugc.gov.in/' },
//      { label: 'NDA', link: 'https://www.nda.gov.in/' },
//      { label: 'SWAYAM', link: 'https://www.swayam.gov.in/' },
//      { label: 'SWAYAM PRABHA', link: 'https://www.swayamprabhay.gov.in/' },
//      { label: 'EGYANKOSH', link: 'https://www.inflibnet.ac.in/' },
//      { label: 'EPATHSHALA', link: 'https://epathshala.nic.in/' },
//      { label: 'ISRO', link: 'https://www.isro.gov.in/' },
//      ]
//    },
    {
      label: 'Contact',
      content: <Contact/>,
      
    },
  ];

  return (
    <div className="TabNavBar">
      <TabsWithDropdowns tabs={tabs} />
    </div>
  );
};

export default TabNavBar;
