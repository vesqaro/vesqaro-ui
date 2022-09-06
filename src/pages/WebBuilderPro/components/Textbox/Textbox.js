import React from 'react';

function Textbox (props) {
  return <input id={props.id} placeholder={props.placeholder} style={{width: "100%", boxSizing: "border-box"}} type={props.type} onChange={props.onFillHandler} />
}

export default Textbox;
