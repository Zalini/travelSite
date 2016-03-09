$(document).ready(function() {
//click the image and the corresponding blurb slides in
	$("#pics img").on("click", function(){
	$("#contentBox, .blurb").show().velocity({ translateX: [ 0, 300 ] },
	  { duration: 1000 });

//hide list and articles
	$(".titles, .articlesCarousel, .mobileTitles, #upArrow, .cover, .line, #footer").hide();
	$("#arrow").show();
//hide the siblings of this particular image
	$(this).siblings("img").hide();
	$(this).hide();
	$(".blurb").css({"line-height":"1.5em", "color": "#383838"})
//get the blurb for the image clicked by following the attribute
	var description = $(this).attr("data-description");
		$(".blurb").html(description);
	});

//Slick slider carousel
$(".articlesCarousel").slick({
	dots: true,
	infinite: true,
	fade: true,
	autoplay: true,
	autoplaySpeed: 2500,
	arrows: false,
	swipe: true
});
//Click arrow at the bottom and page scrolls up
$("#upArrow p").click(function(){
	$(window).scrollTop(0);
});

/***********For the email and name confirmation***********/
$("#emailConfirmBox").hide();

$("#contactName").focusout(function(){
	checkName();
});

$("#emailInfo").focusout(function(){
	checkEmail();
});

function checkName(){
	var contactNameLength = $("#contactName").val().length;
	var contactName = $("#contactName").val();
	if(contactNameLength > 1){
		$("#alertText").text("You're awesome " + contactName + " !");
	}
} 

function checkEmail(){
	var emailLength = $("#emailInfo").val().length;
	if(emailLength < 6){
		$("#alertText").text("Please type in a valid email address");
	} else {
		$("#alertText").hide();
	}
} 

$("form").submit(function(event){
	checkName();
	checkEmail();
	var contactName = $("#contactName").val();
	$("#emailConfirmBox h1").text("Thank you"+ " " + contactName + " " + "for subscribing!");
	$("#emailConfirmBox").show();
	event.preventDefault();
});

$("#exitBtn").on("click", function(){
	$("#emailConfirmBox").hide();
});

});