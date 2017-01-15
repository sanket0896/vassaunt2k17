$('document').ready(function() {

	var isFull,thisPanel,thisItem,selectedItem,selectedDescription;

	isFull=false;
	thisItem='div.event.full div.event-list li.item1';
	selectedDescription='div.event.full div.event-description div.item1';

	$('div.event.panel').click(function() {
		if(!isFull){
			t=false;
			thisPanel=$(this);
			thisPanel.addClass("full z-index");
			thisPanel.one("transitionend", function() {
				$('div.event.panel.full div.event-content-wrapper.hidden')
					.addClass("visible");
				});

			$(selectedDescription).removeClass("visible");
			$(thisItem).removeClass("selected");
			thisItem='div.event.full div.event-list li.item1';
			selectedDescription='div.event.full div.event-description div.item1';
			$(thisItem).addClass("selected");
			$(selectedDescription).addClass("visible");

			isFull=true;
		} 
		$('div.event.panel.full div.close-button').on("click",function() {
			thisPanel.removeClass("full");
			$('div.event-content-wrapper.hidden')
			.removeClass("visible");
			thisPanel.one("transitionend", function() {
				
				thisPanel.removeClass("z-index");
				isFull=false;
			});
			
		});


		$('div.event.full div.event-list li').on("click",function() {
				$(selectedDescription).removeClass("visible");
				$(thisItem).removeClass("selected");
				thisItem=$(this);
				selectedItem=thisItem.attr("class");
				console.log("clicked on "+selectedItem);
				thisItem.addClass("selected");
				selectedDescription='div.event.full div.event-description div.'+selectedItem;
				$(selectedDescription).addClass("visible");
			});

	});

});