import React, { userState } from "react";
//import ReactDOM from "react-dom";
//import WebBuilderProDataCtx from "../../context/WebBuilderProDataCtx";
//import { componentSelection } from "../../Utilities/componentSelection.js";

class VQObject extends React.Component {
  //static contextType = WebBuilderProDataCtx;
  constructor(props) {
    super(props);
  }

  render() {
    return <div>Test</div>
    /*const { webBuilderProData, setWebBuilderProData } = this.context;

    return <div
      id = {this.props.id}
      className = {"itemInVQBody " + this.props.objid}
      objid = {this.props.objid}
      style = {{boxSizing: "border-box", left: this.props.rect.x + "px", top: this.props.rect.y + "px", width: this.props.rect.width + "px", height: this.props.rect.height + "px"}}
      onMouseDown = {(event) => {
        if(event.button == 0) {
          for (const node of document.getElementById("ObjTree").childNodes) {
            node.style.border = "1px solid transparent";
          }

          let objInVQBody = document.getElementById("ObjTree").getElementsByClassName(event.target.getAttribute("objid"))[0];
          objInVQBody.style.border = "1px solid green";
          ////////objInVQBody.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
          componentSelection.select.call(this, event, this.props.id, this.props.objid, webBuilderProData, setWebBuilderProData);
        }
      }}
      onMouseEnter = {(event) => {
        event.target.style.backgroundColor = "red";
        let objInVQBody = document.getElementById("ObjTree").getElementsByClassName(event.target.getAttribute("objid"))[0];
        objInVQBody.style.backgroundColor = "red";
      }}
      onMouseLeave = {(event) => {
        event.target.style.backgroundColor = "white";
        let objInVQBody = document.getElementById("ObjTree").getElementsByClassName(event.target.getAttribute("objid"))[0];
        objInVQBody.style.backgroundColor = "transparent";
      }}>
      {this.props.children}
    </div>*/
  }

  componentDidMount() {
  }
}
export default VQObject;
