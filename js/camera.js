setTimeout(function(){
	for(var i=1; i<201; i++){
		$('.ld'+i).addClass('ld'+i+'-ext');
	}
}, 2000);


var sd = new Vivus('subrata', {
	type: 'scenario-sync',
	duration: 20,
	start: 'autostart',
	dashGap:20,
	pathTimingFunction: Vivus.LINEAR,
	animTimingFunction: Vivus.LINEAR,
forceRender: false},
function () {
	//alert('s');
	if (window.console) {
		console.log('Animation finished. [log triggered from callback]');
	}
});