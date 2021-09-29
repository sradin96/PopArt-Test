$(".temporary__cta").on("click", function() {
    $(".temporary").addClass("remove-block");
})

$('.header__link').on('click', function () {
	$('.header__link').removeClass('active').eq($(this).index('.header__link')).addClass('active');
});