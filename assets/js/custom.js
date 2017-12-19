window.onload = function(){
    onInit();
};

var container;
var CloseButton;
var openButtom;
var Expanded;

function onInit(){
    container = document.getElementById("container");
    Expand = document.getElementById("ExpandedState");
    CloseButton = document.getElementById("CloseButton");
	openButtom = document.getElementById("openButton");

	openButton.style.display = "block";
	CloseButton.style.display = "none";
	Expand.style.height = "900px";
	
	
	// openButtom.onclick=function(){
	// 	open();
	// }
	
	// CloseButton.onclick=function(){
	// close();
	// }
}

// function open(){
// 	ExpandedState.style.transition = "height 0.5s linear 0s";
// 	ExpandedState.style.height = "900px";
// 	openButton.style.display = "none";
// 	CloseButton.style.display = "block";
// }

// function close(){
// 	ExpandedState.style.transition = "height 0.5s linear 0s";
// 	ExpandedState.style.height = "0";
// 	openButton.style.display = "block";
// 	CloseButton.style.display = "none";
// }


function playVideo(){
	
}
