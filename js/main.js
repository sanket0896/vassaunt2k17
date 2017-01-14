$('document').ready(function() {

	var isFull=false,ck=0,dep='div.event.panel';

	$(dep).click(function() {
		if(!isFull){
			$(this).addClass("full z-index");
			$(this).one("transitionend", function() {
				$('div.event.full div.event-content-wrapper.hidden')
					.addClass("visible");
			});

			isFull=true;
		} 

		else{
			$('div.event.full div.event-content-wrapper')
					.removeClass("visible");
			$(this).removeClass("full");
			
			$(this).one("transitionend",function() {
				$(this).removeClass("z-index");
			});
			isFull=false;
		}
	});

		$('div.event.full div.event-list li.item1').one("click",function() {
				console.log("Clicked"+(++ck));
				$('div.event.full div.event-description .item1')
					.addClass("visible");
			});

	function closePanel(){
		$(dep).removeClass("full z-index");
		console.log("Rem");
	}


});