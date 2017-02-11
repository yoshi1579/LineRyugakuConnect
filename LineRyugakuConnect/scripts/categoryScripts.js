$(document).ready(function(){
	setBindings();


});

function setBindings() {
	$("nav ul li a").click(function(e){
		//e.preventDefault();
		var sectionID = e.currentTarget.id + "Section";
		if(sectionID != "noSection")
		{
			$("html body").animate({
				scrollTop: $("#" + sectionID).offset().top
			}, 1000);
			$(this).parent().parent().toggleClass("open");
		}
	});

	$(".dropDown img").click(function(){
		
		$(this).parent().next().toggleClass("open");

		//close drop down menu when user click other place
		$(document).click(function(event) { // (1)
    	if (!$.contains($("nav")[0], event.target)) 
    	{ // (2)
       		 $("nav ul").removeClass("open");
  	    }
		});
	});


	// this variable decide which QR code to show
	var qrcodeNum = 0;
	// when the button is clicked, a modal window open
	$(".modal-open").click(function(){

		// preventing from opening multiple modal windows
		$(this).blur();
		if($(".modal-open")[0]) 
		{
			$("#modal-overlay").remove();
		}

		// generating overlay html code at the end of <body>
		$("body").append('<div id="modal-overlay"></div>');

		// fade in [modal-overlay]
		$("#modal-overlay").fadeIn("slow");

		//fade in [$modal-content]
		$("#modal-content-" + qrcodeNum).fadeIn("slow");
	});

	// closing a modal window
	$(document).on("click", "#modal-overlay, #modal-close", function(){
		// fade out modal-overlay and modal-content
		$("#modal-content-" + qrcodeNum).fadeOut("slow");
		$("#modal-overlay").fadeOut("slow", function(){
			// removing the html of modal-overlay after fading out
			$("#modal-overlay").remove();
		});
	});


	// when a user click the next arrow, the content slider goes to next
	$(".nextArrow").click(function(){
		// increment qrcodeNum to trace which QR code to show
		qrcodeNum++;

		// remove open class from this row
		$(this).parent().parent().parent().hide('slide',{direction:'left'},1000, function(){
			$(this).next().hide();
			// show the next content
			$(this).next().fadeIn("slow");
		});
	});

	// when a user click the back arrow, the content slider goes to previous one
	$(".backArrow").click(function(){
		// increment qrcodeNum to trace which QR code to show
		qrcodeNum--;

		// remove open class from this row
		$(this).parent().parent().parent().hide('slide',{direction:'right'},1000, function(){
			$(this).prev().hide();
			// show the previous content
			$(this).prev().fadeIn("slow");
		});
	});
}