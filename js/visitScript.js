$(document).ready(visitPageLoaded);

var bulkImages = [
	'img/seedsNuts.png',
	'img/bulk food.jpg'
];
var nikkenImages = [
	'img/nikken1.png',
	'img/nikken2.png'
];

var bulkIndex = 1;
var nikkenIndex = 1;

function visitPageLoaded() {
	
	setInterval(swapBulkImages, 5000);
	setInterval(swapNikkenImages, 5000);
}

function swapBulkImages() {
	
	var image;
	if ($(window).width() >= 767) {
		image = $("img.bulkChangerDesktop");
	
		image.fadeOut(750, 
		function() {image.attr('src', bulkImages[bulkIndex++ % bulkImages.length]);} );
		image.fadeIn(750);
		
	} else {
		image = $("img.bulkChangerMobile");		
	}
}

function swapNikkenImages() {
	
	var image;
	if ($(window).width() >= 767) {
		image = $("img.nikkenChangerDesktop");
		
		image.fadeOut(750, 
		function() {image.attr('src', nikkenImages[nikkenIndex++ % nikkenImages.length]);} );
		image.fadeIn(750);
		
	} else {
		image = $("img.nikkenChangerMobile");		
	}
}