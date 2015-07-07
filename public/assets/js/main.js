//modals
$('#sponsors-modal-link').animatedModal({
	modalTarget: 'sponsors-modal',
	animatedIn: 'lightSpeedIn',
	animatedOut: 'bounceOutLeft'
});

$('#speakers-modal-link').animatedModal({
	modalTarget: 'speakers-modal',
	animatedIn: 'lightSpeedIn',
	animatedOut: 'bounceOutLeft'
});

$('#workshops-modal-link').animatedModal({
	modalTarget: 'workshops-modal',
	animatedIn: 'lightSpeedIn',
	animatedOut: 'bounceOutLeft'
});

// Smooth scrolling plugin by Chris Coiyer
// Source: http://css-tricks.com/snippets/jquery/smooth-scrolling/
$('a[href*=#]:not([href=#])').click(function() {
	if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') || location.hostname == this.hostname) {
	  var target = $(this.hash);
	  target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
	  if (target.length) {
	    $('html,body').animate({
	      scrollTop: target.offset().top
	    }, 1000);
	    window.location.hash = target.selector;
	    return false;
	  }
	}
});
