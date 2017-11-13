

$(document).ready(function(){
//when page loads areas of brain light up in sequence along with corresponding title
//brain return to washed out version of itself
//when mouse hovers over brain area becomes brighter
//when area of brain clicked 
$(".brain-section").on("click", function() {
	var region = $(this).data("region");

	$("p,h2,h3").hide();
	$(".grey-box, ." + region + "-text h2, ." + region + "-text .overview").show();
	$(".overview-tab").on("click", function()	{
		$("p,h3").hide();
		$("." + region + "-text .overview").show();
	});
	$(".closer-tab").on("click", function()	{
		$("p,h3").hide();
		$("." + region + "-text .closer").show();
	});
	$(".systems-tab").on("click", function()	{
		$("p,h3").hide();
		$("." + region + "-text .key-systems").show();
	});
	$(".disease-tab").on("click", function()	{
		$("p,h3").hide();
		$("." + region + "-text .related-diseases").show();
	});
});

	//area of brain becomes larger and brighter
	//corresponding information box pops up
//when mouse hovers over .blue-box background-color change darker
$(".blue-box").hover(function(){
    $(this).css("background-color", "aqua");
    }, function(){
    $(this).css("background-color", "rgb(68, 114, 196)");
});
	//when tab selected corresponding information appears in box
	//when x is clicked the popup box is closed
});