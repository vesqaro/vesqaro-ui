import React, { useState }  from 'react';
//import SingleFrame from '../components/SingleFrame';
//import WebBuilderLogo from '../components/logos/WebBuilderLogo';

function DropdownListWithIcons (props) {
  const [selectedIcon, setSelectedIcon] = useState(props.selectedIcon);
  const [selectedText, setSelectedText] = useState(props.selectedText);
  const [dropdownListArrar, setDropdownListData] = useState(props.dropdownListArray);
  const [listVisibility, setlistVisibility] = useState(false);
  const arr = props.dropdownListArray;

  function mouseClickSelectedOptionHandler() {
    setlistVisibility(true);
  }

  function mouseClickSelectableOptionHandler(event, icon, text) {
    setlistVisibility(false);

    if(selectedText !== text) {
      setSelectedIcon(icon);
      setSelectedText(text);
      //console.log(event);
    }
  }

  function mouseLeaveHandler() {
    setlistVisibility(false);
  }

  return <div onMouseLeave={mouseLeaveHandler} className="dropdownMenuBox">
    <div onClick={mouseClickSelectedOptionHandler} className="selectedDropdownMenuOption">
      <i className={selectedIcon}></i><span style={{paddingLeft: "5px"}}>{selectedText}</span>
    </div>
    {
      listVisibility ?
        <div className="dropdownMenuList">{arr.map(option => {
          return <div className="dropdownMenuOption" onClick={event => mouseClickSelectableOptionHandler(event, option.icon, option.text)} key={option.text}>
              <i className={option.icon}></i><span style={{paddingLeft: "5px"}}>{option.text}</span>
            </div>
          })}
        </div>
      : null
    }
  </div>
}

export default DropdownListWithIcons;
