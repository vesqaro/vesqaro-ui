//import React, { useContext, useState }  from 'react';
import React, { useContext }  from 'react';
import WebBuilderProDataCtx from '../../context/WebBuilderProDataCtx';
import Draggable from '../Draggable/Draggable';

class VQBodyComponent extends React.Component {
  //static contextType = WebBuilderProDataCtx;
  constructor(props) {
    super(props);
    //this.state = {isSelected: true};
    ////this.mouseClickHandler = this.mouseClickHandler.bind(this);
    //this.removeObject = this.removeObject.bind(this);
  }

  //mouseClickHandler(event) {
    //this.removeObject.call();
    //console.log("FFFF");
  //}

  /*removeObject(event) {
    const { webBuilderProData, setWebBuilderProData } = this.context;
    let dataContext = webBuilderProData;
    dataContext.objectsInVQBody.splice(0, 1)
    setWebBuilderProData(dataContext);
  }*/

  render() {
    return <Draggable id={this.props.id} objid={this.props.objid} isselected={this.props.isselected} style={this.props.style}>
      <input className='textboxInVQBody' />
    </Draggable>;
  }
}

export default VQBodyComponent;
