
function randomDate(start, end) {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}

//randomDate(new Date(2012, 0, 1), new Date())




// EVENT HANDLERS


function createClockView(date) {
	var d8 = date;
    var setClock = function(){
    	if(!d8){
    		d8 = new Date();
    	}
        var mm = d8.getMinutes();
        var hh = d8.getHours() % 12; // Modulus 12
        h.setTransform(Ti.UI.create2DMatrix().rotate(hh * 360 / 12));
        m.setTransform(Ti.UI.create2DMatrix().rotate(mm * 360 / 60));
    };
    var startClock = function(){
    	setInterval(setClock, 60000);	
    };                          
    var clockView = Ti.UI.createImageView({
        image:'/clock_bg.png',
        width:200,
        height:200,
       	bottom:0
    });
    var center = {"x":100,"y":100};
    var m = Ti.UI.createImageView({
        image:'/bighand.png',
        width:7,
        opacity:0.9,
        height:180,
        center: center,
        anchorPoint : {"x":0.5, "y":0.5}
    });
    var h = Ti.UI.createImageView({
        image:'/littlehand.png',
        width:14,
        height:100,
        center: center,
        anchorPoint : {"x":0.5, "y":0.5}
    });
    clockView.add(m);
    clockView.add(h);
    setClock();
    return clockView;
};


$.index.addEventListener("open", function(e){
	$.clock1.add(createClockView(randomDate(new Date(2012, 0, 1), new Date())));
	$.clock2.add(createClockView(randomDate(new Date(2012, 0, 1), new Date())));
	$.clock3.add(createClockView(randomDate(new Date(2012, 0, 1), new Date())));
});




$.index.open();
