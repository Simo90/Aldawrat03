jQuery(document).ready(function($){
	var overlayNav = $('.cd-overlay-nav'),
		overlayContent = $('.cd-overlay-content'),
		navigation = $('.cd-primary-nav'),
		toggleNav = $('.cd-nav-trigger');

	//inizialize navigation and content layers
	layerInit();
	$(window).on('resize', function(){
		window.requestAnimationFrame(layerInit);
	});

	//open/close the menu and cover layers
	toggleNav.on('click', function(){
	
		if(!toggleNav.hasClass('close-nav')) {
			//it means navigation is not visible yet - open it and animate navigation layer
			toggleNav.addClass('close-nav');
			
			overlayNav.children('span').velocity({
				translateZ: 0,
				scaleX: 1,
				scaleY: 1,
			}, 500, 'easeInCubic', function(){
				navigation.addClass('fade-in');
			});
            
            $('.app_name').hide();
            $('.header').css({ 'background':'#fff' });
		} 
		else{
			
            $('.app_name').show();
            $('.header').css({ 'background':'#428BCA' });
            
            //navigation is open - close it and remove navigation layer
			toggleNav.removeClass('close-nav');
			
			overlayContent.children('span').velocity({
				translateZ: 0,
				scaleX: 1,
				scaleY: 1,
			}, 500, 'easeInCubic', function(){
				navigation.removeClass('fade-in');
				
				overlayNav.children('span').velocity({
					translateZ: 0,
					scaleX: 0,
					scaleY: 0,
				}, 0);
				
				overlayContent.addClass('is-hidden').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function(){
					overlayContent.children('span').velocity({
						translateZ: 0,
						scaleX: 0,
						scaleY: 0,
					}, 0, function(){overlayContent.removeClass('is-hidden')});
				});
				if($('html').hasClass('no-csstransitions')) {
					overlayContent.children('span').velocity({
						translateZ: 0,
						scaleX: 0,
						scaleY: 0,
					}, 0, function(){overlayContent.removeClass('is-hidden')});
				}
			});
		}
        
        return false;
	});
    
    
    // simo
    $('.cd-primary-nav a').click(function(){
        
		$('body').css({ 'background':'#DCE9F5' });
		$('.close-nav').css({ 'visibility':'visible' });
		
        $('.app_name').html( $(this).html() );
        
        if(!toggleNav.hasClass('close-nav')) {
			//it means navigation is not visible yet - open it and animate navigation layer
			toggleNav.addClass('close-nav');
			
			overlayNav.children('span').velocity({
				translateZ: 0,
				scaleX: 1,
				scaleY: 1,
			}, 500, 'easeInCubic', function(){
				navigation.addClass('fade-in');
			});
            $('.app_name').hide();
            $('.header').css({ 'background':'#fff' });
		} 
		else {
			
            $('.app_name').show();
            $('.header').css({ 'background':'#428BCA' });
            //navigation is open - close it and remove navigation layer
			toggleNav.removeClass('close-nav');
			
			overlayContent.children('span').velocity({
				translateZ: 0,
				scaleX: 1,
				scaleY: 1,
			}, 500, 'easeInCubic', function(){
				navigation.removeClass('fade-in');
				
				overlayNav.children('span').velocity({
					translateZ: 0,
					scaleX: 0,
					scaleY: 0,
				}, 0);
				
				overlayContent.addClass('is-hidden').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function(){
					overlayContent.children('span').velocity({
						translateZ: 0,
						scaleX: 0,
						scaleY: 0,
					}, 0, function(){overlayContent.removeClass('is-hidden')});
				});
				if($('html').hasClass('no-csstransitions')) {
					overlayContent.children('span').velocity({
						translateZ: 0,
						scaleX: 0,
						scaleY: 0,
					}, 0, function(){overlayContent.removeClass('is-hidden')});
				}
			});
		}
    })

	function layerInit(){
		var diameterValue = (Math.sqrt( Math.pow($(window).height(), 2) + Math.pow($(window).width(), 2))*2);
		overlayNav.children('span').velocity({
			scaleX: 0,
			scaleY: 0,
			translateZ: 0,
		}, 50).velocity({
			height : diameterValue+'px',
			width : diameterValue+'px',
			top : -(diameterValue/2)+'px',
			left : -(diameterValue/2)+'px',
		}, 0);

		overlayContent.children('span').velocity({
			scaleX: 0,
			scaleY: 0,
			translateZ: 0,
		}, 50).velocity({
			height : diameterValue+'px',
			width : diameterValue+'px',
			top : -(diameterValue/2)+'px',
			left : -(diameterValue/2)+'px',
		}, 0);
	}

	
	
	
	toggleNav.addClass('close-nav');
	$('body').css({ 'background':'#DCE9F5' });
			
	overlayNav.children('span').velocity({
		translateZ: 0,
		scaleX: 1,
		scaleY: 1,
	}, 0, 'easeInCubic', function(){
		navigation.addClass('fade-in');
	});
	
	$('.app_name').hide();
	$('.header').css({ 'background':'#fff' });
	$('.close-nav').css({ 'visibility':'hidden' });
});