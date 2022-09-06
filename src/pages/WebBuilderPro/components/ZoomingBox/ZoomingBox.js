import React from 'react';
import WebBuilderProDataCtx from "../../context/WebBuilderProDataCtx";

let vqBody, vqBodyRect;

class ZoomingBox extends React.Component {
  static contextType = WebBuilderProDataCtx;
  constructor(props) {
    super(props);
  }

  render() {
    const { webBuilderProData, setWebBuilderProData } = this.context;
    return <div style={{display: "inline-block"}}>
      <span
      style={{fontSize: "40px", marginLeft: "30px", cursor: "pointer"}}
      onClick={() => {
        if(webBuilderProData.vqBodySettings.currentScale < 30.37) {
          //vqBody.style.transform = "none";
          //vqBodyRect = vqBody.getBoundingClientRect();
          //webBuilderProData.vqBodySettings.currentScale =

          let newScale = parseFloat((webBuilderProData.vqBodySettings.currentScale * 1.3).toFixed(2));

          if(newScale > 30.37)
            newScale = 30.37;

          const newTranslateX = webBuilderProData.vqBodySettings.translateX * newScale;
          const newTranslateY = webBuilderProData.vqBodySettings.translateY * newScale;
          vqBody.style.transform = "translate(" + newTranslateX + "px, " + newTranslateY + "px)  scale(" + newScale + ")";
          webBuilderProData.vqBodySettings.currentScale = newScale;
          setWebBuilderProData(webBuilderProData);
          //let translateX = (((window.innerWidth / 2) - (vqBodyRect.width / 2 + vqBodyRect.left)) * (webBuilderProData.vqBodySettings.currentScale - 1));
          //let translateY = (((window.innerHeight / 2) - (vqBodyRect.height / 2 + vqBodyRect.top)) * (webBuilderProData.vqBodySettings.currentScale - 1));
          //console.log("current X: " + translateX + " | Y: " + translateY);
          //vqBody.style.transform = "translate(" + (translateX * -1) + "px," + (translateY * -1) + "px) scale(" + webBuilderProData.vqBodySettings.currentScale + ")";
          //vqBodyRect = vqBody.getBoundingClientRect();

          //webBuilderProData.vqBodySettings.translateX = currentTranslateX + (finalOffsetX / currentScale);
          //webBuilderProData.vqBodySettings.translateY = currentTranslateY + (finalOffsetY / currentScale);

          //console.log("current X: " + vqBodyRect.x + " | Y: " + vqBodyRect.y + " | width: " + vqBodyRect.width);
          /*let translateX;
          let translateY;

          if(((window.innerWidth / 2) * .3) + 1000000 - vqBodyRect.x > 0)
            translateX = ((window.innerWidth / 2) * .3) * -1;//move west

          else
            translateX = (window.innerWidth / 2) * .3;//move east

          if(((window.innerHeight / 2) * .3) + 1000000 - vqBodyRect.y > 0)
            translateY = ((window.innerHeight / 2) * .3) * -1;//move north

          else
            translateY = (window.innerHeight / 2) * .3;//move south

          console.log("current X: " + translateX + " | Y: " + translateY);*/

          //let translateX = (1000000) * (webBuilderProData.vqBodySettings.currentScale - 1)//) - 220;
          //let translateY = (1000000) * (webBuilderProData.vqBodySettings.currentScale - 1)//) - 50;



          //vqBody.style.transform = "scale(" + webBuilderProData.vqBodySettings.currentScale + ")";
          //vqBody.style.transform = "translate(299780px, 299950px) scale(" + webBuilderProData.vqBodySettings.currentScale + ")";

          //console.log("new X: " + vqBodyRect.x + " | Y: " + vqBodyRect.y + " | width: " + vqBodyRect.width);
          //const middleOfScreenX = (window.innerWidth / 2) - vqBodyRect.left;
          //const middleOfScreenY = (window.innerHeight / 2) - vqBodyRect.top;
          //console.log("MIDDLE OF SCREEN X : " + middleOfScreenX + " Y : " + middleOfScreenY);
          //vqBody.style.transform = "scale(" + webBuilderProData.vqBodySettings.currentScale + ")";

          //vqBody.style.transform = "translate(" + webBuilderProData.vqBodySettings.currentScale + ", " + webBuilderProData.vqBodySettings.currentScale + ") scale(" + webBuilderProData.vqBodySettings.currentScale + ")";


          //vqBody.style.transform = "scale(" + webBuilderProData.vqBodySettings.currentScale + ")";
          //vqBodyRect = vqBody.getBoundingClientRect();

          //vqBody.style.transform = "translate(" + ((window.innerWidth / 2) * .3) + "px," + ((window.innerWidth / 2) * .3) + "px) scale(" + webBuilderProData.vqBodySettings.currentScale + ")";

          /*vqBodyRect = vqBody.getBoundingClientRect();
          const oldX = vqBodyRect.x;
          const oldY = vqBodyRect.y;
          const middleOfScreenX = (window.innerWidth / 2) - vqBodyRect.left;
          const middleOfScreenY = (window.innerHeight / 2) - vqBodyRect.top;
          console.log("MIDDLE OF SCREEN X : " + middleOfScreenX + " Y : " + middleOfScreenY);
          //console.log("BEF LEFT::: " + vqBodyRect.left + " RIGHT::: " + vqBodyRect.right + " |||: " + (((window.innerWidth / 2) - vqBodyRect.left) / webBuilderProData.vqBodySettings.currentScale))
          //const middleOfScreenX = (webBuilderProData.currentVQBodyX / webBuilderProData.vqBodySettings.currentScale) - ((window.innerWidth / 2) / webBuilderProData.vqBodySettings.currentScale);
          //const middleOfScreenY = (webBuilderProData.currentVQBodyY / webBuilderProData.vqBodySettings.currentScale) - ((window.innerHeight / 2) / webBuilderProData.vqBodySettings.currentScale);
          //console.log("middleOfScreen:  " + middleOfScreenX);
          webBuilderProData.vqBodySettings.currentScale = parseFloat((webBuilderProData.vqBodySettings.currentScale * 1.3).toFixed(2));
          //webBuilderProData.vqBodySettings.currentScale = parseFloat(webBuilderProData.vqBodySettings.currentScale.toFixed(2));
          //vqBody.style.transform = "translate(" + (vqBodyRect.x * 1.3) + "px," + (vqBodyRect.y * 1.3) +"px) scale(" + webBuilderProData.vqBodySettings.currentScale + ")";
          //console.log("LEFT : " + vqBodyRect.left);
          vqBody.style.transform = "scale(" + webBuilderProData.vqBodySettings.currentScale + ")";
          //middleOfScreenX = (window.innerWidth / 2) - vqBodyRect.left;
          //middleOfScreenY = (window.innerHeight / 2) - vqBodyRect.top;
          vqBodyRect = vqBody.getBoundingClientRect();
          const newX = vqBodyRect.x;
          const newY = vqBodyRect.y;
          const zoomOffsetX = (oldX - newX) / webBuilderProData.vqBodySettings.currentScale;
          const zoomOffsetY = (oldY - newY) / webBuilderProData.vqBodySettings.currentScale;

          //console.log("MIDDLE OF SCREEN X : " + zoomOffsetX + " Y : " + zoomOffsetY);
          vqBody.style.transform =  "scale(" + webBuilderProData.vqBodySettings.currentScale + ") translate(" + zoomOffsetX + "px," + zoomOffsetY + "px)";
          //vqBody.style.left = zoomOffsetX + "px";
          //vqBody.style.top = zoomOffsetY + "px";
          vqBodyRect = vqBody.getBoundingClientRect();
          console.log("LEFT::: " + vqBodyRect.left + " TOP::: " + vqBodyRect.top)

          //console.log("AA LEFT : " + (oldX - newX));
          //X : " + middleOfScreenX
          //const zoomOffsetX = ((((2000000 * webBuilderProData.vqBodySettings.currentScale) - 2000000) / 2) / webBuilderProData.vqBodySettings.currentScale) - (220 / webBuilderProData.vqBodySettings.currentScale);// - vqBodyRect.x;
          //const zoomOffsetY = ((((2000000 * webBuilderProData.vqBodySettings.currentScale) - 2000000) / 2) / webBuilderProData.vqBodySettings.currentScale) - (50 / webBuilderProData.vqBodySettings.currentScale);// - vqBodyRect.y;


          //console.log("BEF XXXXX::: " + vqBodyRect.x + " YYYYY::: " + vqBodyRect.y)
          //console.log("BEF XXXXX::: " + vqBodyRect.x + " YYYYY::: " + vqBodyRect.y)
          //console.log("XXXXX::: " + zoomOffsetX + " YYYYY::: " + zoomOffsetY)// + " |||::: " + (vqBodyRect.x * webBuilderProData.vqBodySettings.currentScale));

          //vqBody.style.transform =  "scale(" + webBuilderProData.vqBodySettings.currentScale + ")"// translate(" + zoomOffsetX + "px, " + zoomOffsetY + "px)";
          //console.log("BBBBBB::: " + webBuilderProData.vqBodySettings.currentScale + "::: " + webBuilderProData.currentView);
          //console.log("XXXXX::: " + vqBodyRect.x + " YYYYY::: " + vqBodyRect.y + " |||::: " + (vqBodyRect.x * webBuilderProData.vqBodySettings.currentScale));

          //const vqBodyRectAfterScale = vqBody.getBoundingClientRect();

          //console.log("after:  " + middleOfScreenX);
          //console.log("total: " + (vqBodyRectAfterScale.x));
          //vqBody.style.left = "3000px"; //(vqBodyRect.x * webBuilderProData.vqBodySettings.currentScale) + "px"//(window.innerWidth / 2)  + "px" //+ (vqBodyRectAfterScale.x - vqBodyRect.x) + "px" //* webBuilderProData.vqBodySettings.currentScale) + "px"// + (vqBodyRectAfterScale.x - vqBodyRect.x) + "px";//(vqBodyRect.x + (window.innerWidth / 2 * webBuilderProData.vqBodySettings.currentScale)) + "px";
          //vqBody.style.top =  "250px";//(vqBodyRect.y * webBuilderProData.vqBodySettings.currentScale) + "px"//(window.innerHeight / 2)  + "px" //+ (vqBodyRectAfterScale.y - vqBodyRect.y) + "px" //* webBuilderProData.vqBodySettings.currentScale) + "px"// + (vqBodyRectAfterScale.y - vqBodyRect.y) + "px"//(vqBodyRect.y + (window.innerHeight / 2 * webBuilderProData.vqBodySettings.currentScale)) + "px";
          //webBuilderProData.currentVQBodyX = middleOfScreenX;
          //webBuilderProData.currentVQBodyY = middleOfScreenY;

          //vqBody.style.transform = "translate(" + vqBodyRect.x + "px)";
          //const vqBodyRectAfterScale = vqBody.getBoundingClientRect();

          //const zoomOffsetX = vqBodyRect.left - vqBodyRectAfterScale.left - (((window.innerWidth / 2) - vqBodyRect.left) / webBuilderProData.vqBodySettings.currentScale)
          //const zoomOffsetY = vqBodyRect.top - vqBodyRectAfterScale.top - (((window.innerHeight / 2) - vqBodyRect.top) / webBuilderProData.vqBodySettings.currentScale)
          //console.log("XXXXX::: " + zoomOffsetX + " | YYYYYY:: " + zoomOffsetY)
          //vqBody.style.transform =  "scale(" + webBuilderProData.vqBodySettings.currentScale + ") translate(" + zoomOffsetX + "px, " + zoomOffsetY + "px)";
          //vqBodyRect = vqBody.getBoundingClientRect();
          //console.log("AAA XXXXX::: " + vqBodyRect.x + " YYYYY::: " + vqBodyRect.y + " |||::: " +  webBuilderProData.vqBodySettings.currentScale);
          //console.log("BEF XXXXX::: " + vqBodyRect.x + " YYYYY::: " + vqBodyRect.y)
          //console.log("AFT LEFT::: " + vqBodyRect.left + " RIGHT::: " + vqBodyRect.right + " |||: " + (((window.innerWidth / 2) - vqBodyRect.left) / webBuilderProData.vqBodySettings.currentScale))
          setWebBuilderProData(webBuilderProData);*/
        }
      }}>+</span>
      <input type="textbox" style={{width:"100px", fontSize: "40px", marginLeft: "30px"}} value={(webBuilderProData.vqBodySettings.currentScale * 100).toFixed(0) + "%"}
      onChange={(event) => {
        if(webBuilderProData.vqBodySettings.currentScale == "")
          webBuilderProData.vqBodySettings.currentScale = 1;
      }} />
      <span style={{fontSize: "40px", marginLeft: "30px", cursor: "pointer"}}
      onClick={() => {
        if(webBuilderProData.vqBodySettings.currentScale > 0.02) {
          let newScale = parseFloat((webBuilderProData.vqBodySettings.currentScale / 1.3).toFixed(2));
          if(newScale < 0.02)
            newScale = 0.02;

          const newTranslateX = webBuilderProData.vqBodySettings.translateX * newScale;
          const newTranslateY = webBuilderProData.vqBodySettings.translateY * newScale;
          vqBody.style.transform = "translate(" + newTranslateX + "px, " + newTranslateY + "px)  scale(" + newScale + ")";
          webBuilderProData.vqBodySettings.currentScale = newScale;
          setWebBuilderProData(webBuilderProData);
          /*vqBody.style.transform = "none";
          vqBodyRect = vqBody.getBoundingClientRect();
          webBuilderProData.vqBodySettings.currentScale = parseFloat((webBuilderProData.vqBodySettings.currentScale / 1.3).toFixed(2));
          let translateX = (((window.innerWidth / 2) - (vqBodyRect.width / 2 + vqBodyRect.left)) * (webBuilderProData.vqBodySettings.currentScale - 1));
          let translateY = (((window.innerHeight / 2) - (vqBodyRect.height / 2 + vqBodyRect.top)) * (webBuilderProData.vqBodySettings.currentScale - 1));
          //console.log("current X: " + translateX + " | Y: " + translateY);
          vqBody.style.transform = "translate(" + (translateX * -1) + "px," + (translateY * -1) + "px) scale(" + webBuilderProData.vqBodySettings.currentScale + ")";
          vqBodyRect = vqBody.getBoundingClientRect();
          setWebBuilderProData(webBuilderProData);*/
          /*webBuilderProData.vqBodySettings.currentScale = parseFloat((webBuilderProData.vqBodySettings.currentScale / 1.3).toFixed(2));
          vqBody.style.transform = "scale(" + webBuilderProData.vqBodySettings.currentScale + ")";
          setWebBuilderProData(webBuilderProData);*/
        }
      }}>-</span>
    </div>
  }

  componentDidMount() {
    vqBody = document.getElementById("VQBody");
  }
}

export default ZoomingBox;
