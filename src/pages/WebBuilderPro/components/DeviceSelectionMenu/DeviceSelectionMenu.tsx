import React, { useState, useContext }  from "react";
import { AppDataContext } from "../../context/AppDataContext";
import { IAppDataContext, IAppData } from "../../dataModels/AppDataModel";
import { IVQBodyDataContext, IVQBodyData } from "../../dataModels/VQBodyDataModel";
import { VQBodyDataContext } from "../../context/VQBodyDataContext";
import { dropdownMenuListData } from "./Context";//static context
import "./Styles.scss";

const DeviceSelectionMenu: React.FC = () => {
  const { appData } = useContext(AppDataContext) as IAppDataContext;
  const { vqBodyData, updateVQBodyData } = useContext(VQBodyDataContext) as IVQBodyDataContext;
  //console.log("TESTTTT:::: " + JSON.stringify(dropdownMenuListData))
  const [selectedOption, setSelectedOption] = useState(1);
  let objForUpdate = {... vqBodyData};
  let deviceMenuList: HTMLElement|null;
  //const [listVisibility, setlistVisibility] = useState(false);

  const mouseLeaveHandler = () => {
    deviceMenuList = document.getElementById("DeviceMenuList");
    //@ts-ignore
    deviceMenuList.style.height = "0px";
    //@ts-ignore
    deviceMenuList.style.transition = "height 0.3s";
    setTimeout(() => {
      //@ts-ignore
      deviceMenuList.style.borderWidth = "0px";
    }, 300);
    /*let index = 6;
    const setChildrenTimer = setInterval(() => {
      //@ts-ignore
      deviceMenuList.childNodes[index].style.display = "none";
      index--;
      if(index <1) {
        //@ts-ignore
        deviceMenuList.style.display = "none";
        clearInterval(setChildrenTimer);
      }

    }, 10);*/
    //setlistVisibility(false);
  }

  return(
    <div id="DropdownMenuBox" onMouseLeave={mouseLeaveHandler}>
      <div id="SelectedDropdownMenuOption"
        onClick={(event: any) => {
          deviceMenuList = document.getElementById("DeviceMenuList");
          //@ts-ignore
          deviceMenuList.style.borderWidth = "1px";
          //@ts-ignore
          deviceMenuList.style.height = "100%";
          //@ts-ignore
          deviceMenuList.style.transition = "height 0.5s";

          /*let index = 0;
          const setChildrenTimer = setInterval(() => {
            //@ts-ignore
            deviceMenuList.childNodes[index].style.display = "block";
            index++;
            if(index > 6)
              clearInterval(setChildrenTimer);

          }, 10);
          console.log("TTEES::: " + deviceMenuList?.children.length)*/
      }}>
        <div style={{display: "flex", justifyContent: "center"}}><i className={dropdownMenuListData.options[selectedOption].icon}></i></div>
        <div style={{display: "flex", justifyContent: "center", fontSize: "10px"}}>{dropdownMenuListData.options[selectedOption].text}</div>
      </div>
      <div id="DeviceMenuList" className={"theme-" + appData.theme}>{dropdownMenuListData.options.map((option, index) => {
        return  <div
                  id = {option.id.toString()}
                  className = "dropdownMenuOption"
                  onClick = {
                    () => {
                      objForUpdate.currentView = option.id;
                      updateVQBodyData(objForUpdate);
                      setSelectedOption(option.id);
                      //@ts-ignore
                      deviceMenuList.style.height = "0px";
                      setTimeout(() => {
                        //@ts-ignore
                        deviceMenuList.style.borderWidth = "0px";
                      }, 300);
                      //@ts-ignore
                      deviceMenuList.style.transition = "height 0.3s";
                    }
                  }
                  key = {option.id}>
                  <div style={{display: "flex", justifyContent: "center"}}><i className = {option.icon}></i></div>
                  <div style = {{display: "flex", justifyContent: "center", fontSize: "10px"}}>{option.text}</div>
                </div>
        })}
      </div>
    </div>
  );
}

export default DeviceSelectionMenu;
