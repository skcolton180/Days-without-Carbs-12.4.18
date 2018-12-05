//set count
if(localStorage.getItem("count") == null){
	localStorage.setItem("count",0)
}

//update count
function update(){
	document.getElementyById("count").innerHTML = localStorage.getItem("count");
}

update()
//add one to count
funtion plusOne(){
	localStorage.setItem("count",Number(localStorage.getItem("count"))+1)
	update()
}
//reset
function reset() {
	if (confirm("Are you sure you want to reset?")) {
		localStorage.setItem("count",0);
		update();
	}
}