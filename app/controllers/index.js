
/*
 Not currently working on android
 * */

function randomDate(start, end) {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}

// EVENT HANDLERS
function createClockView(date, runflag) {
	var d8 = date;
    var setClock = function(){
    	if(!d8){
    		d8 = new Date(); // default to now
    	}
        var mm = d8.getMinutes();
        var hh = d8.getHours() % 12; // Modulus 12
        h.setTransform(Ti.UI.create2DMatrix().rotate(hh * 360 / 12));
        m.setTransform(Ti.UI.create2DMatrix().rotate(mm * 360 / 60));
        if(!runflag) {setInterval(tick, 60000);} 
    };
    var tick = function(){
    	d8 = new Date(d8.getTime() + 60000);
    	setClock();
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

// When the window opens we create 3 clocks
$.index.addEventListener("open", function(e){
	$.clock1.add(createClockView(randomDate(new Date(2012, 0, 1), new Date())), true);
	$.clock2.add(createClockView(randomDate(new Date(2012, 0, 1), new Date())), true);
	$.clock3.add(createClockView(randomDate(new Date(2012, 0, 1), new Date())), true);
});
$.index.open();
