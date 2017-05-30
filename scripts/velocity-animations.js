window.Velocity = window.Velocity || (window.jQuery || window.Zepto || window).Velocity;


//$(document).ready(function(){

    //var introContainer = $('.intro-container').children();
    //var $endPage = $('#end');
    //introContainer.velocity({opacity:0}, {duration:1});
    //introContainer.velocity("transition.expandIn", {stagger:250, delay: 400});
    //$endPage.velocity("scroll", {introContainer}, {duration:1000, easing:"ease-in"});
//});

var ending = document.getElementById("end");

/*function scrollAuto(e){
	Velocity(ending, "scroll", {duration:900, easing:"ease-in"});
}

window.addEventListener("load", scrollAuto, false); */

var btnTop = document.getElementById("btn-top");
var header = document.getElementById("top");

function scrollTop(){
	Velocity(header, "scroll", {duration:800});
	Velocity(header, "reverse", {duration:800, delay: 1000});
}	

btnTop.addEventListener("click", scrollTop, false);