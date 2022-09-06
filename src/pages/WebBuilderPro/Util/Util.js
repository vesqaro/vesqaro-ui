let mainHelper, topHelper, rightHelper, bottomHelper, leftHelper, topLeftHelper, topRightHelper, bottomLeftHelper, bottomRightHelper;
let originalClientX = 0, originalClientY = 0;

export var util = {
  mouseEnterComponent: function(event, dataContext) {
    dataContext.objectsInVQBody.forEach(item => {
      if(item.objId === event.target.getAttribute("objid") && !item.isSelected) {
        item.isHoverActive = true;
        item.rect.border = "2px solid green";
      }

      else if(item.objId === event.target.getAttribute("objid") && item.isSelected) {
        item.isHoverActive = false;
        item.rect.border = "2px solid #05a3ff";
      }
    });
    return dataContext;
  },
  mouseLeaveComponent: function(event, dataContext) {
    dataContext.objectsInVQBody.forEach(item => {
      if(item.objId === event.target.getAttribute("objid") && !item.isSelected) {
        item.isHoverActive = false;
        item.rect.border = "2px solid white";
      }
    });
    return dataContext;
  },
  selectComponent: function(event, id, dataContext, setDataContext) {
    let element = document.getElementById(id);

    if(mainHelper !== null && mainHelper !== undefined) {
      removeHelpers();
    }
    const elementRect = element.getBoundingClientRect();
    mainHelper = document.createElement("div");//element.cloneNode();getBoundingClientRect
    mainHelper.style.position = "absolute";
    mainHelper.style.left = elementRect.x + "px";
    mainHelper.style.top = elementRect.y + "px";
    mainHelper.style.width = elementRect.width + "px";
    mainHelper.style.height = elementRect.height + "px";
    mainHelper.style.backgroundColor =  "blue";
    mainHelper.style.opacity = "0.2";


    //mainHelper.style.zIndex = "auto";
    dataContext.objectsInVQBody.forEach(item => {
      if(item.id === parseInt(id)) {
        item.isSelected = true;
        item.isHoverActive = false;
        item.rect.backgroundColor = "white";
        item.rect.border = "2px solid #05a3ff";
        dataContext.isBodySelected = false;

        topHelper = document.createElement("div");
        topHelper.style.cursor = "ns-resize";
        topHelper.style.backgroundColor = "red";
        topHelper.style.opacity = "0.1";
        topHelper.style.position = "absolute";
        topHelper.style.width = (item.rect.width - 5) + "px";
        topHelper.style.height = "15px";
        topHelper.style.left = (item.rect.x + 5) + "px";
        topHelper.style.top = (item.rect.y - 5) + "px";

        let vqObjX;
        let vqObjY;
        let vqObjWidth;
        let vqObjHeight;

        topHelper.onmousedown = (msdevent) => {
          const rect = msdevent.target.getBoundingClientRect();
          originalClientY = msdevent.clientY;

          document.onmousemove = (msmevent) => {
            let helperY = msmevent.clientY - originalClientY + rect.y;
            vqObjY = msmevent.clientY - originalClientY + item.rect.y;
            vqObjHeight = item.rect.height - (msmevent.clientY - originalClientY);
            msdevent.target.style.top = helperY + "px";
            element.style.top = vqObjY + "px";
            element.style.height = vqObjHeight + "px";
            mainHelper.style.top = vqObjY + "px";
            mainHelper.style.height = vqObjHeight + "px";
            leftHelper.style.height = (vqObjHeight - 5) + "px";
            leftHelper.style.top = (vqObjY + 5) + "px";
            rightHelper.style.height = (vqObjHeight - 5) + "px";
            rightHelper.style.top = (vqObjY + 5) + "px";
          };

          document.onmouseup = (event) => {
            item.rect.y = vqObjY;
            item.rect.height = vqObjHeight;
            setDataContext(dataContext);
            document.onmousemove = null;
            document.onmouseup = null;
          };
        };

        bottomHelper = topHelper.cloneNode(true);
        //console.log("HEIGHT: " + item.rect.height);
        bottomHelper.style.top = (item.rect.y - 5 + item.rect.height) + "px";
        bottomHelper.style.left = (item.rect.x + 5) + "px";

        bottomHelper.onmousedown = (msdevent) => {
          const rect = msdevent.target.getBoundingClientRect();
          originalClientY = msdevent.clientY;

          document.onmousemove = (msmevent) => {
            let helperY = msmevent.clientY - originalClientY + rect.y;
            vqObjHeight = item.rect.height + (msmevent.clientY - originalClientY);
            msdevent.target.style.top = helperY + "px";
            element.style.height = vqObjHeight + "px";
            mainHelper.style.height = vqObjHeight + "px";
            leftHelper.style.height = (vqObjHeight - 5) + "px";
            rightHelper.style.height = (vqObjHeight - 5) + "px";
          };

          document.onmouseup = (event) => {
            //item.rect.y = vqObjY;
            item.rect.height = vqObjHeight;
            setDataContext(dataContext);
            document.onmousemove = null;
            document.onmouseup = null;
          };
        };

        leftHelper = topHelper.cloneNode(true);
        leftHelper.style.cursor = "ew-resize";
        leftHelper.style.position = "absolute";
        leftHelper.style.width = "15px";
        //console.log("ITEM HEIGHT: " + item.rect.height);
        leftHelper.style.height = (item.rect.height - 5) + "px";
        leftHelper.style.left = (item.rect.x - 5) + "px";
        leftHelper.style.top = (item.rect.y + 5) + "px";

        leftHelper.onmousedown = (msdevent) => {
          const rect = msdevent.target.getBoundingClientRect();
          originalClientX = msdevent.clientX;

          document.onmousemove = (msmevent) => {
            let helperX = msmevent.clientX - originalClientX + rect.x;
            vqObjX = msmevent.clientX - originalClientX + item.rect.x;
            vqObjWidth = item.rect.width - (msmevent.clientX - originalClientX);
            msdevent.target.style.left = helperX + "px";
            element.style.left = vqObjX + "px";
            element.style.width = vqObjWidth + "px";
            mainHelper.style.left = vqObjX + "px";
            mainHelper.style.width = vqObjWidth + "px";
            topHelper.style.width = (vqObjWidth - 5) + "px";
            topHelper.style.left = (vqObjX + 5) + "px";
            bottomHelper.style.width = (vqObjWidth - 5) + "px";
            bottomHelper.style.left = (vqObjX + 5) + "px";
          };

          document.onmouseup = (event) => {
            item.rect.x = vqObjX;
            item.rect.width = vqObjWidth;
            setDataContext(dataContext);
            document.onmousemove = null;
            document.onmouseup = null;
          };
        };

        rightHelper = leftHelper.cloneNode(true);
        rightHelper.style.cursor = "ew-resize";
        rightHelper.style.position = "absolute";
        rightHelper.style.width = "15px";
        rightHelper.style.height = (item.rect.height - 5) + "px";
        rightHelper.style.left = (item.rect.x + item.rect.width - 5) + "px";
        rightHelper.style.top = (item.rect.y + 5) + "px";

        rightHelper.onmousedown = (msdevent) => {
          const rect = msdevent.target.getBoundingClientRect();
          originalClientX = msdevent.clientX;

          document.onmousemove = (msmevent) => {
            let helperX = msmevent.clientX - originalClientX + rect.x;
            vqObjWidth = item.rect.width + (msmevent.clientX - originalClientX);
            msdevent.target.style.left = helperX + "px";
            element.style.width = vqObjWidth + "px";
            mainHelper.style.width = vqObjWidth + "px";
            topHelper.style.width = (vqObjWidth - 5) + "px";
            bottomHelper.style.width = (vqObjWidth - 5) + "px";
          };

          document.onmouseup = (event) => {
            item.rect.width = vqObjWidth;
            setDataContext(dataContext);
            document.onmousemove = null;
            document.onmouseup = null;
          };
        };

        topLeftHelper = document.createElement("div");
        //topLeftHelper.setAttribute("draggable", "true");
        topLeftHelper.style.cursor = "nwse-resize";
        topLeftHelper.style.position = "absolute";
        topLeftHelper.style.backgroundColor = "white";
        topLeftHelper.style.width = "7px";
        topLeftHelper.style.height = "7px";
        topLeftHelper.style.border = "1px solid #05a3ff";
        topLeftHelper.style.left = (item.rect.x - 3) + "px";
        topLeftHelper.style.top = (item.rect.y - 4) + "px";

        topRightHelper = topLeftHelper.cloneNode(true);
        topRightHelper.style.cursor = "nesw-resize";
        topRightHelper.style.left = (item.rect.x + item.rect.width - 2) + "px";
        topRightHelper.style.top = (item.rect.y - 4) + "px";

        bottomLeftHelper = topLeftHelper.cloneNode(true);
        bottomLeftHelper.style.cursor = "nesw-resize";
        bottomLeftHelper.style.left = (item.rect.x - 3) + "px";
        bottomLeftHelper.style.top = (item.rect.y + item.rect.height - 2) + "px";

        bottomRightHelper = topLeftHelper.cloneNode(true);
        bottomRightHelper.style.left = (item.rect.x + item.rect.width - 2) + "px";
        bottomRightHelper.style.top = (item.rect.y + item.rect.height - 2) + "px";

        document.body.appendChild(mainHelper);
        document.body.appendChild(topHelper);
        document.body.appendChild(rightHelper);
        document.body.appendChild(bottomHelper);
        document.body.appendChild(leftHelper);
        document.body.appendChild(topLeftHelper);
        document.body.appendChild(topRightHelper);
        document.body.appendChild(bottomLeftHelper);
        document.body.appendChild(bottomRightHelper);
      }

      else {
        item.isSelected = false;
        item.rect.backgroundColor = "transparent";
        item.rect.border = "2px solid white";
      }
    });
    //helper.innerHTML = "AHMADDD";
    //document.body.appendChild(helper);
    //console.log("AHMADDD");
    return dataContext;
  },
  unselectComponent: function(event, dataContext) {
    const objId = event.target.getAttribute("objid");
    if(topHelper !== null && topHelper !== undefined) {
      removeHelpers();
    }
    dataContext.objectsInVQBody.forEach(item => {
      if(item.objId === objId) {
        item.isSelected = false;
        item.isHoverActive = true;
        item.rect.backgroundColor = "transparent";
        item.rect.border = "2px solid green";
        dataContext.isBodySelected = true;
      }
      else {
        item.isSelected = false;
        item.isHoverActive = false;
        item.rect.backgroundColor = "transparent";
        item.rect.border = "2px solid white";
        dataContext.isBodySelected = true;
      }
    });
    return dataContext;
  },
  selectAllComponents: function(dataContext) {
    dataContext.objectsInVQBody.forEach(item => {
      item.isSelected = true;
      item.isHoverActive = false;
      item.rect.backgroundColor = "white";
      item.rect.border = "2px solid #05a3ff";
    });
    dataContext.isBodySelected = false;
    return dataContext;
  },
  unselectAllComponents: function(dataContext) {
    dataContext.objectsInVQBody.forEach(item => {
      item.isSelected = false;
      item.isHoverActive = false;
      item.rect.backgroundColor = "transparent";
      item.rect.border = "2px solid white";
    });
    dataContext.isBodySelected = true;
    return dataContext;
  },
  componentSelectionToggle: function(event, dataContext) {
    //console.log("@#@#ASFAHMA@121#@: " + JSON.stringify(event.target.getAttributeNames()));
    dataContext.objectsInVQBody.forEach(item => {
      if(item.objId === event.target.getAttribute("objid")) {
        if(item.isSelected) {
          item.isSelected = false;
          item.isHoverActive = true;
          item.rect.backgroundColor = "transparent";
          item.rect.border = "2px solid white";
          dataContext.isBodySelected = true;
          //this.setZIndexToTop.call(this, event, this.state.defaultZIndex);
        }

        else {
          item.isSelected = true;
          item.isHoverActive = false;
          item.rect.backgroundColor = "white";
          item.rect.border = "2px solid #05a3ff";
          dataContext.isBodySelected = false;
          //this.setZIndexToTop.call(this, event, 9999999999);
        }
      }

      else {
        item.isSelected = false;
        item.rect.backgroundColor = "transparent";
        item.rect.border = "2px solid white";
      }
    });
    return dataContext;
  }
}

function removeHelpers() {
  topHelper.onmousedown = null;
  //*topHelper.mouseup = null;
  //document.onmousemove = null;
  topHelper.remove();
  rightHelper.remove();
  bottomHelper.remove();
  leftHelper.remove();
  topLeftHelper.remove();
  topRightHelper.remove();
  bottomLeftHelper.remove();
  bottomRightHelper.remove();
  mainHelper.remove();
}

/*class Util {
  constructor() {
    this.myFunc = this.myFunc(this);
  }


}
export function myFunc(event, dataContext) {
  console.log("PUIDFHWERE$#$112323: " + event);
  dataContext.objectsInVQBody.forEach(item => {
    if(item.objId === event.target.getAttribute("objid")) {
      if(item.isSelected) {
        item.isSelected = false;
        item.isHoverActive = true;
        dataContext.isBodySelected = true;
        //this.setZIndexToTop.call(this, event, this.state.defaultZIndex);
      }

      else {
        item.isSelected = true;
        item.isHoverActive = false;
        dataContext.isBodySelected = false;
        //this.setZIndexToTop.call(this, event, 9999999999);
      }
    }

    else
      item.isSelected = false;
  });
  return dataContext;
}
export function myFunc(){
  return this.state.name; //define it according to your needs
}*/
