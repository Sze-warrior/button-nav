window.Velocity = window.Velocity || (window.jQuery || window.Zepto || window).Velocity;

const btnContainer = document.querySelectorAll(".btn-nav-container");
const btnNav = document.querySelectorAll(".btn-nav");
const btnContainerChildren = btnContainer.childNodes;

if(btnNav){

	function addActive(e){

		for(var i = 0; i < btnNav.length; i++){
			const btnNav = document.querySelectorAll(".btn-nav");

			btnNav.classList.remove("btn-active");
			e.currentTarget.classList.add("btn-active");
		}
	}

	for(var i = 0; i < btnNav.length; i++){
		btnNav[i].addEventListener("click", addActive, false);
	}

}