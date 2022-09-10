import React, { useContext }  from "react";
import { IAppData, IAppDataContext } from "../../dataModels/AppDataModel";
import { AppDataContext } from "../../context/AppDataContext";
import "./Styles.scss";

const ThemeToggleButton: React.FC = () => {
  const { appData, updateAppData } = useContext(AppDataContext) as IAppDataContext;
  let objForUpdate: IAppData = { ... appData };
  let clientX: number, clientY: number;
  //let themeToggleButton: HTMLElement;

  return(
    <div id="ThemeToggleBox" className={"theme-" + appData.theme}>
      <div id="SunIcon" className={"theme-" + appData.theme}><i className="bi bi-sun" style={{backgroundColor: "trantransparent"}}></i></div>
      <div id="MoonIcon" className={"theme-" + appData.theme}><i className="bi bi-moon-stars"></i></div>
      <div
        id="ThemeToggleButton"
        className = {"theme-" + appData.theme}
        onMouseDown = {
          (event: any) => {
            clientX = event.clientX;
            clientY = event.clientY;
            window.onmousemove = (msvEvent: any) => {
              console.log("Clicked on X:: " + clientX + " | Y:: " + clientX + "Current X:: " + msvEvent.clientX + " Y:: " + msvEvent.clientY)
              //event.target.style.transform = "translate(" + ((msvEvent.clientX - clientX) / 1.3) + "px, 0px)";
              event.target.style.left = "35px";
            }

            window.onmouseup = (msuEvent: any) => {
              window.onmousemove = null;
            }
          }
        }
        onClick = {
          (event: any) => {
            if(objForUpdate.theme === "light") {
              event.target.style.animation = "slideLeft 0.35s ease-in";
              event.target.style.animationFillMode = "forwards";
              objForUpdate.theme = "dark";
              updateAppData(objForUpdate);
            }

            else {
              event.target.style.animation = "slideRight 0.35s ease-in";
              event.target.style.animationFillMode = "forwards";
              objForUpdate.theme = "light";
              updateAppData(objForUpdate);
            }
          }
        }
        />
    </div>
  );
}

export default ThemeToggleButton;
