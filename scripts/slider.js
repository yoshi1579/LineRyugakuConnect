function Slider(){
	var index = 1;
	var $pointer = $(".slide-1");
	$pointer.fadeIn(3000);
	setInterval(function(){
		$pointer.fadeOut(500, function()
		{
			$pointer.removeClass("slide-" + index);
			index++;
			if(index == 5)
			{
				index = 1;
			}
			$pointer.addClass("slide-" + index);
		});
		$pointer.fadeIn(1000);
		$pointer.delay(1000);
	}, 6500);
}