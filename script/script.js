$(".temporary__cta").on("click", function() {
    $(".temporary").addClass("remove-block");
})

$('.header__link').on('click', function () {
	$('.header__link').removeClass('active').eq($(this).index('.header__link')).addClass('active');
});

$('.header__menu').on('click', function() {
    $('.header__navigation-block').toggleClass('active-menu');
    if($(".header__navigation-block").hasClass("active-menu")) {
		$('body').addClass('fixed-position');
	} else {
		$('body').removeClass('fixed-position');
	}
});