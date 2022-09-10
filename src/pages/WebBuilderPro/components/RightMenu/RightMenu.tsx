import React, { useState, useEffect, useContext }  from 'react';
import { AppDataContext } from "../../context/AppDataContext";
import { IAppDataContext } from "../../dataModels/AppDataModel";
import ObjectsTree from '../ObjectsTree/ObjectsTree';
//import SingleFrame from '../components/SingleFrame';
//import WebBuilderLogo from '../components/logos/WebBuilderLogo';

const RightMenu: React.FC = () => {
  const { appData} = useContext(AppDataContext) as IAppDataContext;

  return(
    <div id="RightMenu" className={"theme-" + appData.theme}>

    </div>
  )
}
export default RightMenu;
