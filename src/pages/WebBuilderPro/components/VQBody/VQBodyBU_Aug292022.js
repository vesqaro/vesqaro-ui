import React, { userState, useContext }  from 'react';
import { WebBuilderProDataProvider } from '../../context/WebBuilderProDataCtx';
import WebBuilderProDataCtx from '../../context/WebBuilderProDataCtx';
//import VQBodyComponent from './VQBodyComponent';
import VQObject from '../VQObject/VQObject';

let clientX, clientY;
let currentTranslateX, currentTranslateY, currentScale;
let customCursor;
let deviceFrame, vqBody, vqBodyRect;
let webBuilderProData, setWebBuilderProData;

class VQBody extends React.Component {
  static contextType = WebBuilderProDataCtx;
  constructor(props) {
    super(props);
    //this.state = {dataContext: null};
    this.state = {isSpaceKeyDown: false, isMouseDown: false};//, currentLeft: 220, currentTop: 50};
    this.mouseDownHandler = this.mouseDownHandler.bind(this);
    this.mouseMoveHandler = this.mouseMoveHandler.bind(this);
    this.mouseUpHandler = this.mouseUpHandler.bind(this);
    //this.wheelHandler = this.wheelHandler.bind(this);
    this.windowResizeHandler = this.windowResizeHandler.bind(this);
    this.keyDownHandler = this.keyDownHandler.bind(this);
  }

  windowResizeHandler(event) {
    /*deviceFrame.style.width = (window.innerWidth - 440) + "px";
    deviceFrame.style.height = (window.innerHeight - 50) + "px";

    vqBody.style.width = (window.innerWidth - 440) + "px";
    vqBody.style.height = (window.innerHeight - 50) + "px";*/

    //vqBody.style.width = window.innerWidth + "px";
    //vqBody.style.height = (window.innerHeight - 50) + "px";
  }

  mouseDownHandler(event) {
    //console.log("BUTRON CLICKED: " + event.button);
    if(event.button === 1 || (event.button === 0 && this.state.isSpaceKeyDown)) {
      //vqBodyRect = vqBody.getBoundingClientRect();
      //console.log("DDDDDDD::: " + vqBodyRect.x);
      event.target.style.cursor = "grabbing";

      //console.log("LEFT:::: " + this.state.currentLeft + " | TOP:::: " + this.state.currentTop);

      //pos.left = vqBody.scrollLeft;
      //pos.top = vqBody.scrollTop;
      clientX = event.clientX;
      clientY = event.clientY;
      currentTranslateX = webBuilderProData.vqBodySettings.translateX;
      currentTranslateY = webBuilderProData.vqBodySettings.translateY;
      currentScale = webBuilderProData.vqBodySettings.currentScale;

      //console.log("POS::: " + JSON.stringify(vqBodyRect));
      document.addEventListener('mousemove', this.mouseMoveHandler);
      document.addEventListener('mouseup', this.mouseUpHandler);
    }

    else {
      event.preventDefault();
      //vqBody.style.transform = "translate(5px, 5px)";
      //vqBodyRect = vqBody.getBoundingClientRect();
      //console.log("xx: " + ((vqBodyRect.x - (window.innerWidth / 2)) / webBuilderProData.vqBodySettings.currentScale) + " | yy: " + (vqBodyRect.y - (window.innerHeight / 2)));
      //console.log("mid screen x: " + (window.innerWidth / 2) + " | yy: " + (window.innerHeight  / 2));
      //console.log("mid element x: " + (vqBodyRect.width / 2) + " | yy: " + (vqBodyRect.height  / 2) + " | left: " + vqBodyRect.left);
      //console.log("difference x: " + (((window.innerWidth / 2) - (vqBodyRect.width / 2 + vqBodyRect.left)) * parseFloat((webBuilderProData.vqBodySettings.currentScale - 1))) + " | yy: " + (((window.innerHeight / 2) - (vqBodyRect.height / 2 + vqBodyRect.top)) * parseFloat((webBuilderProData.vqBodySettings.currentScale - 1))) + " | left: " + vqBodyRect.left);
    }
  }

  mouseMoveHandler(event) {
    //vqBodyRect = vqBody.getBoundingClientRect();
    //console.log("RECT-->: " + vqBody.getBoundingClientRect().x);
    //console.log("RECT-->: " + Math.abs(vqBody.scrollHeight - vqBody.clientHeight - vqBody.scrollTop) < 1);

     const offsetX = event.clientX - clientX;
     const offsetY = event.clientY - clientY;
     vqBody.style.transform = "translate(" + (offsetX + (currentTranslateX * currentScale)) + "px, " + (offsetY + (currentTranslateY * currentScale)) + "px)  scale(" + currentScale + ")";
     //console.log("dss::: " + offsetX / webBuilderProData.vqBodySettings.currentScale);
     //const currentLeft = parseFloat(vqBodyRect.x + (offsetX / webBuilderProData.vqBodySettings.currentScale));
     //const currentTop = parseFloat(vqBodyRect.y + (offsetY / webBuilderProData.vqBodySettings.currentScale));
     //console.log("rect.x::: " + vqBodyRect.x + " | LEFT:::: " + currentLeft + " | TOP:::: " + offsetY);

     //const currentLeft = parseFloat(vqBodyRect.x + (offsetX / webBuilderProData.vqBodySettings.currentScale));
     //const currentTop = parseFloat(vqBodyRect.y + (offsetY / webBuilderProData.vqBodySettings.currentScale));

     //pos.currentLeft = parseFloat(this.state.currentLeft + (offsetX / webBuilderProData.vqBodySettings.currentScale));
     //pos.currentTop = parseFloat(this.state.currentTop + (offsetY / webBuilderProData.vqBodySettings.currentScale));

     //pos.currentLeft = parseFloat(this.state.currentLeft + offsetX);
     //pos.currentTop = parseFloat(this.state.currentTop + offsetY);

     //vqBody.style.left = currentLeft  + "px";
     //vqBody.style.top = currentTop + "px";
     /*this.state.currentLeft = currentLeft;
     this.state.currentTopt = currentTop;

     this.setState(this.state.currentLeft, );
     console.log("EV2:::: " + currentLeft);*/

     //setWebBuilderProData({currentVQBodyX: currentLeft});
     //setWebBuilderProData({currentVQBodyY: currentTop});

     //vqBody.scrollLeft = parseFloat(pos.left - (offsetX / webBuilderProData.vqBodySettings.currentScale));
     //vqBody.scrollTop = pos.top - (offsetY / webBuilderProData.vqBodySettings.currentScale);
     //vqBody.style.transform = "translate(" + parseFloat(vqBodyRect.x + offsetX) + "px, " + parseFloat(vqBodyRect.y + offsetY) + "px) scale(" + webBuilderProData.vqBodySettings.currentScale + ")";
  }

  mouseUpHandler(event) {
    const finalOffsetX = event.clientX - clientX;
    const finalOffsetY = event.clientY - clientY;
    //this.setState({currentLeft: 0});

    //vqBody.style.left = pos.currentLeft  + "px";
    //vqBody.style.top = pos.currentTop + "px";
    webBuilderProData.vqBodySettings.translateX = currentTranslateX + (finalOffsetX / currentScale);
    webBuilderProData.vqBodySettings.translateY = currentTranslateY + (finalOffsetY / currentScale);
    setWebBuilderProData(webBuilderProData);
    console.log("DDDDFDFDFD:!!: "+ webBuilderProData.vqBodySettings.translateX);
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

  keyDownHandler(event) {
    //console.log("LKFJD:F:::: " + event.code);
    //console.log("ID:::: " + event.target.id);
    if(event.code !== "F12" && event.target.id !== "componentsSeachBox")
      event.preventDefault();

    if(event.code === "Space") {
      vqBody.style.cursor = "grab";
      this.setState({isSpaceKeyDown: true});
    }

    //window.onkeydown = null;
  }

  render() {
    ///////////////DELETE//////////////
    //document.onmousedown = (ev) => {
    //  console.log("X:: " + ev.clientX + " | Y:: " + ev.clientY);
    //};
    ///////////////////////////////////
    webBuilderProData = this.context.webBuilderProData;
    setWebBuilderProData = this.context.setWebBuilderProData;
    //this.setState({dataContext: webBuilderProData});
    customCursor = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="32" width="32"><path fill="rgb(189, 172, 177)" d="M.5,1.08L20.5,17.94l-10.03-.02,4.3,9.33-3.63,1.67-4.3-9.34L.61,27.47,.5,1.08Z"/></svg>'
    customCursor = "url('" + customCursor + "'), default";
    return <div id="VQBody" className="redCursor" style = {{cursor: customCursor}}
    onMouseDown = {this.mouseDownHandler}
    onMouseUp = {this.mouseUpHandler}>
    down: {this.state.isMouseDown.toString()} <br />
    pressed: {this.state.isSpaceKeyDown.toString()}
    <div id="VQBodyIDE" style={{position: "absolute", left: "1000000px", top: "1000000px", width: "500px", height: "500px", border: "1px solid blue", boxSizing: "border-box"}}></div>
      {
        webBuilderProData.objectsInVQBody.map((item, i) => {
          return <VQObject id={item.id} objid={item.objId} key={item.id} rect={item.rect} />
        })
      }
    </div>
  }

  componentDidMount() {
    //deviceFrame = document.getElementById("DeviceFrame");
    vqBody = document.getElementById("VQBody");
    //vqBody.style.left = (-1000000) + (window.innerWidth / 2) + "px";
    //vqBody.style.top = (-1000000) + (window.innerHeight / 2) + "px";
    vqBody.style.left = (-1000000) + (window.innerWidth / 2) + "px";
    vqBody.style.top = (-1000000) + (window.innerHeight / 2) + "px";
    const currentTranslateX = ((window.innerWidth / 2 - 220) * -1);
    const currentTranslateY = ((window.innerHeight / 2 - 50) * -1);
    vqBody.style.transform = "translate(" + currentTranslateX + "px, " + currentTranslateY + "px)  scale(" + webBuilderProData.vqBodySettings.currentScale + ")";

    webBuilderProData.vqBodySettings.translateX = currentTranslateX;
    webBuilderProData.vqBodySettings.translateY = currentTranslateY;
    setWebBuilderProData(webBuilderProData);

    //vqBodyRect = vqBody.getBoundingClientRect();
    //this.windowResizeHandler.call(this);
    //window.addEventListener('resize', this.windowResizeHandler);

    window.onmousedown = (event) => {
  		//console.log("AAAA:: " + event.button);

      if(event.button === 0 && event.target.id === "VQBody")
  			this.setState({isMouseDown: true});

  		else if(event.button === 1)
  			event.preventDefault();
  	};

    window.onmouseup = (event) => {
      this.setState({isMouseDown: false});
    };

    window.onkeydown = this.keyDownHandler;

    window.onkeyup = (event) => {
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
