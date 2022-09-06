import React from 'react';
//import SingleFrame from '../SingleFrame/SingleFrame';
import WebBuilderLogo from '../Logos/WebBuilderLogo';
import DropdownListWithIcons from '../DropdownListWithIcons/DropdownListWithIcons';
import ZoomingBox from '../ZoomingBox/ZoomingBox';

const selectedIcon = "bi bi-display";
const selectedText = "Desktop";
const dropdownListArray = [
      {
        icon: "bi bi-display",
        text: "Desktop"
      },
      {
        icon: "bi bi-tablet",
        text: "Tablet Portrait"
      },
      {
        icon: "bi bi-tablet-landscape",
        text: "Tablet Landscape"
      },
      {
        icon: "bi bi-phone",
        text: "Mobile Portrait"
      },
      {
        icon: "bi bi-phone-landscape ",
        text: "Mobile Landscape"
      }
    ]
//onClick={() => {document.getElementById("VQBody").style.transform = "scale(300%)";}}
function MenuBar () {
  return <div id="MenuBar">
    <WebBuilderLogo />
    <ZoomingBox />
    <DropdownListWithIcons selectedIcon={selectedIcon} selectedText={selectedText} dropdownListArray={dropdownListArray} />
  </div>
}

export default MenuBar;
