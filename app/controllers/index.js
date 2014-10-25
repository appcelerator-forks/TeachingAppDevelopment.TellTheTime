
function randomDate(start, end) {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}

//randomDate(new Date(2012, 0, 1), new Date())




// EVENT HANDLERS


$.clock.createClockView = function() {
    var setClock = function() {
        var zeit = new Date();
        var mm = zeit.getMinutes();
        var hh = zeit.getHours() % 12;
        h.setTransform(Ti.UI.create2DMatrix().rotate(hh * 360 / 12));
        m.setTransform(Ti.UI.create2DMatrix().rotate(mm * 360 / 60));
    };                          
    var clockView = Ti.UI.createImageView({
        image:'assets/clock_bg.png',
        width:200,
        height:200,
       	bottom:0
    });
    var center = {"x":100,"y":100};
    var m = Ti.UI.createImageView({
        image:'assets/bighand.png',
        width:7,
        opacity:0.9,
        height:180,
        center: center,
        anchorPoint : {"x":0.5, "y":0.5}
    });
    var h = Ti.UI.createImageView({
        image:'assets/littlehand.png',
        width:14,
        height:100,
        opacity:0.9,
        center: center,
        anchorPoint : {"x":0.5, "y":0.5}
    });
    clockView.add(m);
    clockView.add(h);
    setClock();
    setInterval(setClock, 60000);
    return clockView;
};


$.index.addEventListener("open", function(e){
	console.log("Window has opened");
	console.log("Random time generated:" + randomDate(new Date(2012, 0, 1), new Date()));
	console.log("Random time generated:" + randomDate(new Date(2012, 0, 1), new Date()));
	console.log("Random time generated:" + randomDate(new Date(2012, 0, 1), new Date()));
	console.log("Random time generated:" + randomDate(new Date(2012, 0, 1), new Date()));
	$.clock.add($.clock.createClockView());
});




$.index.open();
