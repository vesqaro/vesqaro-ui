import React from 'react';
import ReactDOM from 'react-dom';
import Helper from './DragToDropHelper';

/*
DragToDrop Component attibutes

obj = {
  cursor: "",//cursor of the item that is being dragged
  destination: "",//css class value starts with "." or ID value starts with "#"
  helper: "",//clone, css class value starts with "." or, ID value starts with "#"
  opacity: "",//opacity of the item that is being dragged
};
*/
let helper;
class DragToDrop extends React.Component {
  constructor(props) {
    super(props);
    this.state = {clicked: false};
    this.mouseClickHandler = this.mouseClickHandler.bind(this);
    //this.mouseDownHandler = this.mouseDownHandler.bind(this);
    //this.mouseUpHandler = this.mouseUpHandler.bind(this);
    this.dragStartedHandler = this.dragStartedHandler.bind(this);
    //this.dragHandler = this.dragHandler.bind(this);
    //console.log("clicked: " + this.state.clicked);
  }

  mouseClickHandler(event) {
    console.log("clicked: " + this.state.clicked);
    helper.remove();
    /*this.setState({clicked: true});
    console.log("mouse-x: " + event.pageX + " | mouse-y: " + event.pageY);
    this.setState({
      score: this.state.score + 1,
      clicked: true // toggled on the first click
    });
    console.log("clicked: " + this.state.clicked);
     //window.location.reload(false);*/
  }

  dragStartedHandler(event) {
    helper = document.createElement('div');
    document.body.appendChild(helper);
    event.preventDefault();
    //const help
    //this.props.children.push(<div />);

    /*const thisElement = ReactDOM.findDOMNode(this);
    const rect = thisElement.getBoundingClientRect();
    const helper = document.getElementById('DragToDropHelper');
    const helperContent = <span />;

    helper.style.display = 'inline-block';
    helper.style.cursor = 'grabbing';
    helper.style.left = rect.x + 'px';
    helper.style.top = (rect.y - 32.8)  + 'px';
    helper.style.width = rect.width + 'px';
    helper.style.height = rect.height + 'px';
    helper.style.height = '60px';
    helper.style.zIndex = '900000000';
*/
    //const clonedElement = React.cloneElement(thisElement);
    //this.render(<Helper style={{position: 'fixed', display: 'none', backgroundColor: 'blue', cursor: 'grabbing'}} />, helper);

    //console.log("width: " + rect.width + " | height: " + rect.height + " | x: " + rect.x + " | y: " + rect.y + " | mouse-x: " + event.pageX + " | mouse-y: " + event.pageY);
    //document.onmousemove = this.dragHandler;
  }

  render() {
    return <span draggable='true' style={this.props.styles} onDragStart={this.dragStartedHandler} onClick={this.mouseClickHandler}>
      {this.props.children}
    </span>
  }

  componentDidMount() {

  }

  /*componentDidUpdate(props) {
    console.log("IN UPDATE: " + this.state.clicked);
  }*/
}
export default DragToDrop;

/*function DragToDrop(props) {
  function dragHelper() {
    let helper = "original";
  }
  function dragStartedHandler(event) {
    console.log("event data: " + JSON.stringify(event.tagName));
    //console.log("event data: " + event.relatedTarget);
    event.preventDefault();
    //console.log("event data: " + event.relatedTarget.getAttribute("draggable"));
  }

  return <span draggable="true" onDragStart={dragStartedHandler}>
    {props.children}
  </span>
}

export default DragToDrop;*/
