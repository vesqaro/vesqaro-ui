// JavaScript Document
import React from 'react';
//import SingleFrame from './UILogo';

function SingleFrame (props) {
	return (
		<div className={props.className} style={props.style}>
      {props.children}
		</div>
	);
}

export default SingleFrame;
