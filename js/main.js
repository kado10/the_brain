

$(document).ready(function(){
//when page loads areas of brain light up in sequence along with corresponding title
setTimeout(function() {
	$(".frontal-lobe-label").removeClass("hidden");
}, 800);
setTimeout(function() {
	$(".parietal-lobe-label").removeClass("hidden");
}, 1600);
setTimeout(function() {
$(".temporal-lobe-label").removeClass("hidden");
}, 2200);
setTimeout(function() {
$(".occipital-lobe-label").removeClass("hidden");
}, 2800);
setTimeout(function() {
$(".cerebellum-label").removeClass("hidden");
}, 3400);
setTimeout(function() {
$(".brainstem-label").removeClass("hidden");
}, 4000);
setTimeout(function() {
$("span[class*='-label'").addClass("hidden");
}, 5000);

//when area of brain clicked 
//when tab selected corresponding information appears in box
$(".brain-section").on("click", function() {
	var region = $(this).data("region");
	//hide any previous information
		$("h2, .white-box " + "*").hide();
	//remove old class

	//  
		// .attr('class', 'clearfix')
		$(".overview-tab").attr("class", "nav-box overview-tab");
		$(".closer-tab").attr("class", "nav-box closer-tab");
		$(".systems-tab").attr("class", "nav-box systems-tab");
		$(".disease-tab").attr("class", "nav-box disease-tab");
		$(".box").attr("class", "box");
		$(".fa-times").attr("class", "fa fa-times ")
		// .addclass region + class name
		// $(".nav-box").removeClass("*-nav");
		// $("h2, h3").removeClass("*-style");
		// $(".box").removeClass("*-box");
	//add new class
		$(".nav-box").addClass(region +"-nav");
		$(".fa-times").addClass(region + "-style");
		$(".box").addClass(region + "-box");
		$(".overview-tab").addClass("clicked");
		$(".svg-container").addClass("popup");
	//display default text for region
	$(".box, ." + region + "-text h2, ." + region + "-text .overview").show();
	$("." + region + "-label").removeClass("hidden")
	//display overview text for region
	$(".overview-tab").on("click", function()	{
		$(".white-box " + "*").hide();
		$("." + region + "-text .overview").show();
	});
	//display closer text for region
	$(".closer-tab").on("click", function()	{
		$(".white-box " + "*").hide();
		$("." + region + "-text .closer").show();
	});
	//display systems text for region
	$(".systems-tab").on("click", function()	{
		$(".white-box " + "*").hide();
		$("." + region + "-text .key-systems").show();
	});
	//display disease text for region
	$(".disease-tab").on("click", function()	{
		$(".white-box " + "*").hide();
		$("." + region + "-text .related-diseases").show();
	});
});

	//area of brain becomes larger and brighter
	//corresponding information box pops up

//when .blue-box clicked background-color change darker
	$(".nav-box").click(function(){
		$(".nav-box.clicked").removeClass("clicked");
	 	$(this).addClass("clicked");
	});
//when x is clicked the popup box is closed
	$(".fa-times").on("click", function()	{
		$(".box").hide();
		$(".svg-container").removeClass("popup");
		$(".nav-box").removeClass("clicked");
		$("span[class*='-label'").addClass("hidden");
	});
//when region hovered label appears and disappears
	 // $(".brain-section").on("mouseover", function() {
	 // 	var region = $(this).data("region");
	 //    $("." + region + "-label").toggleClass("hidden")
	 //  });
});