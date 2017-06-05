$(document).ready(function(){

	var buttonContainer = $(".btn-nav-container");
	var buttonContainerChildren = buttonContainer.children();
   	var btnNavContent = $(".btn-nav-content");

	function addActive(e){
		buttonContainerChildren.removeClass("btn-active");
		$(this).addClass("btn-active");
	};

	function FlipXIn(event){
       	$(btnNavContent).children().css("display", "none");//Need to edit with inline CSS to override velocity

		event.preventDefault();
		event.stopPropagation();
	   	var target = $(this).attr('href');//This var needs to stay local to avoid effecting all a tags.

       	$(target).addClass("visible");
        $(target).velocity({translateY:"-60px"}, { duration: 260});
        $(target).velocity('transition.slideDownIn', { duration: 200});
	};

	buttonContainerChildren.on("click", addActive);
	$("a.btn-nav").on("click", FlipXIn);
});