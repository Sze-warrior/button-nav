$(document).ready(function(){

	var buttonContainer = $(".btn-nav-container");
	var buttonContainerChildren = buttonContainer.children();
   	var target = $(this).attr('href');

	function addActive(){
		buttonContainerChildren.removeClass("active");
		$(this).addClass("active");
	};

	function FlipXIn(event){
		event.preventDefault();
		event.stopPropagation();

       var target = $(this).attr('href');
        $(target).velocity('transition.slideDownIn', {
            duration: 500
        });
        $(target).velocity('transition.slideUpOut', {
            duration: 500, delay: 1000
        });

	}

	buttonContainerChildren.on("click", addActive);
	$("a.btn-nav").on("click", FlipXIn);
});