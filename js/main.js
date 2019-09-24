$(document).ready(function(){
	$(".hamburger").click(function() {
		$('header div.Navigator ul').toggleClass('active');
	});
	$("section").click(function() {
		$('header div.Navigator ul').removeClass('active');
		$('.hamburger svg').removeClass('active');
	});

	if ($(window).width() < 992) {
		$("header .header-nav .Nav > ul > li > a").clone().appendTo("div.mobileMenu");
		$("header .header-nav .Nav > ul > li.link").hide();
	};

	//Random Colors
	var colors = ['#cc3300','#0066ff','#00b33c','#ffcc66','#00ffcc','#ff751a','#C240B8','#768A2E','#69A0FF','#43402D','#61EB71'];

	$('section.project .item div.bg').each(function(){
		var new_color = colors[Math.floor(Math.random()*colors.length)];
		$(this).css('background-color',new_color);
	});

});

//Yes thats code so funny but it is just test :)
$(window).scroll(function() {    
	var scroll = $(window).scrollTop();
	var pageTitle = 'Start a project - Murat CAN';

	if (scroll >= 24) {
		$("header").addClass("FixedHead");
		$("body").addClass("FixedHead");
	}else{
		$("header").removeClass("FixedHead");
		$("body").removeClass("FixedHead");
	}

	if (scroll >= 114) {
		$("div.main-title").addClass("active");
		document.title ='WORK - Murat CAN'; 
		if ($("section.coffee").hasClass("active")){

			document.title = pageTitle;
		}
	}
	else{
		$("div.main-title.active").removeClass("active");
		document.title ='EXPLORE - Murat CAN';
	}
});





//Triangle Slider
function triangleGenerator(){
	var triangleSVG;
	var triangleContainer = document.getElementById('triangle-wrapper');
	var triangleMapColorRender = function (path) {
		var random = 33;
		var ratio = (path.x + path.y) / (path.cols + path.lines);
		var code = Math.floor(255 - (ratio * (255-random)) - Math.random()*random).toString(16);
		return '#' + code + '006997';
	};


	var rendertriangle = function() {
		if (!!triangleSVG) {
			triangleSVG.remove();
		}
		triangleSVG = new Triangulr(

			window.innerWidth,
			window.innerHeight,
			100,
			50,
			triangleMapColorRender
			);

		triangleContainer.appendChild(triangleSVG);
	}
	window.onresize = rendertriangle;
	rendertriangle();
};


//TypeWriter
function typeWriter(){
	var app = document.getElementById('writeText');

	var typewriter = new Typewriter(app, {
		loop: true
	});


	typewriter.typeString('YOUR PARTNER FOR YOUR IDEAS.')
	.pauseFor(1700)
	.deleteAll()
	.typeString('OPEN FOR NEW CHALLENGES.')
	.pauseFor(1700)
	.deleteAll()
	.typeString('THE ART COMVENTURE FROM BERLIN.')
	.pauseFor(1700)
	.deleteAll()
	.start();

};

if (window.location.pathname == '/artcom/index.php'){
	triangleGenerator();
	typeWriter();
};


//NavLinksTrigger
var sections = $('section')
, nav = $('.Navigator')
, nav_height = nav.outerHeight();

$(window).on('scroll', function () {
	var cur_pos = $(this).scrollTop();

	sections.each(function() {
		var top = $(this).offset().top - nav_height - 250 ,
		bottom = top + $(this).outerHeight();

		if (cur_pos >= top && cur_pos <= bottom) {
			nav.find('a').removeClass('active');
			sections.removeClass('active');
			$(this).addClass('active');
			nav.find('a[href="index.php#'+$(this).attr('id')+'"]').addClass('active');
		}
	});
});


window.onload = function() {
	setTimeout(function(){ $("#onload").addClass('loading');}, 1400);
};
