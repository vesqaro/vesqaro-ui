import React, { userState } from 'react';
import WebBuilderProDataCtx from '../../context/WebBuilderProDataCtx';
import { componentSelection } from "../../Utilities/componentSelection.js";

//let currentObj;
let dataContext, setDataContext;
//let data;
class ObjectsTree extends React.Component {
  static contextType = WebBuilderProDataCtx;
  constructor(props) {
    super(props);
    //this.state = {isBodySelected: true};
    //this.state = {defaultZIndex: 0};
    //this.mouseDownHandler = this.mouseDownHandler.bind(this);
    //this.mouseEnterHandler = this.mouseEnterHandler.bind(this);
    //this.mouseLeaveHandler = this.mouseLeaveHandler.bind(this);
    //this.onVQBodyClickHandler = this.onVQBodyClickHandler.bind(this);
    //this.componentSelectedHandler = this.componentSelectedHandler.bind(this);
    //this.setStateHandler = this.setStateHandler.bind(this);
    //this.componentSelectionToggle = util.componentSelectionToggle.bind(this);
  }

  render() {
    const { webBuilderProData, setWebBuilderProData } = this.context;
    //data = this.context.webBuilderProData;
    return <div
      id = "ObjTree"
      onMouseEnter = {() => {}}
      onMouseLeave = {() => {}}
      style = {{boxSizing: "border-box", height: '400px', overflowY: 'auto'}}>
      <div
        id = "VQBodyComponent"
        isselected = "true"
        onClick = {() => {
          //document.getElementById("VQBody").childNodes[2].style.transform = "scale(10)";
          document.getElementById("VQBody").style.transform = "scale(50%)";
          /*for (const node of document.getElementById("VQBody").childNodes) {
            node.style.transform = "scale(25%)";
          }*/
        }}
        style = {{border: "1px solid transparent", boxSizing: "border-box", padding: '5px 0px 5px 15px', cursor: 'pointer', color: 'white'}}>
        <i className="bi bi-file-earmark-code"></i>
        Body
      </div>
      {
        webBuilderProData.objectsInVQBody.map(item => {
          return <div
            objid = {item.objId}
            className = {item.objId}
            key = {item.id}
            onMouseDown = {(event) => {
              componentSelection.select.call(this, event, item.id, item.objId, webBuilderProData, setWebBuilderProData);
              event.target.style.backgroundColor = "transparent";
              //let objInVQBody = document.getElementById("ObjTree").getElementsByClassName(event.target.getAttribute("objid"))[0];
              for (const node of document.getElementById("ObjTree").childNodes) {
                node.style.border = "1px solid transparent";
              }
              event.target.style.border = "1px solid green";
            }}
            onMouseEnter = {(event) => {
              event.target.style.backgroundColor = "red";
              let objInVQBody = document.getElementById("VQBody").getElementsByClassName(event.target.getAttribute("objid"))[0];
              objInVQBody.style.backgroundColor = "red";
            }}
            onMouseLeave = {(event) => {
              event.target.style.backgroundColor = "transparent";
              let objInVQBody = document.getElementById("VQBody").getElementsByClassName(event.target.getAttribute("objid"))[0];
              objInVQBody.style.backgroundColor = "white";
            }}
            style = {{boxSizing: "border-box", padding: '5px 0px 5px 25px', cursor: 'pointer'}}>
            <i className = {item.icon + " disableMouseEvents"}></i>
            {item.id}
          </div>
        })
      }
    </div>
  }
  componentDidMount() {
  }
}

export default ObjectsTree;
