import React from 'react';

function Image (props) {
  //console.log("AD: " + props.src)
  let src = props.src;

  if(src === '' || src === undefined)
    src =  require('../../../../images/default.png');

  return <img draggable='false' src={src} alt={props.src} style={props.styles} />
}

export default Image;
