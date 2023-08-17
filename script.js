function f1() {
	//function to make the text bold using DOM method
	document.getElementById("textarea1").style.fontWeight = "bold";
}

function f2() {
	//function to make the text italic using DOM method
	document.getElementById("textarea1").style.fontStyle = "italic";
}
function f10() {
	//function to make the text italic using DOM method
	document.getElementById("textarea1").style.textDecoration = "underline";
}

function f3() {
	//function to make the text alignment left using DOM method
	document.getElementById("textarea1").style.textAlign = "left";
}

function f4() {
	//function to make the text alignment center using DOM method
	document.getElementById("textarea1").style.textAlign = "center";
}

function f5() {
	//function to make the text alignment right using DOM method
	document.getElementById("textarea1").style.textAlign = "right";
}
 const textColorInput = document.getElementById('text-color');
// const bgColorInput = document.getElementById('background-color');
 const editorText = document.getElementById('textarea1');

 function updateColors() {
   editorText.style.color = textColorInput.value;

 }
 
 textColorInput.addEventListener('input', updateColors);
 bgColorInput.addEventListener('input', updateColors);
 


function f9() {
	//function to make the text back to normal by removing all the methods applied
	//using DOM method
	document.getElementById("textarea1").style.fontWeight = "normal";
	document.getElementById("textarea1").style.textAlign = "left";
	document.getElementById("textarea1").style.fontStyle = "normal";
	document.getElementById("textarea1").value = " ";
}
