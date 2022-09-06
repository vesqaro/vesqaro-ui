let element, elementRect;
let mainHelper, topHelper, rightHelper, bottomHelper, leftHelper, topLeftHelper, topRightHelper, bottomLeftHelper, bottomRightHelper;
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

    if(mainHelper !== null && mainHelper !== undefined) {
      removeHelpers();
    }
    elementRect = element.getBoundingClientRect();

    mainHelper = element.cloneNode();//element.cloneNode();getBoundingClientRect
    topHelper = mainHelper.cloneNode();
    bottomHelper = mainHelper.cloneNode();
    leftHelper = mainHelper.cloneNode();
    rightHelper = mainHelper.cloneNode();
    topLeftHelper = mainHelper.cloneNode();
    topRightHelper = mainHelper.cloneNode();
    bottomLeftHelper = mainHelper.cloneNode();
    bottomRightHelper = mainHelper.cloneNode();

    mainHelper.appendChild(topHelper);
    mainHelper.appendChild(bottomHelper);
    mainHelper.appendChild(leftHelper);
    mainHelper.appendChild(rightHelper);
    mainHelper.appendChild(topLeftHelper);
    mainHelper.appendChild(topRightHelper);
    mainHelper.appendChild(bottomLeftHelper);
    mainHelper.appendChild(bottomRightHelper);

    document.getElementById("VQBody").appendChild(mainHelper);

    let mainHelperStyles = {backgroundColor: "green", opacity: 0.7, /*border: "1px solid #05a3ff",*/ position: "absolute"};//, left: elementRect.x + "px", top: elementRect.y + "px", width: elementRect.width + "px", height: elementRect.height + "px"};
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
            /*item.rect.y = vqObjY;
            item.rect.height = vqObjHeight;*/
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
            /*item.rect.x = vqObjX;
            item.rect.width = vqObjWidth;*/
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
            /*item.rect.width = vqObjWidth;
            item.rect.height = vqObjHeight;
            item.rect.x = vqObjX;
            item.rect.y = vqObjWidth;*/
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
      /*topHelperRect = topHelper.getBoundingClientRect();
      bottomHelperRect = bottomHelper.getBoundingClientRect();
      leftHelperRect = leftHelper.getBoundingClientRect();
      rightHelperRect = rightHelper.getBoundingClientRect();
      topLeftHelperRect = topLeftHelper.getBoundingClientRect();
      topRightHelperRect = topRightHelper.getBoundingClientRect();
      bottomLeftHelperRect = bottomLeftHelper.getBoundingClientRect();
      bottomRightHelperRect = bottomRightHelper.getBoundingClientRect();*/
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

      /*topHelper.style.left = mouseUpEvent.clientX - mouseDownEvent.clientX + "px";
      topHelper.style.top = mouseUpEvent.clientY - mouseDownEvent.clientY + "px";

      bottomHelper.style.left = mouseUpEvent.clientX - mouseDownEvent.clientX + "px";
      bottomHelper.style.top = mouseUpEvent.clientY - mouseDownEvent.clientY + "px";

      leftHelper.style.left = mouseUpEvent.clientX - mouseDownEvent.clientX + "px";
      leftHelper.style.top = mouseUpEvent.clientY - mouseDownEvent.clientY + "px";

      rightHelper.style.left = mouseUpEvent.clientX - mouseDownEvent.clientX + "px";
      rightHelper.style.top = mouseUpEvent.clientY - mouseDownEvent.clientY + "px";

      topLeftHelper.style.left = mouseUpEvent.clientX - mouseDownEvent.clientX + "px";
      topLeftHelper.style.top = mouseUpEvent.clientY - mouseDownEvent.clientY + "px";

      topRightHelper.style.left = mouseUpEvent.clientX - mouseDownEvent.clientX + "px";
      topRightHelper.style.top = mouseUpEvent.clientY - mouseDownEvent.clientY + "px";

      bottomLeftHelper.style.left = mouseUpEvent.clientX - mouseDownEvent.clientX + "px";
      bottomLeftHelper.style.top = mouseUpEvent.clientY - mouseDownEvent.clientY + "px";

      bottomRightHelper.style.left = mouseUpEvent.clientX - mouseDownEvent.clientX + "px";
      bottomRightHelper.style.top = mouseUpEvent.clientY - mouseDownEvent.clientY + "px";*/

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
          /*item.rect.x = itemX;
          item.rect.y = itemY;*/
          item.rect = mainHelper.getBoundingClientRect();
        }
      });
      setDataContext(dataContext);
      //setDataContext(dataContext);
    };
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
  topHelper.onmousedown = null;
  document.onkeydown = null;
  //*topHelper.mouseup = null;
  //document.onmousemove = null;
  topHelper.remove();
  bottomHelper.remove();
  leftHelper.remove();
  rightHelper.remove();
  topLeftHelper.remove();
  topRightHelper.remove();
  bottomLeftHelper.remove();
  bottomRightHelper.remove();
  mainHelper.remove();
}
