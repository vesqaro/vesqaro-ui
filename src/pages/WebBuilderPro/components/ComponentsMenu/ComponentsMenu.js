import React from 'react';
import SingleFrame from '../SingleFrame/SingleFrame';
import ComponentInMenu from '../ComponentInMenu/ComponentInMenu';

//<span style={{marginLeft: "15px"}}><ComponentInMenu icon="bi bi-search" text="Text" /></span>
function ComponentsMenu (props) {
  //console.log("DATA: " + JSON.stringify(props.data.listOfObjects));
  return <div style={{marginTop: '10px', padding: '10px 0px 10px 15px', width: '205px', poistion: 'relative'}}>
    {props.data.listOfObjects.map((item, i) => {
      return <ComponentInMenu key={i} icon={item.icon} icontype={item.iconType} text={item.text} />
    })
    }
  </div>
}

export default ComponentsMenu;
