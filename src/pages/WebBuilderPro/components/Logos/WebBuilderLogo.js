// JavaScript Document
import React from 'react';
import Image from '../Image/Image';

function WebBuilderLogo() {
	function onClickHandler(event) {
		//document.body.style.filter = "brightness(150%)";
	}
	return (
		<div id="LogoDiv" onClick={onClickHandler}>
			<Image src={require('../../../../images/VesqaroLogo.png')} alt={'Vesqaro Logo'} styles={{width: '100%', height: 'auto'}} />
		</div>
	);
}

export default WebBuilderLogo;
