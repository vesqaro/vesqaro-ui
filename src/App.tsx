import React from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import WebBuilder from "./pages/WebBuilderPro/WebBuilderPro";

const App: React.FC = () => {
	//console.log("WW:::::: " + navigator.userAgent);
	document.body.setAttribute("isitembeingdragged", "false");

	//window.addEventListener("keydown", event => {
		//if(event.ctrlKey === true && (event.code === "61" || event.code === "107" || event.code === "173" || event.code === "109"  || event.code === "187"  || event.code === "189")) {
			//console.log("trying to zoom");
		//event.preventDefault();
		//}
	//});
	//console.log("DFDR444");
		/*function test() {
		console.log("TEDSF 32323");
	}
	console.log("TEDSF 32323");
	window.addEventListener("resize", test);*/
	return (
		<div>
			<Routes>
				<Route path="/Dhasboard" element={<Dashboard />} />
				<Route path="/Web-Builder" element={<WebBuilder />} />
			</Routes>
		</div>
	);
}
export default App;
