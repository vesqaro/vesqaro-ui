/*import React, { useState }  from 'react';
//import SingleFrame from '../components/SingleFrame';
//import WebBuilderLogo from '../components/logos/WebBuilderLogo';

function DropdownList (props) {
  const [selectedText, setSelectedText] = useState(props.selectedText);
  const [dropdownListArrar, setDropdownListData] = useState(props.dropdownListArray);
  const [listVisibility, setlistVisibility] = useState(false);
  const arr = props.dropdownListArray;

  function mouseClickSelectedOptionHandler() {
    setlistVisibility(true);
  }

  function mouseClickSelectableOptionHandler(event, text) {
    console.log(event);
    setlistVisibility(false);
    setSelectedText(text);
  }

  function mouseLeaveHandler() {
    setlistVisibility(false);
  }

  return <div onMouseLeave={mouseLeaveHandler} className="dropdownMenuBox">
    <div onClick={mouseClickSelectedOptionHandler} className="selectedDropdownMenuOption">
      {selectedText}
    </div>
    {
      listVisibility ?
        <div className="dropdownMenuList">{arr.map(option => {
          return <div className="dropdownMenuOption" onClick={event => mouseClickSelectableOptionHandler(event, option)} key={option}>
              {option}
            </div>
          })}
        </div>
      : null
    }
  </div>
}

export default DropdownList;
*/





import React, { Component, useState }  from 'react';
//import SingleFrame from '../components/SingleFrame';
//import WebBuilderLogo from '../components/logos/WebBuilderLogo';

function DropdownList (props) {
  const [dropdownListData, setDropdownListData] = useState({selectedText: "Option1", dropdownListArray: ["Option1", "Option2", "Option3"]})
  const [listVisibility, setlistVisibility] = useState(false);
  const data = dropdownListData;
  const arr = data.dropdownListArray;

  function functionName() {
    setlistVisibility(true);
  }

  function functionName2() {
    setlistVisibility(false);
    console.log("DDDDD");
  }
  function setSelectedOption() {
    console.log("AHMAD: " + this.optiontext);
  }

  return <div onMouseLeave={functionName2} className="dropdownMenuBox">
        <div onClick={functionName} className="selectedDropdownMenuOption">
          {data.selectedText}
        </div>
        {listVisibility ?
          <div className="dropdownMenuList">{arr.map(option => {
            return <div className="dropdownMenuOption" optionicon={option.icon} optiontext={option.text} onClick={setSelectedOption} key={option.text}>
                  {option}
                </div>
              })}
          </div>
        : null}
      </div>
}

export default DropdownList;
