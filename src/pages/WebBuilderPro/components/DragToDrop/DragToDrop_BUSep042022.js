import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import WebBuilderProDataCtx from '../../context/WebBuilderProDataCtx';
//import uniqueId from 'lodash/utility/uniqueId'
//import Helper from './DragToDropHelper';

/*
DragToDrop Component attibutes

obj = {
  cursor: "",//cursor of the item that is being dragged
  destination: "",//css class value starts with "." or ID value starts with "#"
  helper: "",//clone, css class value starts with "." or, ID value starts with "#"
  opacity: "",//opacity of the item that is being dragged
};
*/
let webBuilderProData, setWebBuilderProData;
let vqBody, vqBodyRect;
let helper;
let coordinates;
let destination = {
  icon: "",
  iconType: "",
  x: 0,
  y: 0,
  width: 0,
  height: 0
};//const tempId = Date.now();
let finalX, finalY;
let offsetX = 0, offsetY = 0;

class DragToDrop extends React.Component {
  static contextType = WebBuilderProDataCtx;
  constructor(props) {
    super(props);
    this.mouseDownHandler = this.mouseDownHandler.bind(this);
    this.mouseUpHelperHandler = this.mouseUpHelperHandler.bind(this);
    this.dragStartedHandler = this.dragStartedHandler.bind(this);
    this.dragHandler = this.dragHandler.bind(this);
  }

  mouseDownHandler(event) {
    if(event.button == 0)
      event.target.style.cursor = 'grabbing';

    if(helper !== null && helper !== undefined)
      helper.remove();
  }

  mouseUpHelperHandler(event) {
    document.body.setAttribute("isitembeingdragged", "false");
    //helper.removeEventListener('mouseup', this.mouseUpHelperHandler);
    document.onmousemove = null;
    document.onmouseup = null;
    const helperRect = helper.getBoundingClientRect();
    vqBodyRect = vqBody.getBoundingClientRect();
    const removeEvents = () => {
      vqBody.onmouseenter = null;
      document.getElementById("MenuBar").onmouseenter = null;
      document.getElementById("LeftMenu").onmouseenter = null;
      document.getElementById("RightMenu").onmouseenter = null;
    };

    vqBody.onmouseenter = (omeEvent) => {
      console.log("UO: " + omeEvent.target.id);
      let x = event.clientX - offsetX;
      let y = event.clientY - offsetY;

      //helper.style.left = (x - destination.x) + "px";
      //helper.style.top = (y - destination.y) + "px";

      //uniqueId
      webBuilderProData.latestId++;
      const id = webBuilderProData.latestId;
      const objId = "VQBodyObject-" + webBuilderProData.latestId;
      webBuilderProData.objectsInVQBody.push({id: id, objId: objId, icon: destination.icon, iconType: destination.iconType, rect: {x: (parseInt(finalX) + 1000000), y: (parseInt(finalY) + 1000000), width: parseInt(helperRect.width), height: parseInt(helperRect.height)}});//JSON.parse(JSON.stringify(helperRect))});//{x: parseInt(helperRect.x), y: parseInt(helperRect.y), width: parseInt(helperRect.width), height: parseInt(helperRect.height)}});

      setWebBuilderProData(webBuilderProData);
      removeEvents.call(this);
    };

    document.getElementById("MenuBar").onmouseenter = removeEvents;
    document.getElementById("LeftMenu").onmouseenter = removeEvents;
    document.getElementById("RightMenu").onmouseenter = removeEvents;




    coordinates.remove();
    helper.remove();
  }

  dragStartedHandler(event) {
    event.preventDefault();
    document.body.setAttribute("isitembeingdragged", "true");
    //document.getElementById("VQBody").style.pointerEvents = "none";
    const thisElement = ReactDOM.findDOMNode(this);
    const rect = thisElement.getBoundingClientRect();
    let destinationId = this.props.dragAttrs.destination;
    if(destinationId.indexOf("#") === 0)
      destinationId = destinationId.replace("#", "");

    destination = document.getElementById(destinationId);
    //console.log("--00: " + destinationId);
    const rectDestination = destination.getBoundingClientRect();
    destination.x = rectDestination.x;
    destination.y = rectDestination.y;
    destination.width = rectDestination.width;
    destination.height = rectDestination.height;
    destination.icon = event.target.getAttribute('icon');
    destination.iconType = event.target.getAttribute('icontype');
    coordinates = document.createElement('span');
    if(this.props.dragAttrs.helper === 'default') {
      helper = document.createElement('div');
      helper.className = 'DragToDropHelper';
      helper.style.cursor = this.props.dragAttrs.cursor;
    	helper.style.opacity = this.props.dragAttrs.opacity;
      helper.style.zIndex = this.props.dragAttrs.zIndex;
      helper.style.top = rect.y  + 'px';
      helper.style.left = rect.x + 'px';
      helper.style.width = rect.width + 'px';
      helper.style.height = rect.height + 'px';
      helper.appendChild(coordinates);
      document.onmouseup = this.mouseUpHelperHandler;
    }

    offsetX = event.clientX - rect.x;
    offsetY = event.clientY - rect.y;
    document.body.appendChild(helper);
    document.onmousemove = this.dragHandler;
  }

  dragHandler(event) {
    const x = event.clientX - offsetX;
    const y = event.clientY - offsetY;

    helper.style.left = x + 'px';
    helper.style.top = y + 'px';

    finalX = (parseFloat(x.toString() / webBuilderProData.vqBodySettings.currentScale) - parseFloat(destination.x) / webBuilderProData.vqBodySettings.currentScale - 1000000).toFixed(0);
    finalY = (parseFloat(y.toString() / webBuilderProData.vqBodySettings.currentScale) - parseFloat(destination.y) / webBuilderProData.vqBodySettings.currentScale - 1000000).toFixed(0);

    coordinates.innerHTML = "x: " + finalX + "<br> &nbsp;y: " + finalY;
    coordinates.style.fontSize = '80%';
    coordinates.style.padding = '2px';
  }

  render() {
    return <div icon={this.props.icon} icontype={this.props.icontype} draggable='true' style={{height: '65px', display: 'inline-block', cursor: 'grab'}}
      onMouseEnter = {this.mouseEnterHandler}
      onDragStart = {this.dragStartedHandler}
      onMouseDown = {this.mouseDownHandler}
      onMouseUp = {(event) => {event.target.style.cursor = "grab"}}>
      {this.props.children}
    </div>
  }

  componentDidMount() {
    vqBody = document.getElementById("VQBody");
    webBuilderProData = this.context.webBuilderProData;
    setWebBuilderProData  = this.context.setWebBuilderProData;
  }
}
export default DragToDrop;
