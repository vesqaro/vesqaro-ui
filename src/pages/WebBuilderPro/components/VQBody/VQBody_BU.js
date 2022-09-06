import React, { useState, useEffect, useContext }  from 'react';
import { WebBuilderProDataProvider } from '../../context/WebBuilderProDataCtx';
import WebBuilderProDataCtx from '../../context/WebBuilderProDataCtx';
import VQBodyComponent from './VQBodyComponent';
import Draggable from '../Draggable/Draggable';

//import SingleFrame from '../components/SingleFrame';
//import WebBuilderLogo from '../components/logos/WebBuilderLogo';

function VQBody (props) {
  let customCursor;
  let svg;
  let path
  const { webBuilderProData, setWebBuilderProData } = useContext(WebBuilderProDataCtx);

  //const { webBuilderProData, setWebBuilderProData } = this.context;
  const dataContext = webBuilderProData;
  const [windowWidth, setWindowWidth] = useState(0);
  const [windowHeight, setWindowHeight] = useState(0);
  const [a, setA] = useState(0);
  let resizeWindow = () => {
    setWindowWidth(window.innerWidth);
    setWindowHeight(window.innerHeight);
  };
  window.removeEventListener("resize", resizeWindow);
  useEffect(() => {
    resizeWindow();
    window.addEventListener("resize", resizeWindow);
    return () => window.removeEventListener("resize", resizeWindow);
  }, []);
  //console.log("DFDR43212");
  let w = (windowWidth - 442) + "px";
  //return <div id="VQBody" style={{zIndex: '-10', width: w}}>VQBody Content {windowWidth} x {windowHeight}</div>

/*function componentsClickedHandler(event) {
  //console.log("kulkhara: " + event.target.getAttribute("objid"));
  //let arr = event.target.getAttributeNames();
  console.log("YY: " + JSON.stringify(dataContext));
  dataContext.objectsInVQBody.forEach(item => {
    if(item.id === event.target.getAttribute("objid"))
      item.isSelected ? item.isSelected = false : item.isSelected = true;

    else {
      item.isSelected = false;
    }
  });



  //.push({id: id, rect: {x: x - destination.x, y: y - destination.y, width: helperRect.width, height: helperRect.height}, isSelected: false});
  setWebBuilderProData(dataContext);
  //event.target.getAttributeNames().forEach((item, i) => {
  //  console.log("ATTR: " + item);
  //});

  //const { webBuilderProData, setWebBuilderProData } = this.context;
  //dataContext = webBuilderProData;
  //console.log("LEN: " + JSON.stringify(dataContext));
  //dataContext.objectsInVQBody.forEach(item => {
  //  console.log("DATA: " + item.id);
  //});
}*/
  //console.log("in VQBody: " + JSON.stringify(dataContext));
  function componentUpdatedHandler(event) {
    //console.log("Updated");
    //console.log("kulkhara: " + event.target.getAttribute("isselected"));
    dataContext.objectsInVQBody.forEach(item => {
      if(item.id === event.target.getAttribute("objid")) {
        if(item.isSelected) {
          item.isSelected = false;
          dataContext.isBodySelected = true;
        }

        else {
          item.isSelected = true;
          dataContext.isBodySelected = false;
        }
      }

      else
        item.isSelected = false;
    });
    setWebBuilderProData(dataContext);
  }

  function mouseEnterHandler(event) {
    if(document.body.getAttribute("isitembeingdragged") == "false") {
      let customCursor = document.createElement("span");
      customCursor.id = "VQBodyCustomCursor";
      customCursor.className = "material-symbols-outlined";
      customCursor.textContent = "near_me";
      document.body.appendChild(customCursor);
      setA({ele: customCursor})
      document.onmousemove = mouseMoveHandler.bind(this, customCursor);
    }
    //console.log("HHH: " + document.body.getAttribute("isitembeingdragged"));


    /*if(document.body.getAttribute("isitembeingdragged") == "false") {
      customCursor = document.getElementById("VQBodyCustomCursor");
      customCursor.style.display = "inline-block";
      document.onmousemove = mouseMoveHandler;
      //console.log("NOPE");
    }*/
      //document.onmousemove = mouseMoveHandler;

    /*customCursor = document.createElement("div");
    customCursor.id = "VQBodyCustomCursor";

    svg = document.createElement("svg");
    svg.setAttribute("xmlns", "http://www.w3.org/2000/svg");
    svg.setAttribute("width", "16");
    svg.setAttribute("height", "16");
    svg.setAttribute("fill", "currentColor");
    svg.setAttribute("color", "red");
    svg.setAttribute("class", "bi bi-cursor-fill");
    svg.setAttribute("viewBox", "0 0 16 16");

    path = document.createElement("path");
    path.setAttribute("d", "M14.082 2.182a.5.5 0 0 1 .103.557L8.528 15.467a.5.5 0 0 1-.917-.007L5.57 10.694.803 8.652a.5.5 0 0 1-.006-.916l12.728-5.657a.5.5 0 0 1 .556.103z");

    customCursor.appendChild(svg);
    svg.appendChild(path);
    document.body.appendChild(customCursor);*/
  }

  function mouseLeaveHandler(event) {

    if(document.body.getAttribute("isitembeingdragged") == "false") {
      customCursor = document.getElementById("VQBodyCustomCursor");
      customCursor.remove();
      document.onmousemove = null;
    //  customCursor = document.getElementById("VQBodyCustomCursor");
    //  customCursor.style.display = "none";
    //  document.onmousemove = null;

    }
    /*customCursor = document.getElementById("VQBodyCustomCursor");
    customCursor.style.display = "none";
    document.onmousemove = null;
    customCursor = document.getElementById("VQBodyCustomCursor");
    svg = customCursor.childNodes[0];
    path = svg.childNodes[0];

    path.remove();
    svg.remove();
    customCursor.remove();*/
  }

  function mouseMoveHandler(event) {
    console.log("AASDSA::: " + a.ele);
    //event.preventDefault();
    let x = event.clientX - 0.5;
    let y = event.clientY - 6.5;
    //let customCursor = document.getElementById("VQBodyCustomCursor");
    //coordinates.innerHTML = "x: " + (parseInt(x.toString()) - destination.x) + "<br> &nbsp;y: " + (parseInt(y.toString()) - destination.y);
    //coordinates.style.fontSize = '80%';
    //coordinates.style.padding = '3px';

    //customCursor.style.left = x + 'px';
    //customCursor.style.top = y + 'px';
  }
/*<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cursor-fill" viewBox="0 0 16 16">
  <path d="M14.082 2.182a.5.5 0 0 1 .103.557L8.528 15.467a.5.5 0 0 1-.917-.007L5.57 10.694.803 8.652a.5.5 0 0 1-.006-.916l12.728-5.657a.5.5 0 0 1 .556.103z"/>
</svg>


<div id="VQBodyCustomCursor">
  <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24">
    <path d="m13.2 18.85-2.3-5.8-5.8-2.35-.05-.4L18.95 5 13.6 18.85Z"/>
  </svg>
</div>

*/
  return <WebBuilderProDataProvider>
      <div id="VQBody" onMouseEnter={mouseEnterHandler} onMouseLeave={mouseLeaveHandler} style={{zIndex: '-10', width: w}}>
        {
          dataContext.objectsInVQBody.map((item, i) => {
            return <Draggable objid={item.id} key={item.id} isselected={item.isSelected.toString()} onClick={componentUpdatedHandler} style={{backgroundColor: item.isSelected ? 'pink' : 'orange', border: '1px solid blue', opacity: '0.5', position: 'absolute', left: item.rect.x + 'px', top: item.rect.y + 'px', width: item.rect.width + 'px', height: item.rect.height + 'px'}} />
          })
        }
      </div>
    </WebBuilderProDataProvider>
}

export default VQBody;
