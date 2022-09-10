// JavaScript Document
import React from 'react';
import Image from '../Image/Image';

const WebBuilderLogo: React.FC = () => {
	function onClickHandler(event: any) {
		//document.body.style.filter = "brightness(150%)";
	}
	return (
		<div id="LogoDiv" onClick={onClickHandler}>
			<Image src={require('../../../../images/VesqaroLogo.png')} alt={'Vesqaro Logo'} styles={{width: '100%', height: 'auto'}} />
		</div>
	);
}

export default WebBuilderLogo;
