// JavaScript Document
import React  from 'react';
//import SingleFrame from './UILogo';

function SingleFrame (props) {
	return (
		<div style={props.styles}>
      {props.children}
		</div>
	);
}

export default SingleFrame;
