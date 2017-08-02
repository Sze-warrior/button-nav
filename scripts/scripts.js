var btnNavSwitch = document.querySelectorAll('.btn-nav');

if(btnNavSwitch){
	function setActive(e){
		var target = e.currentTarget;
		
		for(var i = 0; i < btnNavSwitch.length; i++){
			btnNavSwitch[i].classList.remove('btn-active');
		};
		target.classList.add('btn-active');
	};

	for(var i = 0; i < btnNavSwitch.length; i++){
		btnNavSwitch[i].addEventListener("click", setActive, false);
	}
};