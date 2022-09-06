import React from 'react';
//import Draggable from 'react-draggable'; // The default
import DragToDrop from '../DragToDrop/DragToDrop'; // <DraggableCore>

const dragAttrs = {
  cursor: "grabbing",//cursor of the item that is being dragged
  destination: "#VQBody",//css class value starts with "." or ID value starts with "#"
  helper: "default",//clone, css class value starts with ".", ID value starts with "#", or default
  opacity: "0.7",//opacity of the item that is being dragged
  displayXYCoordintes: true,//x and y positions will be displayed next to the helper element
  zIndex: 10000000//zIndex of the helper
};

function ComponentInMenu (props) {
  /*function mouseDownHandler(event) {
    console.log("DDD: DDD2222");
    const thisElement = ReactDOM.findDOMNode(this);
    event.relatedTarget.style.cursor = "grabbing";
  }*/
  //console.log("SSSS: " + JSON.stringify(props.icontype));
  return <DragToDrop icon={props.icon} icontype={props.icontype} dragAttrs={dragAttrs}>
  <div className="menuOption">
    <div className="textOption">{props.text}</div>
    <div><i className={props.icon + " iconOption"}></i></div>
  </div>
  </DragToDrop>
}

export default ComponentInMenu;
