$(document).ready(function(){

	var buttonContainer = $(".btn-nav-container");
	var buttonContainerChildren = buttonContainer.children();

	function addActive(){
		buttonContainerChildren.removeClass("active");
		$(this).addClass("active");
	};

	buttonContainerChildren.on("click", addActive);
});