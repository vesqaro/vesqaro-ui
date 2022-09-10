import React from 'react';
import "./Styles.scss";
import { AppDataProvider } from "./context/AppDataContext";
import { VQBodyDataProvider } from "./context/VQBodyDataContext";
import { ObjectsInVQBodyDataProvider } from "./context/ObjectsInVQBodyDataContext";
import MenuBar from './components/MenuBar/MenuBar';
import LeftMenu from './components/LeftMenu/LeftMenu';
import VQBody from './components/VQBody/VQBody';
import RightMenu from './components/RightMenu/RightMenu';

const WebBuilderPro: React.FC = () => {
//function WebBuilderPro () {
  //const webBuilderProData = {};
  return(
    <AppDataProvider>
      <VQBodyDataProvider>
        <ObjectsInVQBodyDataProvider>
          <div id="WebBuilderProUI">
            <MenuBar />

            <div id="BlankBackground" />
            <VQBody />
            <RightMenu />
          </div>
        </ObjectsInVQBodyDataProvider>
      </VQBodyDataProvider>
    </AppDataProvider>
  )
}
export default WebBuilderPro;
/*  <MenuBar />
  <LeftMenu />
  <div id="BlankBackground" />



  <RightMenu />*/
