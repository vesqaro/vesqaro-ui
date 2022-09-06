import React, { useState, useContext }  from 'react';
import { WebBuilderProDataProvider } from '../../context/WebBuilderProDataCtx';
import WebBuilderProDataCtx from '../../context/WebBuilderProDataCtx';
import VQBodyComponent from './VQBodyComponent';
import Draggable from '../Draggable/Draggable';
import { util } from '../../Util/Util.js';
import { componentSelection } from '../../Utilities/componentSelection.js';

let dataContext, setDataContext, customCursor;
//let customCursor = "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 512 512'><g transform='rotate(45 256 256)'><rect id='r' x='16' y='216' width='480' height='80' rx='14'/><use href='%23r' transform='rotate(90 256 256)'/></g></svg>";
//customCursor = customCursor.replace(/</g, "%3C");
//customCursor = customCursor.replace(/>/g, "%3E");
class VQBody extends React.Component {
  static contextType = WebBuilderProDataCtx;
  constructor(props) {
    super(props);
    //this.state = {customCursor: 'test'};
    //this.mouseEnterHandler = this.mouseEnterHandler.bind(this);
    //this.mouseLeaveHandler = this.mouseLeaveHandler.bind(this);
    //this.mouseMoveHandler = this.mouseMoveHandler.bind(this);
    this.windowResizeHandler = this.windowResizeHandler.bind(this);
    this.componentSelectedHandler = this.componentSelectedHandler.bind(this);
    this.setZIndexToTop = this.setZIndexToTop.bind(this);
    this.componentRepositionHandler = this.componentRepositionHandler.bind(this);
    //this.componentSelectionToggle = util.componentSelectionToggle.bind(this);
    //this.mouseEnterComponentHandler = this.mouseEnterComponentHandler.bind(this);
  }

  /*mouseEnterHandler(event) {
    setDataContext(util.mouseEnterComponent.call(this, event, dataContext));
  }

  mouseLeaveHandler(event) {
    setDataContext(util.mouseLeaveComponent.call(this, event, dataContext));
  }*/

  componentSelectedHandler(event) {
    //console.log(event.target.getAttribute("isselected") + "YY: ") //+ event.target.getAttribute("isselected") === "false" ? "true": "false");
    //setDataContext(util.componentSelectionToggle.call(this, event, dataContext));
    event.target.getAttribute("isselected") === "true" ? setDataContext(componentSelection.unselect.call(this, event, dataContext)) : setDataContext(componentSelection.select.call(this, event, event.target.getAttribute("id"), dataContext, setDataContext))
  }

  componentRepositionHandler(event) {
    dataContext.objectsInVQBody.forEach(item => {
      if(item.objId === event.target.getAttribute("objid")) {
        let rect = event.target.getBoundingClientRect();
        item.rect.x = parseInt(rect.x);
        item.rect.y = parseInt(rect.y);
      }

      else
        item.isSelected = false;
    });
    setDataContext(dataContext);
  }

  windowResizeHandler(event) {
    let vqBody = document.getElementById("VQBody");
    vqBody.style.width = (window.innerWidth - 442) + "px";
    //console.log("W: " + window.innerWidth + " | H: " + window.innerHeight);
  }

  setZIndexToTop(event, zIndex) {
    dataContext.objectsInVQBody.forEach(item => {
      if(item.objId === event.target.getAttribute("objid")) {
        item.rect.zIndex = zIndex;
      }
    });
    setDataContext(dataContext);
  }

  render() {
    const { webBuilderProData, setWebBuilderProData } = this.context;
    dataContext = webBuilderProData;
    setDataContext = setWebBuilderProData;
    customCursor = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="32" width="32"><path fill="rgb(189, 172, 177)" d="M.5,1.08L20.5,17.94l-10.03-.02,4.3,9.33-3.63,1.67-4.3-9.34L.61,27.47,.5,1.08Z"/></svg>'
    customCursor = "url('" + customCursor + "'), default";
    //console.log("AAAAA: " + customCursor);
    //console.log("ZZZZZZ");
    //url(''), pointer
    //let url =  require("../../images/customCursor.svg");
    return <div id="VQBody" className="redCursor"
      style = {{cursor: customCursor}}
      //onClick = {(event) => {setDataContext(util.unselectAllComponents.call(this, dataContext))}}>
      >
      {dataContext.objectsInVQBody.map((item, i) => {
        return <Draggable
          id = {item.id}
          objid = {item.objId}
          key = {item.id}
          style = {{left: item.rect.x  + 'px', top: item.rect.y + 'px', width: item.rect.width + 'px', height: item.rect.height + 'px'}}
          select = {this.componentSelectedHandler}
          onhover = {(event) => {setDataContext(util.mouseEnterComponent.call(this, event, dataContext))}}
          onblur = {(event) => {setDataContext(util.mouseLeaveComponent.call(this, event, dataContext))}}
          setzindextotop = {this.setZIndexToTop}
          reposition = {this.componentRepositionHandler}
          defaultzindex = {item.rect.zIndex}
          />
        })
      }
    </div>
  }

  componentDidMount() {
    this.windowResizeHandler.call(this);
    //console.log("W: " + window.innerWidth + " | H: " + window.innerHeight);
    window.addEventListener('resize', this.windowResizeHandler);
    //window.resize = this.windowResizeHandler;
  }
}
export default VQBody;
