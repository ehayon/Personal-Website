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
	$(".project").each(function() {
		$(this).hide();
	});
	var current_project = 0;
	var previous_project = -1;
	showProject(previous_project, current_project);
	function showProject(previous_project, current_project) {
		$(".project").each(function(e) {
			if(e != current_project)
				$(this).hide();
		});
		if(previous_project == -1) {
			// the page just loaded, don't slide anything, just place the first project
			$(".project:eq(0)").show();
		} else {	
			$(".project:eq("+previous_project+")").hide('slide', {direction: 'left'}, 1000);
			$(".project:eq("+current_project+")").show('slide', {direction: 'right'}, 1000);
		}
	}

	setInterval(function() {	
		previous_project = current_project;
		current_project += 1;
		projects_count = $(".project").length;
		if(current_project >= (projects_count)) {
			current_project = 0;
		}
		showProject(previous_project, current_project);
	}, 5000);
	
	$("#link-indicator").show()	
	//alert($("#main-navigation a.active").width());
	$("#link-indicator").css("left",$("#main-navigation a.active").offset().left + ($("#main-navigation a.active").width() - 34));
	$("#link-indicator").css("top",$("#main-navigation a.active").offset().top+33);
	
});

