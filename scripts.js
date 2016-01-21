$(document).ready(function() {

//click the image and the corresponding blurb slides in
	$("#pics img").on("click", function(){
	$("#contentBox, .blurb").show().velocity({ translateX: [ 0, 300 ] },
	  { duration: 1000 });


//hide list and articles
	$(".titles").hide();
	$("#arrow").show();
	$("#articlesCarousel").hide();
	$(".mobileTitles").hide();

//image slides in from the left
	$(this).velocity({ translateX: [ 200, 0 ] },
	  { duration: 1000 });

//hide the siblings of this particular image
	$(this).siblings("img").hide();
	$(this).hide();
	$(".blurb").css({"line-height":"1.5em", "color": "#383838"})

//get the blurb for the image clicked by following the attribute
	var description = $(this).attr("data-description");
		$(".blurb").html(description);
	});


	$(".articlesCarousel").slick({
		  dots: true,
		  infinite: true,
		  fade: true,
		  autoPlay: true,
		  autoplaySpeed: 1000,
		  arrows: true,
		});


$("#upArrow p").click(function(){
	$(window).scrollTop(0);
});


/***********For the email and name confirmation***********/
var nameTest = false;
var emailTest = false;
$("#emailConfirmBox").hide();

$("#contactName").focusout(function(){
	checkName();
});

$("#emailInfo").focusout(function(){
	checkEmail();
});


function checkName(){
	var contactNameLength = $("#contactName").val().length;
	if(contactNameLength > 1){
		nameTest = true;
	}
} 


function checkEmail(){
	var emailLength = $("#emailInfo").val().length;
	if(emailLength < 6 || emailLength >15){
		$("#alertText").text("Please type in a valid email address");
		emailTest = true;
	} else {
		$("#alertText").hide();
	}
} 


$("form").submit(function(event){
	checkName();
	checkEmail();
	var contactName = $("#contactName").val();
	$("#emailConfirmBox h1").text("thank you"+ " " + contactName + " " + "for subscribing!");
	// alert("Thank you" + ' ' + contactName);
	$("#emailConfirmBox").show();
	event.preventDefault();
});

$("#exitBtn").on("click", function(){
	$("#emailConfirmBox").hide();
});

// $("#submitBtn").on("click", function(){
// 	var nameInfoBox = $("contactName").val();
// 	var emailInfoBox = $("emailInfo").val();
// 	if(nameInfoBox && emailInfoBox == ""){
// 		$("#alertText").html("missing text");
// 	}

// });

// if(errorName && errorEmail == false){
// 	alert("Yippie, great news to come your way!")
// }



});




