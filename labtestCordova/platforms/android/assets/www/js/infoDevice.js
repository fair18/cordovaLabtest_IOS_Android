function onDeviceReady() {
	var info = document.getElementById("appInfo");
	info.innerHTML = "<table>"  
	+ "<tr><th>Model:<td>" + device.model + "</td></tr>" 
	+ "<tr><th>Name:<td>" + device.name + "</td></tr>" 
	+ "<tr><th>Version:<td>" + device.version +"</td></tr></table>" ;
}

window.onload = function() {
	document.addEventListener("deviceready", onDeviceReady, false);
};