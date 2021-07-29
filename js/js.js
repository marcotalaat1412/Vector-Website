var scroll = new SmoothScroll('a[href*="#"]', {
	speed: 1200,
	speedAsDuration: true
});

$(function () {
	//make nice scroll
	$("html").niceScroll();
	//Menue
	$(".menu, .menu-btn").click(function () {
		$(".popup-menu").css("top", "0");
	})
	$(".popup-menu .container i").click(function () {
		$(".popup-menu").css("top", "-100%");
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
	/* 	$(".count").each(function(){
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
var spans = document.querySelectorAll("span.count");

spans.forEach(span => {
	var num = 1;
	var number = +span.getAttribute("data-target");
	
	var interval = setInterval(inc, 10);
	function inc() {
		span.textContent = ++num
		if (number == num) {
			clearInterval(interval)
		}
	}
})

//loading Section
$(window).on("load", function () {
	$(".loading").fadeOut(1000)
})