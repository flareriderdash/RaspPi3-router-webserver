var i =1;
var original = document.getElementById("box");
function duplicate(){
	var clone = original.cloneNode(true);
    clone.id = "box"+ ++i;
    original.parentNode.appendChild(clone);
}



