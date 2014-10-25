
function randomDate(start, end) {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}

//randomDate(new Date(2012, 0, 1), new Date())




// EVENT HANDLERS

$.index.addEventListener("open", function(e){
	console.log("Window has opened");
	console.log("Random time generated:" + randomDate(new Date(2012, 0, 1), new Date()));
	console.log("Random time generated:" + randomDate(new Date(2012, 0, 1), new Date()));
	console.log("Random time generated:" + randomDate(new Date(2012, 0, 1), new Date()));
	console.log("Random time generated:" + randomDate(new Date(2012, 0, 1), new Date()));
});




$.index.open();
