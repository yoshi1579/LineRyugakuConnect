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

	// when the button is clicked, a modal window open
	$("#modal-open").click(function(){

		// preventing from opening multiple modal windows
		$(this).blur();
		if($("#modal-open")[0]) 
		{
			$("#modal-overlay").remove();
		}

		// generating overlay html code at the end of <body>
		$("body").append('<div id="modal-overlay"></div>');

		// fade in [modal-overlay]
		$("#modal-overlay").fadeIn("slow");

		//fade in [$modal-content]
		$("#modal-content").fadeIn("slow");
	});

	// closing a modal window
	$(document).on("click", "#modal-overlay, #modal-close", function(){
		// fade out modal-overlay and modal-content
		$("#modal-overlay, #modal-content").fadeOut("slow", function(){
			// removing the html of modal-overlay after fading out
			$("#modal-overlay").remove();
		});
	});
}