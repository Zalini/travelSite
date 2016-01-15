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




$("#submitBtn").on("click", function(){
	var emailInformation = $("#emailInfo").val();

	if(emailInformation === "jo" ) {
		alert("it is true");
	} else {
		alert("it is false");
	}

});


});




