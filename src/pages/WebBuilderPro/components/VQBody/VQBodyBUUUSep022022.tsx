//import React, { userState, useContext }  from 'react';
import React from 'react';
//import { appDataProvider } from '../../context/appDataCtx';
//import appDataCtx from '../../context/appDataCtx';
import { AppDataContext } from "../../context/AppDataContext";
import { IAppDataContext, IAppData } from "../../dataModels/AppDataModel";
import { IVQBodyDataContext, IVQBodyData } from "../../dataModels/VQBodyDataModel";
//import { IVQBodySettingsData, IAppData } from "../../dataModels/AppDataModel";
//import VQBodyComponent from './VQBodyComponent';
import VQObject from '../VQObject/VQObject';

let clientX: number, clientY: number;
let currentTranslateX: number, currentTranslateY: number, currentScale: number;
let newTranslateX: number, newTranslateY: number;
let customCursor: string;
let vqBody: HTMLElement, vqBodyRect: any;
//let webBui?lderProData, setWebBu<ilderProData;
let appData: IAppData, updateAppData: (data: IAppData) => void;
let vqSettingsData: IVQBodyData, updateVQSettingsData: (data: IAppData) => void;

interface IProps {
}

interface IState {
  isSpaceKeyDown: boolean, isMouseDown: boolean
}

class VQBody extends React.Component<IProps, IState, IAppDataContext> {
  //static contextType = AppDataContext;
  constructor(props: IProps) {
    super(props);
    //this.state = {dataContext: null};
    this.state = { isSpaceKeyDown: false, isMouseDown: false };//, currentLeft: 220, currentTop: 50};
    this.mouseDownHandler = this.mouseDownHandler.bind(this);
    this.mouseMoveHandler = this.mouseMoveHandler.bind(this);
    this.mouseUpHandler = this.mouseUpHandler.bind(this);
    //this.wheelHandler = this.wheelHandler.bind(this);
    this.windowResizeHandler = this.windowResizeHandler.bind(this);
    this.keyDownHandler = this.keyDownHandler.bind(this);
  }

  windowResizeHandler(): void {
    vqSettingsData.ideWidth = window.innerWidth - 440 + 2;
    vqSettingsData.ideHeight = window.innerHeight - 50 + 2;
    updateAppData(appData);
    /*deviceFrame.style.width = (window.innerWidth - 440) + "px";
    deviceFrame.style.height = (window.innerHeight - 50) + "px";

    vqBody.style.width = (window.innerWidth - 440) + "px";
    vqBody.style.height = (window.innerHeight - 50) + "px";*/

    //vqBody.style.width = window.innerWidth + "px";
    //vqBody.style.height = (window.innerHeight - 50) + "px";
  }

  mouseDownHandler(event: React.MouseEvent<HTMLElement>) {
    console.log("BUTTTTTON CLICKED: " + event.button);
    if(event.button === 1 || (event.button === 0 && this.state.isSpaceKeyDown === true)) {
      //vqBodyRect = vqBody.getBoundingClientRect();
      //console.log("DDDDDDD::: " + vqBodyRect.x);
      event.currentTarget.style.cursor = "grabbing";

      //console.log("LEFT:::: " + this.state.currentLeft + " | TOP:::: " + this.state.currentTop);

      //pos.left = vqBody.scrollLeft;
      //pos.top = vqBody.scrollTop;
      clientX = event.clientX;
      clientY = event.clientY;

      currentTranslateX = vqSettingsData.translateX;
      currentTranslateY = vqSettingsData.translateY;
      currentScale = vqSettingsData.currentScale;

      //console.log("POS::: " + JSON.stringify(vqBodyRect));
      document.addEventListener('mousemove', this.mouseMoveHandler);
      document.addEventListener('mouseup', this.mouseUpHandler);
    }

    else {
      event.preventDefault();
      //vqBody.style.transform = "translate(5px, 5px)";
      //vqBodyRect = vqBody.getBoundingClientRect();
      //console.log("xx: " + ((vqBodyRect.x - (window.innerWidth / 2)) / vqSettingsData.currentScale) + " | yy: " + (vqBodyRect.y - (window.innerHeight / 2)));
      //console.log("mid screen x: " + (window.innerWidth / 2) + " | yy: " + (window.innerHeight  / 2));
      //console.log("mid element x: " + (vqBodyRect.width / 2) + " | yy: " + (vqBodyRect.height  / 2) + " | left: " + vqBodyRect.left);
      //console.log("difference x: " + (((window.innerWidth / 2) - (vqBodyRect.width / 2 + vqBodyRect.left)) * parseFloat((vqSettingsData.currentScale - 1))) + " | yy: " + (((window.innerHeight / 2) - (vqBodyRect.height / 2 + vqBodyRect.top)) * parseFloat((vqSettingsData.currentScale - 1))) + " | left: " + vqBodyRect.left);
    }
  }

  mouseMoveHandler(event: any) {
    //vqBodyRect = vqBody.getBoundingClientRect();
    //console.log("RECT-->: " + vqBody.getBoundingClientRect().x);
    //console.log("RECT-->: " + Math.abs(vqBody.scrollHeight - vqBody.clientHeight - vqBody.scrollTop) < 1);

     const offsetX = event.clientX - clientX;
     const offsetY = event.clientY - clientY;
     newTranslateX = (offsetX + (currentTranslateX * currentScale));
     newTranslateY = (offsetY + (currentTranslateY * currentScale));

     if((newTranslateX / currentScale) < -200000)
      newTranslateX = -200000 * currentScale;

     else if((newTranslateX / currentScale) > 200000)
      newTranslateX = 200000 * currentScale;

      if((newTranslateY / currentScale) < -200000)
       newTranslateY = -200000 * currentScale;

      else if((newTranslateY / currentScale) > 200000)
       newTranslateY = 200000 * currentScale;

     vqBody.style.transform = "translate(" + newTranslateX + "px, " + newTranslateY + "px)  scale(" + currentScale + ")";
     //console.log("dss::: " + offsetX / vqSettingsData.currentScale);
     //const currentLeft = parseFloat(vqBodyRect.x + (offsetX / vqSettingsData.currentScale));
     //const currentTop = parseFloat(vqBodyRect.y + (offsetY / vqSettingsData.currentScale));
     //console.log("rect.x::: " + vqBodyRect.x + " | LEFT:::: " + currentLeft + " | TOP:::: " + offsetY);

     //const currentLeft = parseFloat(vqBodyRect.x + (offsetX / vqSettingsData.currentScale));
     //const currentTop = parseFloat(vqBodyRect.y + (offsetY / vqSettingsData.currentScale));

     //pos.currentLeft = parseFloat(this.state.currentLeft + (offsetX / vqSettingsData.currentScale));
     //pos.currentTop = parseFloat(this.state.currentTop + (offsetY / vqSettingsData.currentScale));

     //pos.currentLeft = parseFloat(this.state.currentLeft + offsetX);
     //pos.currentTop = parseFloat(this.state.currentTop + offsetY);

     //vqBody.style.left = currentLeft  + "px";
     //vqBody.style.top = currentTop + "px";
     /*this.state.currentLeft = currentLeft;
     this.state.currentTopt = currentTop;

     this.setState(this.state.currentLeft, );
     console.log("EV2:::: " + currentLeft);*/

     //updateAppData({currentVQBodyX: currentLeft});
     //updateAppData({currentVQBodyY: currentTop});

     //vqBody.scrollLeft = parseFloat(pos.left - (offsetX / vqSettingsData.currentScale));
     //vqBody.scrollTop = pos.top - (offsetY / vqSettingsData.currentScale);
     //vqBody.style.transform = "translate(" + parseFloat(vqBodyRect.x + offsetX) + "px, " + parseFloat(vqBodyRect.y + offsetY) + "px) scale(" + vqSettingsData.currentScale + ")";
  }

  mouseUpHandler(event: any) {
    //const finalOffsetX = event.clientX - clientX;
    //const finalOffsetY = event.clientY - clientY;
    //this.setState({currentLeft: 0});

    //vqBody.style.left = pos.currentLeft  + "px";
    //vqBody.style.top = pos.currentTop + "px";
    vqSettingsData.translateX = newTranslateX / currentScale;
    vqSettingsData.translateY = newTranslateY / currentScale;
    updateAppData(appData);
    console.log("DDDDFDFDFD:!!: "+ vqSettingsData.translateX);
    event.target.style.cursor = customCursor;
    document.removeEventListener('mousemove', this.mouseMoveHandler);
    document.removeEventListener('mouseup', this.mouseUpHandler);

  }

  /*wheelHandler(event) {
    //event.preventDefault();
    if(event.ctrlKey) {
      console.log("ZOOOOOOOM!!!!!");
      //event.target.style.cursor = customCursor;
    }
  }*/

  keyDownHandler(event: any) {
    //console.log("LKFJD:F:::: " + event.code);
    //console.log("ID:::: " + event.target.id);
    if(event.code !== "F12" && event.target.id !== "componentsSeachBox")
      event.preventDefault();

    if(event.code === "Space") {
      vqBody.style.cursor = "grab";
      this.setState({isSpaceKeyDown: true});
    }

    else if(event.ctrlKey && (event.code === "Equal" || event.code === "NumpadAdd")) {
      if(vqSettingsData.currentScale < 30.37) {
        let newScale: number = parseFloat((vqSettingsData.currentScale * 1.3).toFixed(2));
        if(newScale > 30.37)
          newScale = 30.37;

        const newTranslateX = vqSettingsData.translateX * newScale;
        const newTranslateY = vqSettingsData.translateY * newScale;
        vqBody.style.transform = "translate(" + newTranslateX + "px, " + newTranslateY + "px)  scale(" + newScale + ")";
        vqSettingsData.currentScale = newScale;
        updateAppData(appData);
      }
    }

    else if(event.ctrlKey && (event.code === "Minus" || event.code === "NumpadSubtract")) {
      if(vqSettingsData.currentScale > 0.02) {
        let newScale = parseFloat((vqSettingsData.currentScale / 1.3).toFixed(2));
        if(newScale < 0.02)
          newScale = 0.02;

        const newTranslateX = vqSettingsData.translateX * newScale;
        const newTranslateY = vqSettingsData.translateY * newScale;
        vqBody.style.transform = "translate(" + newTranslateX + "px, " + newTranslateY + "px)  scale(" + newScale + ")";
        vqSettingsData.currentScale = newScale;
        updateAppData(appData);
      }
    }

    //window.onkeydown = null;
  }

  render() {
    ///////////////DELETE//////////////
    //document.onmousedown = (ev) => {
    //  console.log("X:: " + ev.clientX + " | Y:: " + ev.clientY);
    //};
    ///////////////////////////////////
    const {appData, updateAppData} = React.useContext(AppDataContext) as IAppDataContext;
    console.log("TEST: " + appData)
    //appData = this.context.appData;
    //updateAppData = this.context.updateAppData;
    //this.setState({dataContext: appData});
    customCursor = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="32" width="32"><path fill="rgb(189, 172, 177)" d="M.5,1.08L20.5,17.94l-10.03-.02,4.3,9.33-3.63,1.67-4.3-9.34L.61,27.47,.5,1.08Z"/></svg>'
    customCursor = "url('" + customCursor + "'), default";
    return <div id="VQBody" className="redCursor" style = {{cursor: customCursor}}
    onMouseDown = {this.mouseDownHandler}>
    down: {this.state.isMouseDown.toString()} <br />
    pressed: {this.state.isSpaceKeyDown.toString()}
    <div id="VQBodyIDE" style={{position: "absolute", left: "999999px", top: "999999px", zIndex: "-1", width: vqSettingsData.ideWidth + "px", height: vqSettingsData.ideHeight + "px", border: "1px solid blue", boxSizing: "border-box"}}></div>

    </div>
  }

  componentDidMount() {
    //deviceFrame = document.getElementById("DeviceFrame");
    vqBody = document.getElementById("VQBody")|| document.createElement("div");
    //vqBody.style.left = (-1000000) + (window.innerWidth / 2) + "px";
    //vqBody.style.top = (-1000000) + (window.innerHeight / 2) + "px";
    vqBody.style.left = (-1000000) + (window.innerWidth / 2) + "px";
    vqBody.style.top = (-1000000) + (window.innerHeight / 2) + "px";
    const currentTranslateX = ((window.innerWidth / 2 - 220) * -1);
    const currentTranslateY = ((window.innerHeight / 2 - 50) * -1);

    vqBody.style.transform = "translate(" + currentTranslateX + "px, " + currentTranslateY + "px)  scale(" + vqSettingsData.currentScale + ")";
    this.windowResizeHandler.call(this);
    window.addEventListener('resize', this.windowResizeHandler);

    vqSettingsData.translateX = currentTranslateX;
    vqSettingsData.translateY = currentTranslateY;
    updateAppData(appData);

    //vqBodyRect = vqBody.getBoundingClientRect();
    //this.windowResizeHandler.call(this);


    window.addEventListener("wheel", (event: any) => {
  		event.preventDefault();
  		if(event.ctrlKey) {
        console.log("scaleDiff: " + event.deltaY);
        let newScale;

        if(event.deltaY < -80 || event.deltaY > 80)
          newScale = parseFloat((vqSettingsData.currentScale + (-30 / event.deltaY)).toFixed(2));
        //console.log("scaleDiff: " + event.deltaY);
        // if(event.deltaY > 80)
          //scaleDiff = vqSettingsData.currentScale - 0.2;

        //else if(event.deltaY < 0 || event.deltaY < 80)
        else
          newScale = parseFloat((vqSettingsData.currentScale  + (-0.01 * event.deltaY)).toFixed(2));

          if(newScale > 30.37)
            newScale = 30.37;

          else if(newScale < 0.02)
            newScale = 0.02;

        //else
          //scaleDiff = vqSettingsData.currentScale - 0.02;

        const newTranslateX = vqSettingsData.translateX * newScale - (((event.clientX / 2) - (window.innerWidth / 2)) / newScale + 220);
        const newTranslateY = vqSettingsData.translateY * newScale - (((event.clientY / 2) - (window.innerHeight / 2)) / newScale + 50);
        vqBody.style.transform = "translate(" + newTranslateX + "px, " + newTranslateY + "px)  scale(" + newScale + ")";
        vqSettingsData.currentScale = newScale;
        updateAppData(appData);
  			//event.target.style.cursor = customCursor;
  		}
  	},
  	{passive: false});

    window.onmousedown = (event: any) => {
  		//console.log("AAAA:: " + event.button);

      if(event.button === 0 && event.target.id === "VQBody")
  			this.setState({isMouseDown: true});

  		else if(event.button === 1)
  			event.preventDefault();
  	};

    window.onmouseup = () => {
      this.setState({isMouseDown: false});
    };

    window.onkeydown = this.keyDownHandler;

    window.onkeyup = (event: any) => {
      //console.log("CODE:: " + event.code);
      if(event.code === "Space") {
        vqBody.style.cursor = customCursor;
        this.setState({isSpaceKeyDown: false})
      }

      window.onkeydown = this.keyDownHandler;
    };
    /*document.getElementById("VQBody").onwheel = (event) => {
      event.preventDefault();
      if(event.ctrlKey) {
        console.log("ZOOOOOOOM:: " + event.deltaY);
        //event.target.style.cursor = customCursor;
      }
    }*/
  }
}
export default VQBody;
