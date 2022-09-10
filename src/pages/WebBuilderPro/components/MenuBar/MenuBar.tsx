import React, { useContext } from 'react';
import { AppDataContext } from "../../context/AppDataContext";
import { IAppDataContext, IAppData } from "../../dataModels/AppDataModel";

//import SingleFrame from '../SingleFrame/SingleFrame';
import WebBuilderLogo from '../Logos/WebBuilderLogo';
import DeviceSelectionMenu from '../DeviceSelectionMenu/DeviceSelectionMenu';
import ThemeToggleButton from "../ThemeToggleButton/ThemeToggleButton";
import ZoomingBox from '../ZoomingBox/ZoomingBox';
import "./Styles.scss";
//onClick={() => {document.getElementById("VQBody").style.transform = "scale(300%)";}}
const MenuBar: React.FC = () => {
  const { appData } = useContext(AppDataContext) as IAppDataContext;

  return <div id="MenuBar" className={"theme-" + appData.theme}>
    <WebBuilderLogo />
    <DeviceSelectionMenu />
    <ThemeToggleButton />
  </div>
}

export default MenuBar;
//<ZoomingBox />
