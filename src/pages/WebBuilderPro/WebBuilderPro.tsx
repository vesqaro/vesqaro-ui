import React from 'react';
import { AppDataProvider } from "./context/AppDataContext";
import { VQBodyDataProvider } from "./context/VQBodyDataContext";
import { ObjectsInVQBodyDataProvider } from "./context/ObjectsInVQBodyDataContext";
//import SingleFrame from '../components/SingleFrame/SingleFrame';
import MenuBar from './components/MenuBar/MenuBar';
import LeftMenu from './components/LeftMenu/LeftMenu';
import VQBody from './components/VQBody/VQBody';
import RightMenu from './components/RightMenu/RightMenu';

class WebBuilderPro extends React.Component {
//function WebBuilderPro () {
  //const webBuilderProData = {};
  render () {
    return <AppDataProvider>
            <VQBodyDataProvider>
              <ObjectsInVQBodyDataProvider>
                <div id="MainDiv">
                <MenuBar />
                  <LeftMenu />
                  <div id="BlankBackground" />
                  <VQBody />
                  <RightMenu />
                </div>
                </ObjectsInVQBodyDataProvider>
            </VQBodyDataProvider>
          </AppDataProvider>
  }
}

export default WebBuilderPro;
/*  <MenuBar />
  <LeftMenu />
  <div id="BlankBackground" />



  <RightMenu />*/
