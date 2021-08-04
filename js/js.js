var scroll = new SmoothScroll('a[href*="#"]', {
	speed: 1200,
	speedAsDuration: true
});

$(function () {
	//Menu
	//$("header").height($(window).height())
	$(".menu-btn").click(function () {
		$(".popup-menu").css("top", "0");
	})
	$(".popup-menu .container i").click(function () {
		$(".popup-menu").css("top", "-150%");
	})
	// Gallery Section
	var selectedClass = "";
	$(".filter").click(function () {
		selectedClass = $(this).attr("data-rel");
		$("#inner-gallery").fadeTo(100, 0.1);
		$("#inner-gallery div").not("." + selectedClass).fadeOut().removeClass('animation');
		setTimeout(function () {
			$("." + selectedClass).fadeIn().addClass('animation');
			$("#inner-gallery").fadeTo(300, 1);
		}, 300);
	});
	// Animation Of Who we are
	function animateimg() {
		$(".img-who").animate({
			top: '-20px'
		}, 1500, function () {
			$(".img-who").animate({
				top: '20px'
			}, 1500, function () {
				animateimg()
			})
		})
	}
	animateimg()
	// Slider Section
	$(".slider .cont-trigger span").click(function () {
		if ($(this).hasClass("active")) {
			$(this).removeClass("active");
			$(this).siblings().addClass("active");
			$($(this).data("trig")).fadeOut().siblings().fadeIn()
		} else {
			$(this).addClass("active");
			$(this).siblings().removeClass("active");
			$($(this).data("trig")).fadeIn().siblings().fadeOut()
		}
	})

	// Stats Section
/* 		$(".count").each(function(){
				var $this = $(this);
				jQuery({counter: 0}).animate({
					counter: $this.text()
				},{
					duration: 4000,
					easing: "swing",
					step: function() {
						$this.text(Math.ceil(this.counter))
					}
				})
			})  */
});
window.onscroll = function(){

	let divs = document.querySelectorAll(".stats .row div")
	divs.forEach(div => {
		const arrayDiv = div.getAttribute("style").split(" ")
		if(arrayDiv[1] == "visible;"){
			
			var spans = document.querySelectorAll("span.count");
		
			spans.forEach(span => {
				const counter = () => {
				var speed = 40000;
				const number = + span.getAttribute("data-target");
				const spanContent = + span.textContent;
	
				const frame = number / speed
				if (spanContent < number){
					span.innerText = Math.ceil(frame + spanContent)
					setTimeout(counter, 400)
				}else{
					span.innerText = number;
				}
			}
			counter()
			})




		}
	
	})

/* 			function inc() {
				span.textContent = ++count
				if (number === count) {
					clearInterval(interval);
				}
			}
			var interval = setInterval(inc, 2);
		})  */

} 
//loading Section
/* $(window).on("load", function () {
	$(".loading").fadeOut(1000)
}) */