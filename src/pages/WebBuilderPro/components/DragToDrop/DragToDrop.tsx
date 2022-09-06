import React, { useContext } from 'react';
import ReactDOM from 'react-dom';
import { AppDataContext } from "../../context/AppDataContext";
import { IAppDataContext, IAppData } from "../../dataModels/AppDataModel";
import { VQBodyDataContext } from "../../context/VQBodyDataContext";
import { IVQBodyDataContext, IVQBodyData } from "../../dataModels/VQBodyDataModel";
import { ObjectsInVQBodyDataContext } from "../../context/ObjectsInVQBodyDataContext";
import { IObjectsInVQBodyDataContext, IObjectInVQBodyData } from "../../dataModels/ObjectsInVQBodyDataModel";

const DragToDrop: React.FC = (props) => {
  const { appData, updateAppData } = useContext(AppDataContext) as IAppDataContext;
  const { vqBodyData, updateVQBodyData } = useContext(VQBodyDataContext) as IVQBodyDataContext;
  const { objectsInVQBodyData, updateObjectsInVQBodyData } = useContext(ObjectsInVQBodyDataContext) as IObjectsInVQBodyDataContext;

  let vqBody: any, vqBodyRect: any;
  let helper: any;
  let coordinates: any;
  let destination: any = {
    icon: "",
    iconType: "",
    x: 0,
    y: 0,
    width: 0,
    height: 0
  };//const tempId = Date.now();
  let finalX: number, finalY: number;
  let offsetX: number = 0, offsetY: number = 0;

  const mouseDownHandler = (event: any) => {
    if(event.button == 0)
      event.target.style.cursor = 'grabbing';

    if(helper !== null && helper !== undefined)
      helper.remove();
  }

  const mouseUpHelperHandler = (event: any) => {
    document.body.setAttribute("isitembeingdragged", "false");
    //helper.removeEventListener('mouseup', this.mouseUpHelperHandler);
    document.onmousemove = null;
    document.onmouseup = null;
    const helperRect = helper.getBoundingClientRect();
    vqBodyRect = vqBody.getBoundingClientRect();
    const removeEvents = () => {
      vqBody.onmouseenter = null;
      //document.getElementById("MenuBar").onmouseenter = null;
      //document.getElementById("LeftMenu").onmouseenter = null;
      //document.getElementById("RightMenu").onmouseenter = null;
    };

    vqBody.onmouseenter = (omeEvent: any) => {
      console.log("UO: " + omeEvent.target.id);
      let x: number = event.clientX - offsetX;
      let y: number = event.clientY - offsetY;

      //helper.style.left = (x - destination.x) + "px";
      //helper.style.top = (y - destination.y) + "px";

      //uniqueId
      appData.latestId++;
      const id = appData.latestId;
      const objId = "VQBodyObject-" + appData.latestId;
      //objectsInVQBodyData.push({id: id, objId: objId, icon: destination.icon, iconType: destination.iconType, rect: {x: (parseInt(finalX.toString()) + 1000000), y: (parseInt(finalY.toString()) + 1000000), width: parseInt(helperRect.width), height: parseInt(helperRect.height)}});//JSON.parse(JSON.stringify(helperRect))});//{x: parseInt(helperRect.x), y: parseInt(helperRect.y), width: parseInt(helperRect.width), height: parseInt(helperRect.height)}});

      updateObjectsInVQBodyData("add", id, {
        id: id,
        objId: objId,
        icon: destination.icon,
        iconType: destination.iconType,
        rect: {
          x: (parseInt(finalX.toString()) + 1000000),
          y: (parseInt(finalY.toString()) + 1000000),
          width: parseInt(helperRect.width),
          height: parseInt(helperRect.height)
        }
      });
      removeEvents.call(this);
    };

    //document.getElementById("MenuBar").onmouseenter = removeEvents;
    //document.getElementById("LeftMenu").onmouseenter = removeEvents;
    //document.getElementById("RightMenu").onmouseenter = removeEvents;




    coordinates.remove();
    helper.remove();
  }

  const dragStartedHandler = (event: any) => {
    event.preventDefault();
    document.body.setAttribute("isitembeingdragged", "true");
    //document.getElementById("VQBody").style.pointerEvents = "none";
    const rect = event.target.getBoundingClientRect();
    let destinationId = props.
    if(destinationId.indexOf("#") === 0)
      destinationId = destinationId.replace("#", "");

    destination = document.getElementById(destinationId);
    //console.log("--00: " + destinationId);
    const rectDestination = destination.getBoundingClientRect();
    destination.x = rectDestination.x;
    destination.y = rectDestination.y;
    destination.width = rectDestination.width;
    destination.height = rectDestination.height;
    destination.icon = event.target.getAttribute('icon');
    destination.iconType = event.target.getAttribute('icontype');
    coordinates = document.createElement('span');
    if(props.dragAttrs.helper === 'default') {
      helper = document.createElement('div');
      helper.className = 'DragToDropHelper';
      helper.style.cursor = this.props.dragAttrs.cursor;
    	helper.style.opacity = this.props.dragAttrs.opacity;
      helper.style.zIndex = this.props.dragAttrs.zIndex;
      helper.style.top = rect.y  + 'px';
      helper.style.left = rect.x + 'px';
      helper.style.width = rect.width + 'px';
      helper.style.height = rect.height + 'px';
      helper.appendChild(coordinates);
      document.onmouseup = this.mouseUpHelperHandler;
    }

    offsetX = event.clientX - rect.x;
    offsetY = event.clientY - rect.y;
    document.body.appendChild(helper);
    document.onmousemove = dragHandler;
  }

  const dragHandler = (event: any) => {
    const x: number = event.clientX - offsetX;
    const y: number = event.clientY - offsetY;

    helper.style.left = x + 'px';
    helper.style.top = y + 'px';

    finalX = parseFloat((parseFloat((x / vqBodyData.currentScale).toString()) - parseFloat(destination.x) / vqBodyData.currentScale - 1000000).toFixed(0));
    finalY = parseFloat((parseFloat(y / appData.vqBodySettings.currentScale) - parseFloat(destination.y) / appData.vqBodySettings.currentScale - 1000000).toFixed(0));

    coordinates.innerHTML = "x: " + finalX + "<br> &nbsp;y: " + finalY;
    coordinates.style.fontSize = '80%';
    coordinates.style.padding = '2px';
  }
}
