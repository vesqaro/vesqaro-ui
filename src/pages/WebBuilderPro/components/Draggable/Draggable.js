import React from 'react';
import ReactDOM from 'react-dom';


let itemBeingDragged;
let dataContext;
let offsetX = 0, offsetY = 0;
let isUpFromDrag = false;

//to make sure mouse really moved from original position
let currentMousePosition = {
  x: 0,
  y:0
}
//let isUpFromDrag = false;
let vqBody;
class Draggable extends React.Component {
  constructor(props) {
    super(props);
    //this.state = {isMouseDown: false};
    //this.state = {isUpFromDrag: false};
    this.state = {defaultZIndex: 0};
    //this.mouseClickHandler = this.mouseClickHandler.bind(this);
    this.mouseEnterHandler = this.mouseEnterHandler.bind(this);
    this.mouseLeaveHandler = this.mouseLeaveHandler.bind(this);
    this.mouseDownHandler = this.mouseDownHandler.bind(this);
    this.mouseUpHandler = this.mouseUpHandler.bind(this);
    this.dragHandler = this.dragHandler.bind(this);
  }

  /*mouseClickHandler(event) {

  }*/

  mouseEnterHandler(event) {
    this.props.onhover.call(this, event);
  }

  mouseLeaveHandler(event) {
    this.props.onblur.call(this, event);
  }

  mouseDownHandler(event) {
    console.log("DEFAULT: " + this.state.defaultZIndex);
    this.props.setzindextotop.call(this, event, 9999999999);
    itemBeingDragged = event.target;
    //let customCursor = document.getElementById("VQBodyCustomCursor");
    const rect = event.target.getBoundingClientRect();
    //console.log("RECT: " + JSON.stringify(rect));
    offsetX = event.clientX - rect.x;
    offsetY = event.clientY - rect.y;
    currentMousePosition.x = event.clientX;
    currentMousePosition.y = event.clientY;

    vqBody = document.getElementById("VQBody");
    vqBody.onmousemove = this.dragHandler;
  }

  mouseUpHandler(event) {
    this.props.setzindextotop.call(this, event, this.state.defaultZIndex);
    //this.props.update.call(this, event, isUpFromDrag);
    //this.props.update.call(this, event, isUpFromDrag);
    if(isUpFromDrag)
      this.props.reposition.call(this, event);

    else
      this.props.select.call(this, event);

    vqBody = document.getElementById("VQBody");
    vqBody.onmousemove = null;
    let customCursor = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="32" width="32"><path fill="rgb(189, 172, 177)" d="M.5,1.08L20.5,17.94l-10.03-.02,4.3,9.33-3.63,1.67-4.3-9.34L.61,27.47,.5,1.08Z"/></svg>'
    customCursor = "url('" + customCursor + "'), default";
    vqBody.style.cursor = customCursor;
    //this.setState({isUpFromDrag: false});
    isUpFromDrag = false;
  }

    dragHandler(event) {
      if(currentMousePosition.x === event.clientX && currentMousePosition.y === event.clientY)
        vqBody.onmousemove = null

      else {
        //console.log("MOUSE MOVEDDDDD");
        vqBody.style.cursor = "grabbing";
        let x = event.clientX - offsetX;
        let y = event.clientY - offsetY;
        itemBeingDragged.style.left = x + 'px';
        itemBeingDragged.style.top = y + 'px';
        //this.setState({isUpFromDrag: true});
        isUpFromDrag = true;
      }
  }

  render() {
    document.body.setAttribute("currenttool", "")
    return <div
      id = {this.props.id}
      className = {"itemInVQBody " + this.props.objid}
      objid = {this.props.objid}
      style = {this.props.style}
      onMouseDown = {this.mouseDownHandler}
      onMouseUp = {this.mouseUpHandler}
      onMouseEnter = {(event) => {
        event.target.style.backgroundColor = "red";
        let objInVQBody = document.getElementById("ObjTree").getElementsByClassName(event.target.getAttribute("objid"))[0];
        objInVQBody.style.backgroundColor = "red";
      }}
      onMouseLeave = {(event) => {
        event.target.style.backgroundColor = "transparent";
        let objInVQBody = document.getElementById("ObjTree").getElementsByClassName(event.target.getAttribute("objid"))[0];
        objInVQBody.style.backgroundColor = "transparent";
      }}>
      {this.props.children}
    </div>
  }

  componentDidMount() {
    this.setState({defaultZIndex: this.props.defaultzindex});
  }
}
export default Draggable;
