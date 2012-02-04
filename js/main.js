$(document).ready(function() {
	// change the opacity of the tagline if the mouse enters the banner
	$("#header").bind("mouseenter", function() {
		$("#header-logo #tagline").addClass('active');
		$("#header-logo #tagline").removeClass('inactive');
	});
	$("#header").bind("mouseleave", function() {
		$("#header-logo #tagline").toggleClass('inactive');
		$("#header-logo #tagline").removeClass('active');		
	});
	// hide all of the projects except the first
	function showNextProject(previous_project, current_project) {
	}
	setInterval(function() {	
		
	}, 2000);
});

