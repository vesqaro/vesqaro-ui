import React from 'react';
import Textbox from '../Textbox/Textbox'

function SearchBox (props) {
  return <div className="textboxFilterAreaDiv" onClick={() => {document.getElementById("VQBody").style.transform = "scale(100%)";}}>
    <span style={{marginTop: '2px'}}><i className="bi bi-search"></i></span>
    <Textbox id="componentsSeachBox" type="text" placeholder="search for components" onFillHandler={props.onFillHandler} />
  </div>
}

export default SearchBox;
