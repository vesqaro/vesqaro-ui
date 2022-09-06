import React, { userState, useContext }  from 'react';
import { WebBuilderProDataProvider } from '../../context/WebBuilderProDataCtx';
import WebBuilderProDataCtx from '../../context/WebBuilderProDataCtx';
//import VQBodyComponent from './VQBodyComponent';
import VQObject from '../VQObject/VQObject';

let pos = { left: 0, top: 0, x: 0, y: 0, currentLeft: 220, currentTop: 50 };
let customCursor;
let deviceFrame, vqBody, vqBodyRect;
let webBuilderProData;

class VQBody extends React.Component {
  static contextType = WebBuilderProDataCtx;
  constructor(props) {
    super(props);
    //this.state = {dataContext: null};
    this.state = {isSpaceKeyDown: false, isMouseDown: false, currentLeft: 220, currentTop: 50};
    this.mouseDownHandler = this.mouseDownHandler.bind(this);
    this.mouseMoveHandler = this.mouseMoveHandler.bind(this);
    this.mouseUpHandler = this.mouseUpHandler.bind(this);
    //this.wheelHandler = this.wheelHandler.bind(this);
    this.windowResizeHandler = this.windowResizeHandler.bind(this);
    this.keyDownHandler = this.keyDownHandler.bind(this);
  }

  windowResizeHandler(event) {
    /*deviceFrame.style.width = (window.innerWidth - 440) + "px";
    deviceFrame.style.height = (window.innerHeight - 50) + "px";*/

    vqBody.style.width = (window.innerWidth - 440) + "px";
    vqBody.style.height = (window.innerHeight - 50) + "px";
  }

  mouseDownHandler(event) {
    console.log("EV:::: " + event.button);

    if(event.button == 1 || (event.button == 0 && this.state.isSpaceKeyDown)) {
      console.log("DDDDDDD");
      event.target.style.cursor = "grabbing";
      vqBodyRect = vqBody.getBoundingClientRect();

      pos = {
        left: vqBody.scrollLeft,
        top: vqBody.scrollTop,
        x: event.clientX,
        y: event.clientY,
      };
      console.log("POS::: " + JSON.stringify(pos));
      document.addEventListener('mousemove', this.mouseMoveHandler);
      document.addEventListener('mouseup', this.mouseUpHandler);
    }
  }

  mouseMoveHandler(event) {
    //console.log("RECT-->: " + vqBody.getBoundingClientRect().x);
    //console.log("RECT-->: " + Math.abs(vqBody.scrollHeight - vqBody.clientHeight - vqBody.scrollTop) < 1);

     const offsetX = event.clientX - pos.x;
     const offsetY = event.clientY - pos.y;

     //pos.currentLeft = parseFloat(this.state.currentLeft + (offsetX / webBuilderProData.currentScale));
     //pos.currentTop = parseFloat(this.state.currentTop + (offsetY / webBuilderProData.currentScale));

     pos.currentLeft = parseFloat(this.state.currentLeft + offsetX);
     pos.currentTop = parseFloat(this.state.currentTop + offsetY);

     vqBody.style.left = pos.currentLeft  + "px";
     vqBody.style.top = pos.currentTop + "px";

     //vqBody.scrollLeft = parseFloat(pos.left - (offsetX / webBuilderProData.currentScale));
     //vqBody.scrollTop = pos.top - (offsetY / webBuilderProData.currentScale);
     //vqBody.style.transform = "translate(" + parseFloat(vqBodyRect.x + offsetX) + "px, " + parseFloat(vqBodyRect.y + offsetY) + "px) scale(" + webBuilderProData.currentScale + ")";
  }

  mouseUpHandler(event) {
    vqBody.style.left = pos.currentLeft  + "px";
    vqBody.style.top = pos.currentTop + "px";

    this.state.currentLeft = pos.currentLeft;
    this.state.currentTop = pos.currentTop;

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

    if(event.code == "Space") {
      vqBody  .style.cursor = "grab";
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
    //this.setState({dataContext: webBuilderProData});
    customCursor = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="32" width="32"><path fill="rgb(189, 172, 177)" d="M.5,1.08L20.5,17.94l-10.03-.02,4.3,9.33-3.63,1.67-4.3-9.34L.61,27.47,.5,1.08Z"/></svg>'
    customCursor = "url('" + customCursor + "'), default";
    return <div id="VQBody" className="redCursor" style = {{cursor: customCursor}}
    onMouseDown = {this.mouseDownHandler}
    onMouseUp = {this.mouseUpHandler}>
    down: {this.state.isMouseDown.toString()} <br />
    pressed: {this.state.isSpaceKeyDown.toString()}
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
    vqBodyRect = vqBody.getBoundingClientRect();
    this.windowResizeHandler.call(this);
    window.addEventListener('resize', this.windowResizeHandler);
    window.onmousedown = (event) => {
  		//console.log("AAAA:: " + event.button);

      if(event.button == 0 && event.target.id == "VQBody")
  			this.setState({isMouseDown: true});

  		else if(event.button == 1)
  			event.preventDefault();
  	};

    window.onmouseup = (event) => {
      this.setState({isMouseDown: false});
    };

    window.onkeydown = this.keyDownHandler;

    window.onkeyup = (event) => {
      //console.log("CODE:: " + event.code);
      if(event.code == "Space") {
        vqBody  .style.cursor = customCursor;
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
