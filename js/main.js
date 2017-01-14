$('document').ready(function() {

	var isFull=false,ck=0,dep='div.event.panel';

	$(dep).click(function() {
		if(!isFull){
			$(this).addClass("full z-index");
			$(this).one("transitionend", function() {
				$('div.event-content-wrapper.hidden')
					.addClass("visible");
				});


			isFull=true;
		} 

		$('div.close-button').click(function() {
			$('div.event-content-wrapper.hidden')
					.removeClass("visible");
			$(dep).removeClass("full");
			$(dep).one("transitionend", function() {
				$(dep).removeClass("z-index");
				isFull=false;
			});
		});

	});



		$('div.event.full div.event-list li.item1').one("click",function() {
				console.log("Clicked"+(++ck));
				$('div.event.full div.event-description .item1')
					.addClass("visible");
			});

});