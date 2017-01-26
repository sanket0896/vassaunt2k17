$('document').ready(function() {

	/***************** For Events Page *****************/

	var isFull,thisPanel,thisItem,selectedItem,selectedDescription;

	isFull=false;
	thisItem='div.event.full div.event-list li.item1';
	selectedDescription='div.event.full div.event-description div.item1';

	$('div.event.panel').click(function() {
		if(!isFull){
			t=false;
			thisPanel=$(this);
			thisPanel.addClass("full z-index");
			$('body').addClass("hide-overflow");
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
			$('body').removeClass("hide-overflow");
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

	/***************** For About Us Page *****************/

	var video,winHeight,docHeight,vidHeight,vidOffset,playTime,scrollPosition;

	video = $('#web-video')[0];
	winHeight = $(window).height();
	docHeight = $(document).height();
	vidHeight = $('#video-container').height();
	vidOffset = $('#web-video').offset().top;

	video.play();

	$(window).scroll(function(){
		
		scrollPosition = $(window).scrollTop();
		playTime=((scrollPosition + winHeight - vidOffset) / winHeight) *2;
		
		video.pause();

		if((scrollPosition + winHeight >= vidOffset) && (scrollPosition < docHeight - vidOffset )){
			
			video.currentTime = playTime;

			video.pause();
		} 
	});

	/***************** For Scroll Locking a Page *****************

	var locked,lastScroll,reached,scrolled,ofset;

	locked = false;
	lastScroll = -1;
	 var $div = $('div.scroll-lock');
	ofset = $div.offset().top;

	$(window).scroll(function(){

		scrolled=$(window).scrollTop();
		console.log("scrolled = "+scrolled);
	    reached=scrolled+ (winHeight/2);
	    console.log("reached = "+reached);
	    console.log("offset = "+ofset);
	    if(reached>= ofset){
	    	locked=true;
	    }

	$('body').bind('mousewheel', function(e) { // on scroll


	 if (locked) {

		    lastScroll = $div.scrollTop();

		    
		    $div.scrollTop($div.scrollTop() 
		                    - e.originalEvent.wheelDelta);
		console.log("lastScroll = "+lastScroll);
		console.log("scrollTop = "+$div.scrollTop());
		    return false; 
		}

		else if($div.scrollTop()==lastScroll && locked){
			locked=false;
			// $div.scrollTop(0);
			lastScroll = -1;  
			return true;
		}
		});
	});

   ****************************************************************/

});