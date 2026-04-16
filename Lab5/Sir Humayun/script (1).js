// 8.events.html
function events(){  // testing click event	
	window.alert("You clicked me.");
}
function events_Dbl(){  // double click on button	
	document.getElementById('heading').innerHTML = "You double click button";
}
function events_Dbl_Two(){ // change color on double click	
	document.getElementById('heading').style.backgroundColor = "cyan";
}
function para_Testing_Clk(){ // testing single click on paragraph	
	document.getElementById('clickTesting').style.backgroundColor = "lightblue";
}
function txtbox_Testing(){	// testing click event upon textbox	
	document.getElementById('heading').style.fontSize = "48px";
}
function rightclickevent(){
    alert("You have clicked the right button");
}
function txtbox_Testing(){	// testing click event upon textbox	
	document.getElementById('heading').style.fontSize = "48px";
}

function keyDown(event){
    console.log("Keydown Event:");
    console.log("Key pressed: " + event.key);
    console.log("Key code: " + event.keyCode);
    console.log("-------------------------");
}
function keyUp(){
    alert("You are testing on key up keyboard event");
}
function keyPress(event){    
    console.log("Keypress Event:");
    console.log("Key pressed: " + event.key);
    console.log("Key code: " + event.keyCode);
    console.log("-------------------------");
}
function mouseOverEvent(){
    alert("You move the mouse over the paragraph");
}
function mouseOutEvent(){
    alert("You move the mouse out of the paragraph");
}
function mouseDownEvent(){
    alert("You down the mouse upon the paragraph");
}
function mouseUpEvent(){
    alert("You up the mouse from the paragraph")
}
let x = 0;
function moveMouse()
{
	document.getElementById('mouseMoveDiv').innerHTML = x++;
}
// onblur event; trigger when user loose focus or leave the textbox
function blur_Event(){	
	var m = document.getElementById('blurEvent');
	m.value = m.value.toUpperCase();	
}
// onfoucs event; trigger when user focus on textbox
function focus_Event(){	
	document.getElementById('focusEvent').style.backgroundColor = "yellow";
}
//onchange event; this will work upon some changes in the txtbox
function onChangeEvent(){	
	document.getElementById('onchangeEvent').style.backgroundColor = "green";
}
// onchang event for dropdown box
function dropDownChangeEvent(){	
	document.getElementById('dropDownPara').style.backgroundColor = "cyan";
	document.getElementById('dropDownPara').style.fontSize = "24px";
}

// onselect event testing
function selectTextEvent()
{
	
	var x = document.getElementById('selectText');	
	document.getElementById('selectTextarea').innerHTML = x.value;	
}

// onsubmit & onreset events
function form_Submit()
{
		alert("Form Submitted");	
}
function form_Reset()
{
	
	alert("Form Reset");
}

// 9.DOM.html
function dblevent(){
    document.getElementById('dblvictim').innerHTML = "Double Click Changed Me.";
}
function singleclickevent(){
    document.getElementById('clickvictim').style.backgroundColor = "cyan";
}
function txtbox_Testing(){	
	document.getElementById('heading').style.fontSize = "48px";
}

// 11.formvalidation.html
function validation(){
	if(document.getElementById('name').value == ""){
		     window.alert("Please enter your name");
			 return false;
		}else if(!document.getElementById('gender').checked){
			window.alert("Please select gender");
			return false;
		}else if(document.getElementById('address').value == ""){
			window.alert("Please provide address");
			return false;
		}else{
			return true;
		}
}


































