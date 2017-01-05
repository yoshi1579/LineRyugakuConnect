$(document).ready(function(){
	setBindings();
});

function setBindings() {
	$("nav a").click(function(e){
		//e.preventDefault();
		var sectionID = e.currentTarget.id + "Section";
		if(sectionID != "noSection")
		{
			$("html body").animate({
				scrollTop: $("#" + sectionID).offset().top
			}, 1000);
		}
	});
}