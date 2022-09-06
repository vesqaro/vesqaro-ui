let topRow, middleRow, bottomRow;
let outerMiddleHelper, outerTopHelper, outerBottomHelper, outerLeftHelper, outerRightHelper, outerTopLeftHelper, outerTopRightHelper, outerBottomLeftHelper, outerBottomRightHelper;
let innerTopHelper, innerBottomHelper, innerLeftHelper, innerRightHelper, innerTopLeftHelper, innerTopRightHelper, innerBottomLeftHelper, innerBottomRightHelper;
let innerContainer;


let mainHelper;
let nwRotatorHelper, neRotatorHelper, swRotatorHelper, seRotatorHelper;
let nResizerHelper, sResizerHelper, wResizerHelper, eResizerHelper;
let nwResizerHelper, neResizerHelper, swResizerHelper, seResizerHelper;

let element, elementRect;
let originalClientX = 0, originalClientY = 0;
let topHelperRect, bottomHelperRect, leftHelperRect, rightHelperRect, topLeftHelperRect, topRightHelperRect, bottomLeftHelperRect, bottomRightHelperRect;
let mouseDownEvent;
let vqObjX, vqObjY, vqObjWidth, vqObjHeight;
let itemX, itemY;
let customCursor = customCursor = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="32" width="32"><path fill="rgb(189, 172, 177)" d="M.5,1.08L20.5,17.94l-10.03-.02,4.3,9.33-3.63,1.67-4.3-9.34L.61,27.47,.5,1.08Z"/></svg>'
customCursor = "url('" + customCursor + "'), default";
//let objInVQBody;

export var componentSelection = {
  select: function(event, id, objId, dataContext, setDataContext) {
    mouseDownEvent = event;
    //console.log("DFDFD@@!@");
    //document.onmousemove
    unselectHandler(objId);
    element = document.getElementById(id);
    console.log("OF LEFT: " + document.getElementById("VQBody").scrollLeft);

    if(mainHelper !== null && mainHelper !== undefined) {
      removeHelpers();
    }
    elementRect = element.getBoundingClientRect();

    mainHelper = element.cloneNode();//element.cloneNode();getBoundingClientRect
    mainHelper.id = "VQObjMainHelper";
    mainHelper.className = "vqObjHelper mainVQObjHelper";
    mainHelper.style.position = "absolute";
    mainHelper.style.opacity = "0.5";
    /*mainHelper.style.width = elementRect.width + "px";
    mainHelper.style.height = elementRect.height + "px";
    mainHelper.style.left = (elementRect.x - 221 + document.getElementById("VQBody").scrollLeft) + "px";
    mainHelper.style.top = (elementRect.y - 52 + document.getElementById("VQBody").scrollTop) + "px";
    mainHelper.style.opacity = "0.5";
    mainHelper.style.transform = "scale(1200%)"*/

    document.getElementById("VQBody").appendChild(mainHelper);
    ////mainHelper.style.border = "5px solid black";

    //topRow = document.createElement("div");
    //topRow.style.display = "flex";
    //topRow.style.width = "100%";
    //topRow.style.height = "20px";

    //middleRow = document.createElement("div");
    //middleRow.style.display = "flex";
    //middleRow = topRow.cloneNode(true);
    //middleRow.style.width = "100%";
    //middleRow.style.height = elementRect.height + "px";

    //bottomRow = document.createElement("div");
    //bottomRow.style.display = "flex";
    //bottomRow.style.width = "100%";
    //bottomRow.style.height = "20px";

    /*outerTopLeftHelper = document.createElement("div");
    outerTopLeftHelper.style.flexBasis = "20px";
    outerTopLeftHelper.style.height = "100%";
    outerTopLeftHelper.style.backgroundColor = "white";
    outerTopLeftHelper.style.opacity = "0.5";

    outerTopHelper = document.createElement("div");
    //outerTopHelper.style.flexBasis = "auto";
    outerTopHelper.style.flexGrow = "1";
    outerTopHelper.style.height = "100%";
    outerTopHelper.style.backgroundColor = "blue";
    outerTopHelper.style.opacity = "0.5";

    outerTopRightHelper = document.createElement("div");
    outerTopRightHelper.style.flexGrow = "unset";
    outerTopRightHelper.style.width = "20px";
    outerTopRightHelper.style.height = "100%";
    outerTopRightHelper.style.backgroundColor = "white";
    outerTopRightHelper.style.opacity = "0.5";

    outerLeftHelper = document.createElement("div");
    outerLeftHelper.style.flexBasis = "20px";
    outerLeftHelper.style.height = "100%";
    outerLeftHelper.style.backgroundColor = "blue";
    outerLeftHelper.style.opacity = "0.5";

    outerMiddleHelper = document.createElement("div");
    outerMiddleHelper.style.flexGrow = "1";
    outerMiddleHelper.style.height = "100%";
    outerMiddleHelper.style.backgroundColor = "blue";
    outerMiddleHelper.style.opacity = "0.5";

    outerRightHelper = document.createElement("div");
    outerRightHelper.style.flexGrow = "unset";
    outerRightHelper.style.width = "20px";
    outerRightHelper.style.height = "100%";
    outerRightHelper.style.backgroundColor = "blue";
    outerRightHelper.style.opacity = "0.5";

    topRow.appendChild(outerTopLeftHelper);
    topRow.appendChild(outerTopHelper);
    topRow.appendChild(outerTopRightHelper);

    middleRow = topRow.cloneNode(true);
    middleRow.style.width = "100%";
    middleRow.style.height = elementRect.height + "px";

    bottomRow = topRow.cloneNode(true);

    //middleRow.appendChild(outerLeftHelper);
    //middleRow.appendChild(outerMiddleHelper);
    //middleRow.appendChild(outerRightHelper);

    mainHelper.appendChild(topRow);
    mainHelper.appendChild(middleRow);
    mainHelper.appendChild(bottomRow);

    let innerMainHelper = mainHelper.cloneNode(true);
    //innerMainHelper.style.position = "absolute";

    //middleRow.childNodes[1].appendChild(innerMainHelper);
    document.getElementById("VQBody").appendChild(innerMainHelper);*/

    /*outerBottomHelper = outerTopHelper.cloneNode();
    outerRightHelper = outerTopHelper.cloneNode();

    outerBottomLeftHelper = outerTopHelper.cloneNode();
    outerBottomRightHelper = outerTopHelper.cloneNode();

    innerTopHelper = outerTopHelper.cloneNode();
    innerBottomHelper = outerTopHelper.cloneNode();
    innerLeftHelper = outerTopHelper.cloneNode();
    innerRightHelper = outerTopHelper.cloneNode();
    innerTopLeftHelper = outerTopHelper.cloneNode();
    innerTopRightHelper = outerTopHelper.cloneNode();
    innerBottomLeftHelper = outerTopHelper.cloneNode();
    innerBottomRightHelper = outerTopHelper.cloneNode();

    mainHelper.appendChild(outerTopHelper);
    mainHelper.appendChild(outerBottomHelper);
    mainHelper.appendChild(outerLeftHelper);
    mainHelper.appendChild(outerRightHelper);
    mainHelper.appendChild(outerTopLeftHelper);
    mainHelper.appendChild(outerTopRightHelper);
    mainHelper.appendChild(outerBottomLeftHelper);
    mainHelper.appendChild(outerBottomRightHelper);

    mainHelper.appendChild(innerTopHelper);
    mainHelper.appendChild(innerBottomHelper);
    mainHelper.appendChild(innerLeftHelper);
    mainHelper.appendChild(innerRightHelper);
    mainHelper.appendChild(innerTopLeftHelper);
    mainHelper.appendChild(innerTopRightHelper);
    mainHelper.appendChild(innerBottomLeftHelper);
    mainHelper.appendChild(innerBottomRightHelper);
*/

/*
    let mainHelperStyles = {backgroundColor: "green", opacity: 0.7, position: "absolute"};//, left: elementRect.x + "px", top: elementRect.y + "px", width: elementRect.width + "px", height: elementRect.height + "px"};
    let topHelperStyles = {backgroundColor: "blue", cursor: "ns-resize", display: "inline-block", position: "relative", width: elementRect.width + "px", height: " 15px", opacity: "0.3"};
    let leftHelperStyles = {backgroundColor: "blue", cursor: "ew-resize", display: "inline-block", position: "relative", width: "15px", height: elementRect.height + "px", opacity: "0.3"};
    let topLeftHelperStyles = {backgroundColor: "white", border: "1px solid #05a3ff", cursor: "nwse-resize", display: "inline-block", position: "relative", width: "7px", height: "7px"};

    for(const property in mainHelperStyles)
        mainHelper.style[property] = mainHelperStyles[property];

    for(const property in topHelperStyles) {
      topHelper.style[property] = topHelperStyles[property];
      bottomHelper.style[property] = topHelperStyles[property];
    }

    //bottomHelper.style.top = elementRect.height + "px";

    for(const property in leftHelperStyles) {
      leftHelper.style[property] = leftHelperStyles[property];
      rightHelper.style[property] = leftHelperStyles[property];
    }

    //rightHelper.style.left = (elementRect.width - 8) + "px";

    for(const property in topLeftHelperStyles) {
      topLeftHelper.style[property] = topLeftHelperStyles[property];
      topRightHelper.style[property] = topLeftHelperStyles[property];
      bottomLeftHelper.style[property] = topLeftHelperStyles[property];
      bottomRightHelper.style[property] = topLeftHelperStyles[property];
    }

    topRightHelper.style.cursor = "nesw-resize";
    //topRightHelper.style.left = (elementRect.width - 3) + "px";

    bottomLeftHelper.style.cursor = "nesw-resize";
    //bottomLeftHelper.style.left = (elementRect.x - 4) + "px";
    //bottomLeftHelper.style.top = (elementRect.y + elementRect.height - 3) + "px";

    //bottomRightHelper.style.left = (elementRect.x + elementRect.width - 3) + "px";
    //bottomRightHelper.style.top = (elementRect.y + elementRect.height - 3) + "px";

    mainHelper.className = "vqObjHelper mainVQObjHelper";
    topHelper.className = "vqObjHelper";
    bottomHelper.className = "vqObjHelper";
    leftHelper.className = "vqObjHelper";
    rightHelper.className = "vqObjHelper";
    topLeftHelper.className = "vqObjHelper";
    topRightHelper.className = "vqObjHelper";
    bottomLeftHelper.className = "vqObjHelper";
    bottomRightHelper.className = "vqObjHelper";

    dragHandler(event);

    mainHelper.onmousedown = (msdevent) => {
      //console.log("CLSS: " + JSON.stringify(msdevent.target.classList ));
      if(msdevent.target.classList.contains("mainVQObjHelper"))
        dragHandler(msdevent);
    };

    topHelper.onmousedown = (msdevent) => {
      elementRect = element.getBoundingClientRect();
      originalClientY = msdevent.clientY;

      document.onmousemove = (msmevent) => {
        vqObjY = (msmevent.clientY - originalClientY) + elementRect.y;
        vqObjHeight = elementRect.height - (msmevent.clientY - originalClientY);
        mainHelper.style.top = vqObjY + "px";
        topHelper.style.top = (vqObjY - 8) + "px";
        element.style.top = vqObjY + "px";
        leftHelper.style.top = vqObjY + "px";
        rightHelper.style.top = vqObjY + "px";
        element.style.height = vqObjHeight + "px";
        mainHelper.style.height = vqObjHeight + "px";
        leftHelper.style.height = vqObjHeight + "px";
        rightHelper.style.height = vqObjHeight + "px";
        topLeftHelper.style.top = (vqObjY - 3) + "px";
        topRightHelper.style.top = (vqObjY - 3) + "px";
      };

      document.onmouseup = (event) => {
        dataContext.objectsInVQBody.forEach(item => {
          if(item.id === id) {
            item.rect = mainHelper.getBoundingClientRect();
          }
        });
        setDataContext(dataContext);
        document.onmousemove = null;
        document.onmouseup = null;
      };
    };

    /////////////////////////////////////

    bottomHelper.onmousedown = (msdevent) => {
      elementRect = element.getBoundingClientRect();
      originalClientY = msdevent.clientY;

      document.onmousemove = (msmevent) => {
        let helperY = originalClientY - msmevent.clientY + elementRect.y;
        bottomHelper.style.top = elementRect.y - 8 + elementRect.height + (msmevent.clientY - originalClientY) + "px";
        vqObjHeight = elementRect.height + (msmevent.clientY - originalClientY);
        element.style.height = vqObjHeight + "px";
        mainHelper.style.height = vqObjHeight + "px";
        leftHelper.style.height = vqObjHeight + "px";
        rightHelper.style.height = vqObjHeight + "px";
        bottomLeftHelper.style.top = (elementRect.y + elementRect.height + msmevent.clientY - originalClientY - 3) + "px";
        bottomRightHelper.style.top = (elementRect.y + elementRect.height + msmevent.clientY - originalClientY - 3) + "px";
      };

      document.onmouseup = (event) => {
        dataContext.objectsInVQBody.forEach(item => {
          if(item.id === id) {
            //item.rect.height = vqObjHeight;
            item.rect = mainHelper.getBoundingClientRect();
          }
        });
        setDataContext(dataContext);
        document.onmousemove = null;
        document.onmouseup = null;
      };
    };

    //////////////////////////////////////////

    leftHelper.onmousedown = (msdevent) => {
      elementRect = element.getBoundingClientRect();
      originalClientX = msdevent.clientX;

      document.onmousemove = (msmevent) => {
        vqObjX = (msmevent.clientX - originalClientX) + elementRect.x;
        vqObjWidth = elementRect.width - (msmevent.clientX - originalClientX);
        leftHelper.style.left = (vqObjX - 8) + "px";
        element.style.left = vqObjX + "px";
        mainHelper.style.left = vqObjX + "px";
        topHelper.style.left = vqObjX + "px";
        bottomHelper.style.left = vqObjX + "px"
        element.style.width = vqObjWidth + "px";
        mainHelper.style.width = vqObjWidth + "px";
        topHelper.style.width = vqObjWidth + "px";
        bottomHelper.style.width = vqObjWidth + "px";
        topLeftHelper.style.left = (vqObjX - 3) + "px";
        bottomLeftHelper.style.left = (vqObjX - 3) + "px";
      };

      document.onmouseup = (event) => {
        dataContext.objectsInVQBody.forEach(item => {
          if(item.id === id) {
            item.rect = mainHelper.getBoundingClientRect();
          }
        });
        setDataContext(dataContext);
        document.onmousemove = null;
        document.onmouseup = null;
      };
    };

    //////////////////////////////////////////

    rightHelper.onmousedown = (msdevent) => {
      elementRect = element.getBoundingClientRect();
      originalClientX = msdevent.clientX;

      document.onmousemove = (msmevent) => {
        let helperX = (msmevent.clientX - originalClientX) + elementRect.x + elementRect.width;
        rightHelper.style.left = (helperX - 8) + "px";
        vqObjWidth = (msmevent.clientX - originalClientX) + elementRect.width;
        element.style.width = vqObjWidth + "px";
        mainHelper.style.width = vqObjWidth + "px";
        topHelper.style.width = vqObjWidth + "px";
        bottomHelper.style.width = vqObjWidth + "px";
        topRightHelper.style.left = (elementRect.x + vqObjWidth - 3) + "px";
        bottomRightHelper.style.left = (elementRect.x + vqObjWidth - 3) + "px";
      };

      document.onmouseup = (event) => {
        dataContext.objectsInVQBody.forEach(item => {
          if(item.id === id) {
            //item.rect.width = vqObjWidth;
            item.rect = mainHelper.getBoundingClientRect();
          }
        });
        setDataContext(dataContext);
        document.onmousemove = null;
        document.onmouseup = null;
      };
    };

    //////////////////////////////////////////

    topLeftHelper.onmousedown = (msdevent) => {
      elementRect = element.getBoundingClientRect();
      originalClientX = msdevent.clientX;
      originalClientY = msdevent.clientY;

      document.onmousemove = (msmevent) => {
        vqObjX = (msmevent.clientX - originalClientX) + elementRect.x;
        vqObjWidth = elementRect.width - (msmevent.clientX - originalClientX);
        leftHelper.style.left = (vqObjX - 8) + "px";
        element.style.left = vqObjX + "px";
        mainHelper.style.left = vqObjX + "px";
        topHelper.style.left = vqObjX + "px";
        bottomHelper.style.left = vqObjX + "px"
        element.style.width = vqObjWidth + "px";
        mainHelper.style.width = vqObjWidth + "px";
        topHelper.style.width = vqObjWidth + "px";
        bottomHelper.style.width = vqObjWidth + "px";
        topLeftHelper.style.left = (vqObjX - 3) + "px";
        bottomLeftHelper.style.left = (vqObjX - 3) + "px";

        vqObjY = (msmevent.clientY - originalClientY) + elementRect.y;
        vqObjHeight = elementRect.height - (msmevent.clientY - originalClientY);
        mainHelper.style.top = vqObjY + "px";
        topHelper.style.top = (vqObjY - 8) + "px";
        element.style.top = vqObjY + "px";
        leftHelper.style.top = vqObjY + "px";
        rightHelper.style.top = vqObjY + "px";
        element.style.height = vqObjHeight + "px";
        mainHelper.style.height = vqObjHeight + "px";
        leftHelper.style.height = vqObjHeight + "px";
        rightHelper.style.height = vqObjHeight + "px";
        topLeftHelper.style.top = (vqObjY - 3) + "px";
        topRightHelper.style.top = (vqObjY - 3) + "px";
      };

      document.onmouseup = (event) => {
        dataContext.objectsInVQBody.forEach(item => {
          if(item.id === id) {
            item.rect = mainHelper.getBoundingClientRect();
          }
        });
        setDataContext(dataContext);
        document.onmousemove = null;
        document.onmouseup = null;
      };
    };

    ////////////////////////////////////////////

    topRightHelper.onmousedown = (msdevent) => {
      elementRect = element.getBoundingClientRect();
      originalClientX = msdevent.clientX;
      originalClientY = msdevent.clientY;

      document.onmousemove = (msmevent) => {
        let helperX = (msmevent.clientX - originalClientX) + elementRect.x + elementRect.width;
        rightHelper.style.left = (helperX - 8) + "px";
        vqObjWidth = (msmevent.clientX - originalClientX) + elementRect.width;
        element.style.width = vqObjWidth + "px";
        mainHelper.style.width = vqObjWidth + "px";
        topHelper.style.width = vqObjWidth + "px";
        bottomHelper.style.width = vqObjWidth + "px";
        topRightHelper.style.left = (elementRect.x + vqObjWidth - 3) + "px";
        bottomRightHelper.style.left = (elementRect.x + vqObjWidth - 3) + "px";

        vqObjY = (msmevent.clientY - originalClientY) + elementRect.y;
        vqObjHeight = elementRect.height - (msmevent.clientY - originalClientY);
        mainHelper.style.top = vqObjY + "px";
        topHelper.style.top = (vqObjY - 8) + "px";
        element.style.top = vqObjY + "px";
        leftHelper.style.top = vqObjY + "px";
        rightHelper.style.top = vqObjY + "px";
        element.style.height = vqObjHeight + "px";
        mainHelper.style.height = vqObjHeight + "px";
        leftHelper.style.height = vqObjHeight + "px";
        rightHelper.style.height = vqObjHeight + "px";
        topLeftHelper.style.top = (vqObjY - 3) + "px";
        topRightHelper.style.top = (vqObjY - 3) + "px";
      };

      document.onmouseup = (event) => {
        dataContext.objectsInVQBody.forEach(item => {
          if(item.id === id) {
            item.rect = mainHelper.getBoundingClientRect();
          }
        });
        setDataContext(dataContext);
        document.onmousemove = null;
        document.onmouseup = null;
      };
    };

    //////////////////////////////////////////

    bottomLeftHelper.onmousedown = (msdevent) => {
      elementRect = element.getBoundingClientRect();
      originalClientX = msdevent.clientX;
      originalClientY = msdevent.clientY;

      document.onmousemove = (msmevent) => {
        vqObjX = (msmevent.clientX - originalClientX) + elementRect.x;
        vqObjWidth = elementRect.width - (msmevent.clientX - originalClientX);
        leftHelper.style.left = (vqObjX - 8) + "px";
        element.style.left = vqObjX + "px";
        mainHelper.style.left = vqObjX + "px";
        topHelper.style.left = vqObjX + "px";
        bottomHelper.style.left = vqObjX + "px"
        element.style.width = vqObjWidth + "px";
        mainHelper.style.width = vqObjWidth + "px";
        topHelper.style.width = vqObjWidth + "px";
        bottomHelper.style.width = vqObjWidth + "px";
        topLeftHelper.style.left = (vqObjX - 3) + "px";
        bottomLeftHelper.style.left = (vqObjX - 3) + "px";

        let helperY = originalClientY - msmevent.clientY + elementRect.y;
        bottomHelper.style.top = elementRect.y - 8 + elementRect.height + (msmevent.clientY - originalClientY) + "px";
        vqObjHeight = elementRect.height + (msmevent.clientY - originalClientY);
        element.style.height = vqObjHeight + "px";
        mainHelper.style.height = vqObjHeight + "px";
        leftHelper.style.height = vqObjHeight + "px";
        rightHelper.style.height = vqObjHeight + "px";
        bottomLeftHelper.style.top = (elementRect.y + elementRect.height + msmevent.clientY - originalClientY - 3) + "px";
        bottomRightHelper.style.top = (elementRect.y + elementRect.height + msmevent.clientY - originalClientY - 3) + "px";
      };

      document.onmouseup = (event) => {
        dataContext.objectsInVQBody.forEach(item => {
          if(item.id === id) {
            //item.rect.width = vqObjWidth;
            item.rect = mainHelper.getBoundingClientRect();
          }
        });
        setDataContext(dataContext);
        document.onmousemove = null;
        document.onmouseup = null;
      };
    };

    ////////////////////////////////////////////

    bottomRightHelper.onmousedown = (msdevent) => {
      elementRect = element.getBoundingClientRect();
      originalClientX = msdevent.clientX;
      originalClientY = msdevent.clientY;

      document.onmousemove = (msmevent) => {
        let helperX = (msmevent.clientX - originalClientX) + elementRect.x + elementRect.width;
        rightHelper.style.left = (helperX - 8) + "px";
        vqObjWidth = (msmevent.clientX - originalClientX) + elementRect.width;
        element.style.width = vqObjWidth + "px";
        mainHelper.style.width = vqObjWidth + "px";
        topHelper.style.width = vqObjWidth + "px";
        bottomHelper.style.width = vqObjWidth + "px";
        topRightHelper.style.left = (elementRect.x + vqObjWidth - 3) + "px";
        bottomRightHelper.style.left = (elementRect.x + vqObjWidth - 3) + "px";

        let helperY = originalClientY - msmevent.clientY + elementRect.y;
        bottomHelper.style.top = elementRect.y - 8 + elementRect.height + (msmevent.clientY - originalClientY) + "px";
        vqObjHeight = elementRect.height + (msmevent.clientY - originalClientY);
        element.style.height = vqObjHeight + "px";
        mainHelper.style.height = vqObjHeight + "px";
        leftHelper.style.height = vqObjHeight + "px";
        rightHelper.style.height = vqObjHeight + "px";
        bottomLeftHelper.style.top = (elementRect.y + elementRect.height + msmevent.clientY - originalClientY - 3) + "px";
        bottomRightHelper.style.top = (elementRect.y + elementRect.height + msmevent.clientY - originalClientY - 3) + "px";
      };

      document.onmouseup = (event) => {
        dataContext.objectsInVQBody.forEach(item => {
          if(item.id === id) {
            //item.rect.width = vqObjWidth;
            item.rect = mainHelper.getBoundingClientRect();
          }
        });
        setDataContext(dataContext);
        document.onmousemove = null;
        document.onmouseup = null;
      };
    };

      //console.log("DFDFD"); };
    //let itemX, itemY;
    function dragHandler(msdevent) {
      elementRect = element.getBoundingClientRect();
      mouseDownEvent = msdevent;
      window.onmousemove = winMouseMoveHandler;
      window.onmouseup = winMouseUpHandler;
    };

    function winMouseMoveHandler(winMouseMoveEvent) {
      mainHelper.style.cursor = "grabbing";
      itemX = winMouseMoveEvent.clientX - mouseDownEvent.clientX + elementRect.x;
      itemY = winMouseMoveEvent.clientY - mouseDownEvent.clientY + elementRect.y;
      element.style.left = itemX + "px";
      element.style.top = itemY + "px";

      mainHelper.style.left = itemX + "px";
      mainHelper.style.top = itemY + "px";

      topHelper.style.display = "none";
      bottomHelper.style.display = "none";
      leftHelper.style.display = "none";
      rightHelper.style.display = "none";

      topLeftHelper.style.display = "none";
      topRightHelper.style.display = "none";
      bottomLeftHelper.style.display = "none";
      bottomRightHelper.style.display = "none";
    };

    function winMouseUpHandler (mouseUpEvent) {
      //console.log("UP HERE::: " + mouseUpEvent.target.getAttributeNames());
      mainHelper.style.cursor = customCursor;
      window.onmousemove = null;
      window.onmouseup = null;

      topHelper.style.display = "inline-block";
      bottomHelper.style.display = "inline-block";
      leftHelper.style.display = "inline-block";
      rightHelper.style.display = "inline-block";

      topLeftHelper.style.display = "inline-block";
      topRightHelper.style.display = "inline-block";
      bottomLeftHelper.style.display = "inline-block";
      bottomRightHelper.style.display = "inline-block";

      dataContext.objectsInVQBody.forEach(item => {
        if(item.id === id) {
          item.rect = mainHelper.getBoundingClientRect();
        }
      });
      setDataContext(dataContext);
      //setDataContext(dataContext);
    };*/
  }
}

function unselectHandler(objId) {
  setTimeout(() => {
    document.onmousedown = (docClickEvent) => {
      //console.log("ATTRS:" + docClickEvent.target.id);
      //docClickEvent.preventDefault();
      //console.log("ATTRS:: " + JSON.stringify(docClickEvent.target.classList.contains("vqObjHelper")));
      if(docClickEvent.target.id == "VQBody") {
        removeHelpers();
        document.onmousedown = null;
        document.onkeydown = null;
        let objInVQBody = document.getElementById("ObjTree").getElementsByClassName(objId)[0];
        objInVQBody.style.border = "1px solid transparent";
      }
    };
    document.onkeydown = (docKeyDownEvent) => {
      //console.log("KEY:: " + docKeyDownEvent.keyCode);
      if(docKeyDownEvent.keyCode === 27) {
        removeHelpers();
        document.onkeydown = null;
        document.onmousedown = null;
        let objInVQBody = document.getElementById("ObjTree").getElementsByClassName(objId)[0];
        objInVQBody.style.border = "0px solid transparent";
      }
    };
  }, 100);
}

function removeHelpers() {
  //topHelper.onmousedown = null;
  document.onkeydown = null;
  //topHelper.mouseup = null;
  //document.onmousemove = null;
  /*topHelper.remove();
  bottomHelper.remove();
  leftHelper.remove();
  rightHelper.remove();
  topLeftHelper.remove();
  topRightHelper.remove();
  bottomLeftHelper.remove();
  bottomRightHelper.remove();*/
  mainHelper.remove();
}
