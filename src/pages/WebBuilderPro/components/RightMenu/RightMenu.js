import React, { useState, useEffect, useContext }  from 'react';
import WebBuilderProDataCtx from '../../context/WebBuilderProDataCtx';
import ObjectsTree from '../ObjectsTree/ObjectsTree'
//import SingleFrame from '../components/SingleFrame';
//import WebBuilderLogo from '../components/logos/WebBuilderLogo';

class RightMenu extends React.Component {
  static contextType = WebBuilderProDataCtx;
  constructor(props) {
    super(props);
  }

  render() {
    return <div id="RightMenu">
      <ObjectsTree />
    </div>
  }
}
export default RightMenu;
