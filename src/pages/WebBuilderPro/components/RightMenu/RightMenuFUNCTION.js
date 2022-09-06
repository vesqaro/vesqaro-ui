import React, { useState, useEffect, useContext }  from 'react';
import WebBuilderProDataCtx from '../../context/WebBuilderProDataCtx';
import ObjectsTree from '../ObjectsTree/ObjectsTree'
//import SingleFrame from '../components/SingleFrame';
//import WebBuilderLogo from '../components/logos/WebBuilderLogo';

function RightMenu () {
  const dataContext = useContext(WebBuilderProDataCtx);
  //console.log("EFXC: " + window.innerHeight)
  const [windowWidth, setWindowWidth] = useState(0);
  const [windowHeight, setWindowHeight] = useState(0);
  let resizeWindow = () => {
    setWindowWidth(window.innerWidth);
    setWindowHeight(window.innerHeight);
  };
  window.removeEventListener("resize", resizeWindow);
  useEffect(() => {
    resizeWindow();
    window.addEventListener("resize", resizeWindow);
    return () => window.removeEventListener("resize", resizeWindow);
  }, []);
  //console.log("DFDR43212");
  let xPos = (windowWidth - 221) + "px";
  //console.log("in RIGHT: " + JSON.stringify(dataContext));
  return <div id="RightMenu" style={{boxSizing: "border-box", left: xPos}}>
    <ObjectsTree />
  </div>
}

export default RightMenu;
