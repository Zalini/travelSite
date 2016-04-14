$(document).ready(function() {
//click the image and the corresponding blurb slides in
	$("#pics img").on("click", function(){
	// $(this).css({"width":"100%", "height": "100%", "opacity": "1"});
	$("#contentBox, .blurb, #arrow").fadeIn(200);

	$(".blurb").css({"line-height":"1.5em", "color": "#383838", "width": "60%"});
//get the blurb for the image clicked by following the attribute
	var description = $(this).attr("data-description");
		$(".blurb").html(description);
	});

	$("#contentBox").on("dblclick", function(){
		$(this).fadeOut();
		$("#pics img").siblings("img").show();
	});

	$("#arrow").on("click", function(){
		$("#contentBox").fadeOut(200);
		$(this).hide();
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
	} else {
		return false
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
	$("#emailConfirmBox").fadeIn(500);
	event.preventDefault();
});

$("#exitBtn").on("click", function(){
	$("#emailConfirmBox").fadeOut(500);
});
});