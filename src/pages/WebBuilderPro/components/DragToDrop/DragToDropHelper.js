import React, {useState} from 'react';
import ReactDOM from 'react-dom';

//let eleX = 0, eleY = 0, pos3 = 0, pos4 = 0;
let offsetX = 0, offsetY = 0;
class DragToDropHelper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {itemBeingDragged: false};
    this.mouseEnterHandler = this.mouseEnterHandler.bind(this);
    this.mouseUpHandler = this.mouseUpHandler.bind(this);
    this.dragHandler = this.dragHandler.bind(this);
  }

  /*onClick = (e) => {
    this.setState({
      score: this.state.score + 1,
      clicked: true // toggled on the first click
    });
  }*/

  mouseEnterHandler(event) {
    event.preventDefault();
    this.setState({itemBeingDragged: true});
    const thisElement = ReactDOM.findDOMNode(this);
    const rect = thisElement.getBoundingClientRect();
    offsetX = event.clientX - rect.x;
    offsetY = event.clientY - rect.y;
    //console.log("BALADKAFH: " + event.relatedTarget);

    document.onmousemove = this.dragHandler;
    //const thisElement = ReactDOM.findDOMNode(this);
  }

  mouseUpHandler(event) {
    const thisElement = ReactDOM.findDOMNode(this);
    const vQBodyElement = document.getElementById("VQBody");

    const elementRect = thisElement.getBoundingClientRect();
    const vQBodyRect = vQBodyElement.getBoundingClientRect();

    console.log("ele x: " + elementRect.x + " | ele y: " + elementRect.y + " | vq x: " + vQBodyRect.x + " | vq y: " + vQBodyRect.y);

    //console.log("UP: " + event.relatedTarget);
    //const helper = document.getElementById("DragToDropHelper");
    thisElement.style.display = "none";
    //const thisElement = document.getElementById("DragToDropHelper");
    document.onmousemove = null;
    this.onMouseEnter = this.mouseEnterHandler;
    //this.mouseEnterHandler = this.mouseEnterHandler.bind(this);
  }

  dragHandler(event) {
    event.preventDefault();
    this.onMouseEnter = null;
    //this.mouseEnterHandler = null;
    //this.mouseEnterHandler = null;
    //console.log("currPos: " + event.clientX + "x" + event.clientY);
    let x = event.clientX - offsetX;
    let y = event.clientY - offsetY;
    //pos3 = event.clientX;
    //pos4 = event.clientY;

    const thisElement = ReactDOM.findDOMNode(this);
    thisElement.style.cursor = "grabbing";
    thisElement.style.left = x + "px";
    thisElement.style.top = y + "px";
  }

  render() {
    console.log("IN RENDER");
    return <div id="DragToDropHelper" style={this.props.style} onMouseEnter={!this.state.itemBeingDragged ? this.mouseEnterHandler : null} onMouseUp={this.mouseUpHandler}></div> //onClick={!this.state.clicked ? this.mouseClickHandler : null}
  }

  componentDidUpdate(props) {
    console.log("UPDATED");
    //this.mouseEnterHandler = null;

  }
}
export default DragToDropHelper;
