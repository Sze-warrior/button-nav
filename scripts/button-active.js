$(document).ready(function(){

	var buttonContainer = $(".btn-nav-container");
	var buttonContainerChildren = buttonContainer.children();
   	var target = $(this).attr('href');


	function addActive(e){
		buttonContainerChildren.removeClass("btn-active");
		$(this).addClass("btn-active");
	};

	function FlipXIn(event){
		event.preventDefault();
		event.stopPropagation();

       	var target = $(this).attr('href');

       	$(".content").children().css("display", "none");

       	$(target).addClass("visible");
        $(target).velocity('transition.fadeIn', {
            duration: 200
        });
	};

	buttonContainerChildren.on("click", addActive);
	$("a.btn-nav").on("click", FlipXIn);
});