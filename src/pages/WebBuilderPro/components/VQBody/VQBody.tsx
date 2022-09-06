import React, { useState, useContext } from 'react';
//import { AppDataContext } from "../../context/AppDataContext";
//import { IAppDataContext, IAppData } from "../../dataModels/AppDataModel";
import { VQBodyDataContext } from "../../context/VQBodyDataContext";
import { IVQBodyDataContext, IVQBodyData } from "../../dataModels/VQBodyDataModel";
import { ObjectsInVQBodyDataContext } from "../../context/ObjectsInVQBodyDataContext";
import { IObjectsInVQBodyDataContext, IObjectInVQBodyData } from "../../dataModels/ObjectsInVQBodyDataModel";
import VQObject from '../VQObject/VQObject';

const VQBody: React.FC = () => {
  //const { appData, updateAppData } = useContext(AppDataContext) as IAppDataContext;
  const { vqBodyData, updateVQBodyData } = useContext(VQBodyDataContext) as IVQBodyDataContext;
  const { objectsInVQBodyData, updateObjectsInVQBodyData } = useContext(ObjectsInVQBodyDataContext) as IObjectsInVQBodyDataContext;
  //console.log("TEDDD: " + JSON.stringify(objectsInVQBodyData))
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [isSpaceKeyDown, setIsSpaceKeyDown] = useState(false);
  let clientX: number, clientY: number;
  let currentTranslateX: number, currentTranslateY: number, currentScale: number;
  let customCursor = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="32" width="32"><path fill="rgb(189, 172, 177)" d="M.5,1.08L20.5,17.94l-10.03-.02,4.3,9.33-3.63,1.67-4.3-9.34L.61,27.47,.5,1.08Z"/></svg>'
  customCursor = "url('" + customCursor + "'), default";
  //console.log("TTTAAA::: " + objectsInVQBodyData)
  const mouseDownHandler = (event: any) => {
    if(event.button === 1 || (event.button === 0 && isSpaceKeyDown)) {
      event.target.style.cursor = "grabbing";
      clientX = event.clientX;
      clientY = event.clientY;
      currentTranslateX = vqBodyData.translateX;
      currentTranslateY = vqBodyData.translateY;
      currentScale = vqBodyData.currentScale;
      setIsMouseDown(true);
    }

    else {
      event.preventDefault();
      //vqBody.style.transform = "translate(5px, 5px)";
      //vqBodyRect = vqBody.getBoundingClientRect();
      //console.log("xx: " + ((vqBodyRect.x - (window.innerWidth / 2)) / vqBodyData.currentScale) + " | yy: " + (vqBodyRect.y - (window.innerHeight / 2)));
      //console.log("mid screen x: " + (window.innerWidth / 2) + " | yy: " + (window.innerHeight  / 2));
      //console.log("mid element x: " + (vqBodyRect.width / 2) + " | yy: " + (vqBodyRect.height  / 2) + " | left: " + vqBodyRect.left);
      //console.log("difference x: " + (((window.innerWidth / 2) - (vqBodyRect.width / 2 + vqBodyRect.left)) * parseFloat((vqBodyData.currentScale - 1))) + " | yy: " + (((window.innerHeight / 2) - (vqBodyRect.height / 2 + vqBodyRect.top)) * parseFloat((vqBodyData.currentScale - 1))) + " | left: " + vqBodyRect.left);
    }
  }

  const mouseUpHandler = (event: any) => {
    const finalOffsetX = event.clientX - clientX;
    const finalOffsetY = event.clientY - clientY;
    //this.setState({currentLeft: 0});
    let finalValues: IVQBodyData = {... vqBodyData};
    //vqBody.style.left = pos.currentLeft  + "px";
    //vqBody.style.top = pos.currentTop + "px";
    //finalValues.translateX = currentTranslateX + (finalOffsetX / currentScale);
    //finalValues.translateY = currentTranslateY + (finalOffsetY / currentScale);
    updateVQBodyData(finalValues);
    setIsMouseDown(false);
    console.log("DDDDFDFDFD:!!: "+ finalValues.translateX);
    event.target.style.cursor = customCursor;
    //document.removeEventListener('mousemove', this.mouseMoveHandler);
    //document.removeEventListener('mouseup', this.mouseUpHandler);

  }

  return(
    <div id="VQBody" className="redCursor" style = {{cursor: customCursor}}
      onMouseDown = {mouseDownHandler}
      onMouseUp = {mouseUpHandler}>

      <div id="VQBodyIDE" style={{position: "absolute", left: "1000000px", top: "1000000px", width: "500px", height: "500px", border: "1px solid blue", boxSizing: "border-box"}}>
        down: {isMouseDown.toString()} <br />
        pressed: {isSpaceKeyDown.toString()}
      </div>
      {
        objectsInVQBodyData.map((item, i) => {
          return <VQObject id={item.id} objid={item.objId} key={item.id} rect={item.rect} />
        })
      }
    </div>
  );
}

export default VQBody;

/*
let clientX: number, clientY: number;
let currentTranslateX: number, currentTranslateY: number, currentScale: number;
let newTranslateX: number, newTranslateY: number;
let customCursor: string;
let vqBody: HTMLElement, vqBodyRect: any;
let appData: IAppData, updateAppData: (data: IAppData) => void;
let vqSettingsData: IVQBodyData, updateVQBodyData: (data: IAppData) => void;

interface IProps {
}

interface IState {
  isSpaceKeyDown: boolean, isMouseDown: boolean
}

class VQBody extends React.Component<IProps, IState> {
  static contextType = AppDataContext;
  constructor(props: IProps) {
    super(props);
    this.state = { isSpaceKeyDown: false, isMouseDown: false };//, currentLeft: 220, currentTop: 50};
    this.mouseDownHandler = this.mouseDownHandler.bind(this);
    this.mouseMoveHandler = this.mouseMoveHandler.bind(this);
    this.mouseUpHandler = this.mouseUpHandler.bind(this);
    this.windowResizeHandler = this.windowResizeHandler.bind(this);
    this.keyDownHandler = this.keyDownHandler.bind(this);
  }

  windowResizeHandler(): void {
    //vqSettingsData.ideWidth = window.innerWidth - 440 + 2;
    //vqSettingsData.ideHeight = window.innerHeight - 50 + 2;
    //updateAppData(appData);
  }

  mouseDownHandler(event: React.MouseEvent<HTMLElement>) {
    console.log("BUTTTTTON CLICKED: " + event.button);
    if(event.button === 1 || (event.button === 0 && this.state.isSpaceKeyDown === true)) {
      event.currentTarget.style.cursor = "grabbing";
      clientX = event.clientX;
      clientY = event.clientY;

      currentTranslateX = vqSettingsData.translateX;
      currentTranslateY = vqSettingsData.translateY;
      currentScale = vqSettingsData.currentScale;

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
  }

  mouseUpHandler(event: any) {
    vqSettingsData.translateX = newTranslateX / currentScale;
    vqSettingsData.translateY = newTranslateY / currentScale;
    updateAppData(appData);
    console.log("DDDDFDFDFD:!!: "+ vqSettingsData.translateX);
    event.target.style.cursor = customCursor;
    document.removeEventListener('mousemove', this.mouseMoveHandler);
    document.removeEventListener('mouseup', this.mouseUpHandler);

  }
  keyDownHandler(event: any) {
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
  }

  render() {
    //console.log("TEST::: " + JSON.stringify(VQBodyDataContext.Provider.))
    ///////////////DELETE//////////////
    //document.onmousedown = (ev) => {
    //  console.log("X:: " + ev.clientX + " | Y:: " + ev.clientY);
    //};
    ///////////////////////////////////
    //const {appData, updateAppData} = AppDataContext.Consumer; //this.context;//React.useContext(AppDataContext) as IAppDataContext;
    //let test: IAppDataContext = JSON.parse(JSON.stringify(this.context));
    var t=setInterval(() => {
        console.log("TEST: " + JSON.stringify(test.appData.theme))
    },1000);

    var t=setInterval(() => {
      test.appData = {
        theme: "light",
        currentView: "desktop",
        screenWidth: 0,
        screenHeight: 0,
        latestId: 0
      }
    },2500);
    //console.log("TEST: " + JSON.stringify(test.appData.theme))
    updateAppData(appData);
    customCursor = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="32" width="32"><path fill="rgb(189, 172, 177)" d="M.5,1.08L20.5,17.94l-10.03-.02,4.3,9.33-3.63,1.67-4.3-9.34L.61,27.47,.5,1.08Z"/></svg>'
    customCursor = "url('" + customCursor + "'), default";
    return <div id="VQBody" className="redCursor" style = {{cursor: customCursor}}
    onMouseDown = {this.mouseDownHandler}>
    down: {this.state.isMouseDown.toString()} <br />
    pressed: {this.state.isSpaceKeyDown.toString()}


    </div>
  }

  componentDidMount() {
    vqBody = document.getElementById("VQBody")|| document.createElement("div");
    vqBody.style.left = (-1000000) + (window.innerWidth / 2) + "px";
    vqBody.style.top = (-1000000) + (window.innerHeight / 2) + "px";
    const currentTranslateX = ((window.innerWidth / 2 - 220) * -1);
    const currentTranslateY = ((window.innerHeight / 2 - 50) * -1);

    //vqBody.style.transform = "translate(" + currentTranslateX + "px, " + currentTranslateY + "px)  scale(" + vqSettingsData.currentScale + ")";
    this.windowResizeHandler.call(this);
    window.addEventListener('resize', this.windowResizeHandler);

    //vqSettingsData.translateX = currentTranslateX;
    //vqSettingsData.translateY = currentTranslateY;
    //updateAppData(appData);

    window.addEventListener("wheel", (event: any) => {
  		event.preventDefault();
  		if(event.ctrlKey) {
        console.log("scaleDiff: " + event.deltaY);
        let newScale;

        //if(event.deltaY < -80 || event.deltaY > 80)
          //newScale = parseFloat((vqSettingsData.currentScale + (-30 / event.deltaY)).toFixed(2));

        //else
          //newScale = parseFloat((vqSettingsData.currentScale  + (-0.01 * event.deltaY)).toFixed(2));

          //if(newScale > 30.37)
            newScale = 30.37;

          //else if(newScale < 0.02)
            newScale = 0.02;

        //const newTranslateX = vqSettingsData.translateX * newScale - (((event.clientX / 2) - (window.innerWidth / 2)) / newScale + 220);
        //const newTranslateY = vqSettingsData.translateY * newScale - (((event.clientY / 2) - (window.innerHeight / 2)) / newScale + 50);
        vqBody.style.transform = "translate(" + newTranslateX + "px, " + newTranslateY + "px)  scale(" + newScale + ")";
        //vqSettingsData.currentScale = newScale;
        updateAppData(appData);
  		}
  	},
  	{passive: false});

    window.onmousedown = (event: any) => {

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
  }
}
export default VQBody;*/
